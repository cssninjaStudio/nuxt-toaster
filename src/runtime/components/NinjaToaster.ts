import type { PropType } from 'vue'
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

import type { NinjaToasterProps } from '../../props'
import { usePausableTimeout } from '../composables/usePausableTimeout'
import { useNinjaToasterContainer } from '../composables/useNinjaToasterContainer'
import { createNinjaToasterState } from '../composables/useNinjaToasterState'
import { type NinjaToastRenderQueue, createRenderQueue } from '../queue'
import { useNuxtApp } from '#app'

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
      type: Number as PropType<NinjaToasterProps['duration']>,
      default: 5000
    },
    transition: {
      type: Object as PropType<NinjaToasterProps['transition']>,
      default: () => ({} as NinjaToasterProps['transition'])
    },
    theme: {
      type: Object as PropType<NinjaToasterProps['theme']>,
      default: () => ({} as NinjaToasterProps['theme'])
    },
    dismissible: {
      type: Boolean as PropType<NinjaToasterProps['dismissible']>,
      default: true
    },
    pauseOnHover: {
      type: Boolean as PropType<NinjaToasterProps['pauseOnHover']>,
      default: true
    },
    maxToasts: {
      type: Number as PropType<NinjaToasterProps['maxToasts']>,
      default: Infinity
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
    const nuxt = useNuxtApp()
    const events = nuxt.$nt.events
    let queue: NinjaToastRenderQueue

    if (nuxt.$nt.queues.has(containerId)) {
      queue = nuxt.$nt.queues.get(containerId)
    } else {
      queue = createRenderQueue()
      nuxt.$nt.queues.set(containerId, queue)
    }

    const content = computed(() => {
      return typeof props.content === 'function'
        ? props.content()
        : props.content
    })

    const shouldQueue = () => {
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
      events.off('clear', close)

      if (typeof props.transition?.onAfterLeave === 'function') {
        props.transition.onAfterLeave(el)
      }

      // force unmount
      if (typeof rootElement.value?.remove !== 'undefined') {
        rootElement.value?.remove()
      } else {
        rootElement.value?.parentNode.removeChild(rootElement.value)
      }
    }

    onMounted(() => {
      show()
      events.on('clear', close)
    })
    onBeforeUnmount(() => {
      events.off('clear', close)
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
            class: props.theme.wrapperClass,
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
          ...props.transition,
          onAfterLeave
        },
        () => wrapper
      )
    }
  }
})
