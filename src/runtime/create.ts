import { type App, h, render } from 'vue'
import { defu } from 'defu'

import type { NinjaToasterTheme } from '../theme'
import type { NinjaToasterBaseProps, NinjaToasterProps } from '../props'
import type { NinjaToasterRenderQueue } from './queue'
import { type NinjaToastEventBus, createEventBus } from './events'
import NinjaToaster from './components/NinjaToaster'

import { useAppConfig, useNuxtApp } from '#imports'

function createElement() {
  if (process.server) {
    return null
  }

  return document.createElement('div')
}

function mountWithContext(
  app: App,
  component: any,
  props: NinjaToasterProps & {
    events: NinjaToastEventBus
    queues: Map<string, NinjaToasterRenderQueue>
  }
) {
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
  createProps: Omit<NinjaToasterProps, 'content'> = {}
) {
  const events = createEventBus()
  const queues: Map<string, NinjaToasterRenderQueue> = new Map()

  function show(options: NinjaToasterProps | string | number) {
    const appConfigProps: NinjaToasterBaseProps = (useAppConfig() as any)
      .toaster
    const app = useNuxtApp().vueApp
    const userProps =
      typeof options === 'string' ||
      typeof options === 'number' ||
      typeof options === 'function'
        ? { content: options }
        : options

    const props: NinjaToasterProps = defu(
      userProps,
      createProps,
      appConfigProps
    )

    return new Promise<NinjaToasterShow>((resolve) => {
      mountWithContext(app, NinjaToaster, {
        ...props,
        events,
        queues,
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
    events.emit('clear')
    queues.forEach((queue) => {
      queue.clear()
    })
    queues.clear()
  }

  function clear(theme: NinjaToasterTheme | string) {
    const containerId = typeof theme === 'string' ? theme : theme.containerId

    events.emit(`clear-${containerId}`)
    if (queues.has(containerId)) {
      queues.get(containerId)?.clear()
    }
  }

  return {
    show,
    clearAll,
    clear
  }
}
