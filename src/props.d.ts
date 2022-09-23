import type { Component, TransitionProps } from 'vue'
import type { NinjaToasterShow } from './runtime/create'

import type { NinjaToasterTheme } from './theme'

export interface NinjaToasterBaseProps {
  duration?: number
  transition?: TransitionProps
  theme?: NinjaToasterTheme
  dismissible?: boolean
  pauseOnHover?: boolean
  maxToasts?: number
}
export interface NinjaToasterProps extends NinjaToasterBaseProps {
  content?: string | number | Record<string, any> | (() => Component)
  onShow?: (toast: NinjaToasterShow) => void
  onClose?: () => void
  onClick?: (event: Event) => void
}
