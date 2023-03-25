import { ref } from 'vue'
import { tryOnBeforeUnmount } from '@vueuse/core'
import { NinjaPausableTimeout } from '../../types'


export function useNinjaPausableTimeout(callback: Function, timeout?: number): NinjaPausableTimeout {
  const pausedAt = ref(0)
  const startedAt = ref(0)
  const remaining = ref(0)

  let timer: number | undefined

  function stop() {
    if (!timer) {
      return
    }

    clearTimeout(timer)
    timer = undefined
  }

  function start() {
    pausedAt.value = 0
    startedAt.value = Date.now()
    remaining.value = timeout ?? 0

    stop()
    timer = setTimeout(callback, remaining.value)
  }

  function pause() {
    if (!startedAt.value || pausedAt.value) {
      return
    }

    stop()
    pausedAt.value = Date.now()
  }

  function resume() {
    if (!pausedAt.value) {
      return
    }
    stop()

    remaining.value -= pausedAt.value - startedAt.value
    startedAt.value = Date.now()
    pausedAt.value = 0

    timer = setTimeout(callback, remaining.value)
  }

  tryOnBeforeUnmount(stop)

  return {
    pausedAt,
    startedAt,
    remaining,
    start,
    stop,
    pause,
    resume
  }
}
