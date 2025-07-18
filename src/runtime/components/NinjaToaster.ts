import type { PropType } from 'vue'
import {
  Suspense,
  Transition,
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  vShow,
  withDirectives,
} from 'vue'
import { defu } from 'defu'

import type { NinjaToastEventBus } from '../events'
import type { NinjaToasterProps } from '../../types'
import { useNinjaPausableTimeout } from '../composables/useNinjaPausableTimeout'
import { useNinjaToasterContainer } from '../composables/useNinjaToasterContainer'
import { createNinjaToasterState } from '../composables/useNinjaToasterState'
import { type NinjaToasterRenderQueue, createRenderQueue } from '../queue'

export default defineComponent({
  name: 'NinjaToaster',
  props: {
    content: {
      type: [String, Number, Object, Function] as PropType<
        NinjaToasterProps['content']
      >,
      required: true,
    },
    duration: {
      type: Number,
      default: 5000,
    },
    theme: {
      type: Object as PropType<NinjaToasterProps['theme']>,
      default: () => ({}),
    },
    dismissible: {
      type: Boolean,
      default: true,
    },
    pauseOnHover: {
      type: Boolean,
      default: true,
    },
    queues: {
      type: Map as PropType<Map<string, NinjaToasterRenderQueue>>,
      default: () => new Map(),
    },
    events: {
      type: Object as PropType<NinjaToastEventBus>,
      default: () => ({}),
    },
  },
  emits: ['close', 'click', 'show'],
  setup(props, { emit }) {
    const theme = computed(() => {
      return defu(props.theme ?? {}, {
        containerClass: [],
        wrapperClass: [],
        containerId: 'nt-container',
        maxToasts: Infinity,
        transition: undefined,
      })
    })

    const { container, containerId } = useNinjaToasterContainer(theme)
    const timer = useNinjaPausableTimeout(() => {
      close()
    }, props.duration)

    const isHovered = ref(false)
    const isActive = ref(false)
    const unqueue = ref<() => void>()
    const rootElement = ref<HTMLElement>()
    let queue: NinjaToasterRenderQueue

    if (props.queues.has(containerId.value)) {
      queue = props.queues.get(containerId.value)!
    }
    else {
      queue = createRenderQueue()
      props.queues.set(containerId.value, queue)
    }

    const content = computed(() => {
      return typeof props.content === 'function'
        ? props.content()
        : props.content
    })

    const shouldQueue = () => {
      if (!container.value) {
        return false
      }

      if (theme.value.maxToasts <= 0 || theme.value.maxToasts === Infinity) {
        return false
      }

      return theme.value.maxToasts <= container.value.childElementCount
    }

    function toggleTimer(pause: boolean) {
      if (!props.pauseOnHover) {
        return
      }
      if (pause) {
        timer.pause()
        return
      }

      timer.resume()
    }
    function stopTimer() {
      timer.stop()
      unqueue.value?.()
    }
    function close() {
      stopTimer()
      isActive.value = false
    }
    function show() {
      if (shouldQueue()) {
        unqueue.value = queue.add({
          until: () => !shouldQueue(),
          callback: show,
        })
        return
      }

      if (!container.value || !rootElement.value) {
        return
      }

      container.value.insertAdjacentElement('afterbegin', rootElement.value)
      isActive.value = true

      if (props.duration > 0) {
        timer.start()
      }

      emit('show', {
        el: rootElement.value,
        close,
      })
    }

    // @todo: check if nested element has focus, then pause the timer
    function onMouseover() {
      isHovered.value = true
      toggleTimer(true)
    }
    function onMouseleave() {
      isHovered.value = false
      toggleTimer(false)
    }
    function onFocus() {
      isHovered.value = true
      toggleTimer(true)
    }
    function onBlur() {
      isHovered.value = false
      toggleTimer(false)
    }
    function onClick(event: Event) {
      emit('click', event)

      if (props.dismissible) {
        close()
      }
    }
    function onKeydown(event: KeyboardEvent) {
      if (event.target !== event.currentTarget) {
        return
      }

      if (event.key !== 'Enter' && event.key !== ' ') {
        return
      }

      event.preventDefault()
      onClick(event)
    }
    function onAfterLeave(el: Element) {
      emit('close')

      if (typeof theme.value?.transition?.onAfterLeave === 'function') {
        theme.value?.transition.onAfterLeave(el)
      }

      // force unmount
      if (typeof rootElement.value?.remove !== 'undefined') {
        rootElement.value?.remove()
      }
      else {
        rootElement.value?.parentNode?.removeChild(rootElement.value)
      }
    }

    onMounted(() => {
      show()

      props.events.on('clear', close)
      props.events.on(`clear-${containerId}`, close)
    })
    onBeforeUnmount(() => {
      props.events.off('clear', close)
      props.events.off(`clear-${containerId}`, close)
    })

    createNinjaToasterState({
      timer,
      duration: props.duration,
      isHovered,
      isActive,
      click: onClick,
      close,
    })

    return () => {
      const wrapper = withDirectives(
        h(
          'div',
          {
            role: 'alert',
            tabindex: 0,
            class:
              theme.value && Array.isArray(theme.value?.wrapperClass)
                ? theme.value.wrapperClass.join(' ')
                : theme.value?.wrapperClass,
            onMouseover,
            onMouseleave,
            onFocus,
            onBlur,
            onKeydown,
            onClick,
          },
          h(Suspense, null, content.value),
        ),
        [[vShow, isActive.value]],
      )

      return h(
        Transition,
        {
          ref: rootElement,
          ...(theme.value?.transition || {}),
          onAfterLeave,
        },
        () => wrapper,
      )
    }
  },
})
