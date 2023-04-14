import type {
  Component,
  DefineComponent,
  Ref,
  TransitionProps,
  VNode
} from 'vue'

export interface ModuleOptions {
  installPlugin?: boolean
}

export interface NinjaToasterShow {
  el: HTMLElement | null
  close: () => void
}

export interface NinjaToasterBaseProps {
  duration?: number
  theme?: NinjaToasterTheme
  dismissible?: boolean
  pauseOnHover?: boolean
}

export interface NinjaToasterProps extends NinjaToasterBaseProps {
  content?: string | number | Record<string, any> | (() => Component)
  onShow?: (toast: NinjaToasterShow) => void
  onClose?: () => void
  onClick?: (event: Event) => void
}

export interface NinjaToasterTheme {
  containerId?: string
  containerClass?: string | string[]
  wrapperClass?: string | string[]
  transition?: TransitionProps
  maxToasts?: number
}

export interface NinjaPausableTimeout {
  pausedAt: Ref<number>
  startedAt: Ref<number>
  remaining: Ref<number>
  start: () => void
  stop: () => void
  pause: () => void
  resume: () => void
}

export interface NinjaToasterState {
  isHovered: Ref<boolean>
  isActive: Ref<boolean>
  timer: NinjaPausableTimeout
  duration: number
  click: (event: Event) => void | Promise<void>
  close: () => void | Promise<void>
}

export type DefaultProps = InstanceType<DefineComponent>['$props']

export type ComponentProps<T> = T extends keyof typeof import('#components')
  ? Omit<
      InstanceType<typeof import('#components')[T]>['$props'],
      keyof DefaultProps
    >
  : undefined

export interface NinjaToasterInstance {
  showComponent: <T extends keyof typeof import('#components')>(
    name: T,
    params: {
      props?: ComponentProps<T>
      children?: any
      options?: Omit<NinjaToasterProps, 'content'>
    }
  ) => Promise<NinjaToasterShow>
  show: (
    options: NinjaToasterProps | string | number | (() => VNode)
  ) => Promise<NinjaToasterShow>
  clear: (theme: NinjaToasterTheme | string) => void
  clearAll: () => void
}
