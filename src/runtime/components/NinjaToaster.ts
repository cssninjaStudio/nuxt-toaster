import type { PropType, TransitionProps } from 'vue'
import {
  Transition,
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  vShow,
  withDirectives
} from 'vue'

import type { NinjaToastEventBus } from '../events'
import type { NinjaToasterProps } from '../../types'
import { usePausableTimeout } from '../composables/usePausableTimeout'
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
      required: true
    },
    duration: {
      type: Number,
      default: 5000
    },
    theme: {
      type: Object as PropType<NinjaToasterProps['theme']>,
      default: () => ({} as NinjaToasterProps['theme'])
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    maxToasts: {
      type: Number,
      default: Infinity
    },
    queues: {
      type: Map as PropType<Map<string, NinjaToasterRenderQueue>>,
      default: () => new Map()
    },
    events: {
      type: Object as PropType<NinjaToastEventBus>,
      default: () => ({})
    }
  },
  emits: ['close', 'click', 'show'],
  setup(props, { emit }) {
    const { container, containerId } = useNinjaToasterContainer(props.theme)
    const timer = usePausableTimeout(() => {
      close()
    }, props.duration)

    const isHovered = ref(false)
    const isActive = ref(false)
    const unqueue = ref<() => void>()
    const rootElement = ref<HTMLElement>()
    let queue: NinjaToasterRenderQueue

    if (props.queues.has(containerId)) {
      queue = props.queues.get(containerId)!
    } else {
      queue = createRenderQueue()
      props.queues.set(containerId, queue)
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

      if (props.maxToasts <= 0 || props.maxToasts === Infinity) {
        return false
      }

      return props.maxToasts <= container.value.childElementCount
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
          callback: show
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
        close
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

      if (typeof props.theme?.transition?.onAfterLeave === 'function') {
        props.theme?.transition.onAfterLeave(el)
      }

      // force unmount
      if (typeof rootElement.value?.remove !== 'undefined') {
        rootElement.value?.remove()
      } else {
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
      close
    })

    return () => {
      const wrapper = withDirectives(
        h(
          'div',
          {
            role: 'alert',
            tabindex: 0,
            class:
              props.theme && Array.isArray(props.theme?.wrapperClass)
                ? props.theme.wrapperClass.join(' ')
                : props.theme?.wrapperClass,
            onMouseover,
            onMouseleave,
            onFocus,
            onBlur,
            onKeydown,
            onClick
          },
          content.value
        ),
        [[vShow, isActive.value]]
      )

      return h(
        Transition,
        {
          ref: rootElement,
          ...props.theme?.transition || {},
          onAfterLeave
        },
        () => wrapper
      )
    }
  }
})
