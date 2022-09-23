import { type App, h, render } from 'vue'
import { defu } from 'defu'

import type { NinjaToasterTheme } from '../theme'
import type { NinjaToasterProps } from '../props'
import type { NinjaToasterRenderQueue } from './queue'
import { createEventBus } from './events'
import NinjaToaster from './components/NinjaToaster'
import { useNuxtApp, useRuntimeConfig } from '#app'

function createElement() {
  if (process.server) {
    return null
  }

  return document.createElement('div')
}

function mountWithContext(app: App, component: any, props: NinjaToasterProps) {
  const el = createElement()

  if (el) {
    const vNode = h(component, props)

    if (app && app._context) {
      vNode.appContext = app._context
    }
    render(vNode, el)
  }
}

export interface NinjaToasterShow {
  el: HTMLElement | null
  close: () => void
}

export function createNinjaToaster(
  createOptions: Omit<NinjaToasterProps, 'content'> = {}
) {
  const events = createEventBus()
  const queues: Map<string, NinjaToasterRenderQueue> = new Map()

  function show(options: NinjaToasterProps | string | number) {
    const config = useRuntimeConfig()
    const app = useNuxtApp().vueApp
    const userProps =
      typeof options === 'string' ||
      typeof options === 'number' ||
      typeof options === 'function'
        ? { content: options }
        : options
    const props: NinjaToasterProps = defu(
      config.public.nt,
      createOptions,
      userProps
    )

    return new Promise<NinjaToasterShow>((resolve) => {
      mountWithContext(app, NinjaToaster, {
        ...props,
        onShow: (toast: NinjaToasterShow) => {
          resolve(toast)

          if (props.onShow) {
            props.onShow(toast)
          }
        }
      })

      if (process.server) {
        resolve({
          el: null,
          close: () => {}
        })
      }
    })
  }

  function clearAll() {
    console.log('clear all')

    events.emit('clear')
    queues.forEach((queue) => {
      queue.clear()
    })
    queues.clear()
  }

  function clear(theme: NinjaToasterTheme | string) {
    const containerId = typeof theme === 'string' ? theme : theme.containerId

    console.log('clear', containerId)

    events.emit(`clear-${containerId}`)
    if (queues.has(containerId)) {
      queues.get(containerId)?.clear()
    }
  }

  return {
    events,
    queues,
    show,
    clearAll,
    clear
  }
}
