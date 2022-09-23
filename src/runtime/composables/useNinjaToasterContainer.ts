import { ref } from 'vue'
import { tryOnBeforeMount } from '@vueuse/core'

import type { NinjaToastTheme } from '../../theme'

export function useNinjaToasterContainer(theme?: NinjaToastTheme) {
  const container = ref<Element | null>(null)
  const containerId = theme?.containerId || 'nt-container'

  tryOnBeforeMount(() => {
    container.value = document.getElementById(containerId)

    if (!container.value) {
      container.value = document.createElement('div')
      container.value.id = containerId

      document.body.appendChild(container.value)
    }

    if (theme?.containerClass) {
      container.value.className = theme.containerClass
    }
  })

  return {
    container,
    containerId
  }
}
