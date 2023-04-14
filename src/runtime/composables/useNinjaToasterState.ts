import type { InjectionKey } from 'vue'
import { computed, inject, provide, ref } from 'vue'
import { tryOnBeforeUnmount, tryOnMounted } from '@vueuse/core'

import type { NinjaToasterState } from '../../types'

export const NinjaToasterStateKey = Symbol.for(
  'NinjaToasterState'
) as InjectionKey<NinjaToasterState>

export function createNinjaToasterState(state: NinjaToasterState) {
  provide(NinjaToasterStateKey, state)
}

export function useNinjaToasterState() {
  const state = inject(NinjaToasterStateKey)

  if (!state) {
    throw new Error('NinjaToasterState is not provided')
  }

  return state
}

export function useNinjaToasterProgress() {
  const state = useNinjaToasterState()

  const now = ref(Date.now())
  const endAt = computed(() => {
    return state.timer.startedAt.value + state.timer.remaining.value
  })
  const closeIn = computed(() => {
    return now.value - endAt.value
  })
  const percent = computed(() => {
    if (!state.duration) {
      return 0
    }
    const ratio = 1 - Math.max(0, Math.abs(closeIn.value)) / state.duration

    return Math.round(ratio * 1000) / 1000
  })

  let interval: any
  tryOnMounted(() => {
    interval = setInterval(() => {
      if (!state.isHovered.value) {
        now.value = Date.now()
      }
    }, 16)
  })
  tryOnBeforeUnmount(() => {
    clearInterval(interval)
    interval = undefined
  })

  return {
    percent,
    endAt,
    closeIn
  }
}
