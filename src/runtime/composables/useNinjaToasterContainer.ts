import { ref } from 'vue'
import { tryOnBeforeMount } from '@vueuse/core'

import type { NinjaToasterTheme } from '../../theme'

export function useNinjaToasterContainer(theme?: NinjaToasterTheme) {
  const container = ref<Element | null>(null)
  const containerId = theme?.containerId ?? 'nt-container'

  tryOnBeforeMount(() => {
    container.value = document.getElementById(containerId)

    if (!container.value) {
      container.value = document.createElement('div')
      container.value.id = containerId

      document.body.appendChild(container.value)
    }

    if (theme?.containerClass) {
      container.value.className = Array.isArray(theme.containerClass)
        ? theme.containerClass.join(' ')
        : theme.containerClass
    }
  })

  return {
    container,
    containerId
  }
}
