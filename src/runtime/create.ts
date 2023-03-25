import { type App, type VNode, h, render } from 'vue'
import { defu } from 'defu'

import type { NinjaToasterTheme, NinjaToasterBaseProps, NinjaToasterProps, NinjaToasterShow } from '../types'
import type { NinjaToasterRenderQueue } from './queue'
import { type NinjaToastEventBus, createEventBus } from './events'
import NinjaToaster from './components/NinjaToaster'

import { resolveComponent, useAppConfig, useNuxtApp } from '#imports'
import type * as _AllComponents from '#components'

type ComponentProps<T> = T extends keyof typeof _AllComponents
  ? InstanceType<(typeof _AllComponents)[T]>['$props']
  : undefined

function createElement() {
  // @ts-ignore
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


function ensureClassesArray(theme?: NinjaToasterTheme) {
  if (theme?.containerClass && !Array.isArray(theme.containerClass)) {
    theme.containerClass = [theme.containerClass]
  }
  if (theme?.wrapperClass && !Array.isArray(theme.wrapperClass)) {
    theme.wrapperClass = [theme.wrapperClass]
  }
}

export function createNinjaToaster(
  createProps: Omit<NinjaToasterProps, 'content'> = {}
) {
  const events = createEventBus()
  const queues: Map<string, NinjaToasterRenderQueue> = new Map()

  function showComponent<T extends keyof typeof _AllComponents>(name: T, {
    props,
    children,
    options,
  }: {
    props?: ComponentProps<T>,
    children?: any
    options?: Omit<NinjaToasterProps, 'content'>
  }) {
    const content = () => h(resolveComponent(name), props, children)
    return show({
      ...options,
      content,
    })
  }

  function show(options: NinjaToasterProps | string | number | (() => VNode)) {
    const appConfigProps = useAppConfig()?.toaster as NinjaToasterBaseProps
    const app = useNuxtApp().vueApp
    const userProps =
      typeof options === 'string' ||
      typeof options === 'number' ||
      typeof options === 'function'
        ? { content: options }
        : options

    ensureClassesArray(userProps?.theme)
    ensureClassesArray(createProps?.theme)
    ensureClassesArray(appConfigProps?.theme)

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

      // @ts-ignore
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
    const containerId =
      typeof theme === 'string' ? theme : theme.containerId ?? 'nt-container'

    events.emit(`clear-${containerId}`)
    if (queues.has(containerId)) {
      queues.get(containerId)?.clear()
    }
  }

  return {
    show,
    showComponent,
    clearAll,
    clear
  }
}
