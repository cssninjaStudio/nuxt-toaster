export const plainExample = `
<script setup>
@import '@/assets/modules/nt.css'
</script>

<script setup>
  import { useNuxtApp } from '#app'

  const { $nt } = useNuxtApp()
  let i = 0

  function showBasicToast() {
    i++
    $nt.show({
      content: 'Clarke was successfully invited!',
      duration: 2500,
      theme: {
        containerId: 'nt-container',
        containerClass: ['nt-top-right'].join(' '),
        wrapperClass: 'nt-warning',
      },
      transition: {
        enterActiveClass: 'nt-enter-active',
        enterFromClass: 'nt-enter-from',
        enterToClass: 'nt-enter-to',
        leaveActiveClass: 'nt-leave-active',
        leaveFromClass: 'nt-leave-from',
        leaveToClass: 'nt-leave-to',
      },
    })
  }
</script>
`

export const customExample = `
<script setup>
  import { h } from 'vue'
  import { useNuxtApp } from '#app'

  const { $nt } = useNuxtApp()
  let i = 0

  function showCustomToast() {
    i++
    $nt.show({
      content: () =>
        h(ToastCustom, {
          title: 'Hi there',
          message: 'You just poked Anna!',
        }),
      duration: props.duration,
      maxToasts: 5,
      theme: {
        containerId: 'nt-container-custom',
        containerClass: [
          'fixed',
          'top-0',
          'inset-0',
          'h-full',
          'w-full',
          'pointer-events-none',
          'p-4',
          'flex',
          'z-[100]',
          'flex-col-reverse',
          'items-end',
          'gap-2',
        ].join(' '),
        wrapperClass: 'w-full md:auto pointer-events-auto cursor-pointer',
      },
      transition: {
        enterActiveClass: 'transition-all duration-300 ease-out',
        enterFromClass: 'transform translate-y-1 opacity-0',
        enterToClass: 'transform translate-y-0 opacity-100',
        leaveActiveClass: 'transition duration-300 ease-in',
        leaveFromClass: 'transform translate-y-0 opacity-100',
        leaveToClass: 'transform translate-y-1 opacity-0',
      },
    })
  }
</script>
`
