import { type App, h, render } from 'vue'
import { defu } from 'defu'

import type { NinjaToasterProps } from '../props'
import type { NinjaToastRenderQueue } from './queue'
import { createEventBus } from './events'
import NinjaToaster from './components/NinjaToaster'
import { defineNuxtPlugin, useNuxtApp, useRuntimeConfig } from '#app'

function createElement() {
  if (process.server) {
    return null
  }

  return document.createElement('div')
}

function mountToast(component, props, app: App) {
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

export default defineNuxtPlugin(() => {
  const events = createEventBus()
  const queues: Map<string, NinjaToastRenderQueue> = new Map()

  const nt = {
    events,
    queues,
    show(options: NinjaToasterProps | string) {
      return new Promise<NinjaToasterShow>((resolve) => {
        const config = useRuntimeConfig()
        const app = useNuxtApp().vueApp
        const userProps =
          typeof options === 'string' ? { content: options } : options
        const props = defu(config.public.nt, userProps)

        mountToast(
          NinjaToaster,
          {
            ...props,
            onShow: (toast) => {
              resolve(toast)

              if (props.onShow) {
                props.onShow(toast)
              }
            }
          },
          app
        )

        if (process.server) {
          resolve({
            el: null,
            close: () => {}
          })
        }
      })
    },
    clear() {
      events.emit('clear')
      queues.forEach((queue) => {
        queue.clear()
      })
      queues.clear()
    }
  }

  return {
    provide: {
      nt
    }
  }
})
