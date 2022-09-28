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
