import type { Component, TransitionProps } from 'vue'


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
  containerId?: string;
  containerClass?: string | string[];
  wrapperClass?: string | string[];
  transition?: TransitionProps
  maxToasts?: number
}
