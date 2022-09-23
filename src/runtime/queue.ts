export interface NinjaToasterQueue {
  until: () => boolean
  callback: () => void
}

export function createRenderQueue() {
  // last in last out queue
  const queue: NinjaToasterQueue[] = []
  let timer: ReturnType<typeof setTimeout> | undefined

  function add(item: NinjaToasterQueue) {
    queue.push(item)

    // wait until verify is true, then execute the queue
    if (!timer) {
      timer = setTimeout(next, 100)
    }

    return () => {
      remove(item)
    }
  }

  function remove(item: NinjaToasterQueue) {
    const index = queue.indexOf(item)
    if (index !== -1) {
      queue.splice(index, 1)
    }
  }

  function clear() {
    queue.length = 0
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }
  }

  function next() {
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }

    const firstElement = queue[0]
    if (!firstElement) {
      return
    }

    if (!firstElement.until()) {
      timer = setTimeout(next, 100)
      return
    }

    // remove the first element from the queue
    queue.shift()

    // execute the callback
    firstElement.callback()

    if (queue.length > 0) {
      timer = setTimeout(next, 100)
    }
  }

  return {
    add,
    remove,
    clear
  }
}

export type NinjaToasterRenderQueue = ReturnType<typeof createRenderQueue>
