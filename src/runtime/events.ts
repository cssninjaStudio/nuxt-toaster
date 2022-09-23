export type NinjaToasterEventCallback = (...args: any) => void

export function createEventBus() {
  const queue: Record<string, NinjaToasterEventCallback[]> = {}

  function on(name: string, callback: NinjaToasterEventCallback) {
    queue[name] = queue[name] || []
    queue[name].push(callback)
  }

  function off(name: string, callback: NinjaToasterEventCallback) {
    if (queue[name]) {
      for (let i = 0; i < queue[name].length; i++) {
        if (queue[name][i] === callback) {
          queue[name].splice(i, 1)
          break
        }
      }
    }
  }

  function emit(name: string, ...args: any) {
    if (queue[name]) {
      queue[name].forEach((callback) => {
        callback(...args)
      })
    }
  }

  return {
    queue,
    on,
    off,
    emit
  }
}

export type NinjaToastEventBus = ReturnType<typeof createEventBus>
