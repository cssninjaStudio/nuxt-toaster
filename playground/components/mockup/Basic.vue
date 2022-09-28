<script setup lang="ts">
import { useNuxtApp } from '#app'

export interface PlainProps {
  positionY?: string
  positionX?: string
  color?: string
  message?: string
  duration?: number
}

const props = withDefaults(defineProps<PlainProps>(), {
  positionY: 'top',
  positionX: 'right',
  color: 'default',
  message: '',
  duration: 5000,
})

const { $nt } = useNuxtApp()
let i = 0

function showBasicToast() {
  i++
  $nt.show({
    content: `${props.message} (${i})`,
    duration: props.duration,
    theme: {
      containerId: 'nt-container',
      containerClass: [`nt-${props.positionY}-${props.positionX}`].join(' '),
      wrapperClass: `nt-${props.color}`,
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

<template>
  <div
    class="flex h-[460px] w-[460px] xs:h-[320px] xs:w-[320px] rounded-full items-end justify-end overflow-hidden border-2 border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-1000"
  >
    <div
      class="h-2/3 w-9/12 rounded-tl-lg border-t-2 border-l-2 border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-900 shadow-xl shadow-muted-400/10"
    >
      <div
        class="flex h-12 w-full items-center gap-2 border-b-2 border-muted-200 dark:border-muted-800 p-4"
      >
        <div class="h-2 w-2 rounded-full bg-muted-200 dark:bg-muted-700"></div>
        <div class="h-2 w-2 rounded-full bg-muted-200 dark:bg-muted-700"></div>
        <div class="h-2 w-2 rounded-full bg-muted-200 dark:bg-muted-700"></div>
      </div>
      <div>
        <div
          class="flex items-center gap-4 bg-muted-50 dark:bg-muted-800 px-6 py-10"
        >
          <div
            class="relative inline-flex h-12 w-12 items-center justify-center rounded-full xs:hidden"
          >
            <img
              src="https://media.cssninja.io/shuriken/avatars/3.svg"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt="Avatar image"
            />
          </div>
          <div>
            <h4 class="font-medium text-muted-800 dark:text-muted-100">
              Clarke D.
            </h4>
            <p class="text-sm xs:text-[0.7rem] text-muted-400">
              Software Engineer
            </p>
          </div>
          <div class="ml-auto">
            <button
              type="button"
              class="inline-flex items-center justify-center h-10 py-2 px-4 text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors duration-300"
              @click="showBasicToast()"
            >
              Invite
            </button>
          </div>
        </div>
        <div class="py-8 pl-6 space-y-3">
          <div class="h-3 w-10/12 rounded bg-muted-100 dark:bg-muted-800"></div>
          <div class="h-3 w-8/12 rounded bg-muted-100 dark:bg-muted-800"></div>
          <div class="h-3 w-9/12 rounded bg-muted-100 dark:bg-muted-800"></div>
        </div>
      </div>
    </div>
  </div>
</template>