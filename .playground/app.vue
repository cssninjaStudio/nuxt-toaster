<script setup>
import { h } from 'vue'
import CustomToast from './components/CustomToast.vue'
import AdvancedToast from './components/AdvancedToast.vue'

const $nt = useNinjaToaster()
let i = 0

function showBasicToast() {
  i++
  $nt.show(`Hello, ${i} world!`)
}

function showCustomToast() {
  i++
  $nt.show({
    content: () =>
      h(CustomToast, {
        message: `Hello ${i} from Nuxt module playground!`,
      }),
    theme: {
      transition: {
        name: 'toaster',
      },
      maxToasts: 5,
      containerId: 'nt-container-bottom-right',
      containerClass: [
        'absolute',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'flex-col-reverse',
        'items-start',
        'gap-2',
      ],
      wrapperClass: 'pointer-events-auto cursor-pointer',
    },
  })
}

async function showAdvancedToast() {
  i++
  const toast = await $nt.show({
    content: () =>
      h(AdvancedToast, {
        message: `Hello ${i} from Nuxt module playground!`,
      }),
    dismissible: false,
    theme: {
      containerId: 'nt-container-top-left',
      maxToasts: 1,
      containerClass: [
        'absolute',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'flex-col',
        'items-end',
        'gap-2',
      ],
      wrapperClass: [
        'pointer-events-auto',
        'rounded',
        'outline-slate-300',
        'outline-offset-2',
        'focus:outline',
        'focus:outline-2',
        'focus-within:outline',
        'focus-within:outline-2',
      ],
      transition: {
        enterActiveClass: 'transition duration-300 ease-out',
        enterFromClass: 'transform translate-x-full opacity-0',
        enterToClass: 'transform translate-x-0 opacity-100',
        leaveActiveClass: 'transition duration-300 ease-in',
        leaveFromClass: 'transform translate-x-0 opacity-100',
        leaveToClass: 'transform translate-x-full opacity-0',
      },
    },
  })

  toast.el.focus()
}

function showGlobalToast() {
  $nt.showComponent('GlobalToast', {
    props: {
      type: 'basic',
      message: 'Hello from GlobalToast module playground!',
    },
    options: {
      theme: {
        transition: {
          name: 'toaster',
        },
        maxToasts: 5,
        containerId: 'nt-container-bottom-right',
        containerClass: [
          'absolute',
          'inset-0',
          'pointer-events-none',
          'p-4',
          'flex',
          'flex-col-reverse',
          'items-start',
          'gap-2',
        ],
        wrapperClass: 'pointer-events-auto cursor-pointer',
      },
    },
  })
}
function clearAllToast() {
  $nt.clearAll()
}
function clearTopLeftToast() {
  $nt.clear('nt-container-top-left')
}
</script>

<template>
  <div>
    <p>Nuxt module playground!</p>
    <button
      class="m-1 rounded border border-slate-200 px-2 py-1"
      @click="showBasicToast"
    >
      show basic toast
    </button>
    <button
      class="m-1 rounded border border-slate-200 px-2 py-1"
      @click="showCustomToast"
    >
      show custom toast
    </button>
    <button
      class="m-1 rounded border border-slate-200 px-2 py-1"
      @click="showAdvancedToast"
    >
      show advanced toast
    </button>
    <button
      class="m-1 rounded border border-slate-200 px-2 py-1"
      @click="showGlobalToast"
    >
      show global toast
    </button>
    <button
      class="m-1 rounded border border-slate-200 px-2 py-1"
      @click="clearTopLeftToast"
    >
      clear advanced toasts
    </button>
    <button
      class="m-1 rounded border border-slate-200 px-2 py-1"
      @click="clearAllToast"
    >
      clear all toast
    </button>
  </div>
</template>

<style>
.toaster-enter-active,
.toaster-leave-active {
  transform: translateY(0);
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
}

.toaster-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.toaster-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .toaster-enter-active,
  .toaster-leave-active {
    transition: none;
  }
}
</style>
