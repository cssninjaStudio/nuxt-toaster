import type { Component, TransitionProps } from 'vue'
import type { NinjaToasterShow } from './runtime/plugin'

import type { NinjaToastTheme } from './theme'

export interface NinjaToasterBaseProps {
  duration?: number
  transition?: TransitionProps
  theme?: NinjaToastTheme
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
