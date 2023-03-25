import { ref, computed } from 'vue'
import { tryOnBeforeMount, MaybeComputedRef } from '@vueuse/core'

import type { NinjaToasterTheme } from '../../types'

export function useNinjaToasterContainer(_theme: MaybeComputedRef<NinjaToasterTheme>) {
  const theme = computed(() => {
    if (typeof _theme === 'function')  return _theme()
    if (isRef(_theme)) return _theme.value
    return _theme
  })
  const container = ref<Element | null>(null)
  const containerId = computed(() => theme.value?.containerId ?? 'nt-container')

  tryOnBeforeMount(() => {
    container.value = document.getElementById(containerId.value)

    if (!container.value) {
      container.value = document.createElement('div')
      container.value.id = containerId.value

      document.body.appendChild(container.value)
    }

    if (theme.value?.containerClass) {
      container.value.className = Array.isArray(theme.value.containerClass)
        ? theme.value.containerClass.join(' ')
        : theme.value.containerClass
    }
  })

  return {
    container,
    containerId
  }
}
