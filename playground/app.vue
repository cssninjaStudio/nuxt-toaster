<script setup>
import { h } from 'vue'
import CustomToast from './components/CustomToast.vue'
import AdvancedToast from './components/AdvancedToast.vue'
import { useNuxtApp } from '#app'

const { $nt } = useNuxtApp()
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
        message: `Hello ${i} from Nuxt module playground!`
      }),
    transition: {
      name: 'fadeOut'
    },
    maxToasts: 5,
    theme: {
      containerId: 'nt-container-bottom-right',
      containerClass: [
        'absolute',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'flex-col-reverse',
        'items-start',
        'gap-2'
      ].join(' '),
      wrapperClass: 'pointer-events-auto cursor-pointer'
    }
  })
}

async function showAdvancedToast() {
  i++
  const toast = await $nt.show({
    content: () =>
      h(AdvancedToast, {
        message: `Hello ${i} from Nuxt module playground!`
      }),
    dismissible: false,
    maxToasts: 1,
    theme: {
      containerId: 'nt-container-top-left',
      containerClass: [
        'absolute',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'flex-col',
        'items-end',
        'gap-2'
      ].join(' '),
      wrapperClass: [
        'pointer-events-auto',
        'rounded',
        'outline-slate-300',
        'outline-offset-2',
        'focus:outline',
        'focus:outline-2',
        'focus-within:outline',
        'focus-within:outline-2'
      ].join(' ')
    },
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-300 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform translate-x-full opacity-0'
    }
  })

  toast.el.focus()
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
// Animations are taken from animate.css
// https://daneden.github.io/animate.css
.fadeOut {
  animation-name: fadeOut;
}
.fadeInDown {
  animation-name: fadeInDown;
}
.fadeInUp {
  animation-name: fadeInUp;
}
.fade-enter-active {
  transition: opacity 300ms ease-in;
}
.fade-leave-active {
  transition: opacity 150ms ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@-moz-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-o-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-moz-keyframes fadeInDown {
  from {
    opacity: 0.5;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0.5;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@-o-keyframes fadeInDown {
  from {
    opacity: 0.5;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0.5;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@-moz-keyframes fadeInUp {
  from {
    opacity: 0.5;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0.5;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@-o-keyframes fadeInUp {
  from {
    opacity: 0.5;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0.5;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
