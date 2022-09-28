<script setup lang="ts">
const props = defineProps<{
  title?: string
  message?: string
}>()
</script>

<template>
  <div
    class="w-full flex items-center gap-1 p-3 md:rounded-xl md:max-w-xs border-2 border-teal-500 bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/10 dark:shadow-muted-800/10 overflow-hidden"
  >
    <div
      class="h-11 w-11 flex items-center justify-center rounded-full text-teal-500"
    >
      <svg class="w-7 h-7" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="M184 217.3A80 80 0 0 1 74.7 188l-42-72.8a20 20 0 0 1 34.7-20l-16-27.7a20 20 0 0 1 34.6-20l8 13.9a20 20 0 0 1 34.6-20l30 51.9a20 20 0 0 1 34.7-20l20 34.7A80 80 0 0 1 184 217.3Z"
          opacity=".2"
        />
        <path
          fill="currentColor"
          d="m220.2 104l-20-34.7a28.1 28.1 0 0 0-47.3-1.9l-17.3-30a28.1 28.1 0 0 0-38.3-10.3a29.4 29.4 0 0 0-9.9 9.6a27.9 27.9 0 0 0-11.5-6.2a27.1 27.1 0 0 0-21.2 2.8a27.9 27.9 0 0 0-10.3 38.2l3.4 5.8A28.5 28.5 0 0 0 36 81a28.1 28.1 0 0 0-10.2 38.2l42 72.8a88 88 0 1 0 152.4-88Zm-6.7 62.6a71.2 71.2 0 0 1-33.5 43.7A72.1 72.1 0 0 1 81.6 184l-42-72.8a12 12 0 0 1 20.8-12l22 38.1l.6.9v.2l.5.5l.2.2l.7.6h.1l.7.5h.3l.6.3h.2l.9.3h.1l.8.2h2.2l.9-.2h.3l.6-.2h.3l.9-.4a8.1 8.1 0 0 0 2.9-11l-22-38.1l-16-27.7a12 12 0 0 1-1.2-9.1a11.8 11.8 0 0 1 5.6-7.3a12 12 0 0 1 9.1-1.2a12.5 12.5 0 0 1 7.3 5.6l8 14h.1l26 45a6 6 0 0 0 .9 1.3a8 8 0 0 0 12.9-9.3l-26-45a12 12 0 1 1 20.8-12l30 51.9l6.3 11a48.1 48.1 0 0 0-10.9 61a8 8 0 0 0 13.8-8a32 32 0 0 1 11.7-43.7l.7-.4l.5-.4h.1l.6-.6l.5-.5l.4-.5l.3-.6h.1l.2-.5v-.2a1.9 1.9 0 0 0 .2-.7h.1c0-.2.1-.4.1-.6s0-.2.1-.2v-2.1a6.4 6.4 0 0 0-.2-.7a1.9 1.9 0 0 0-.2-.7v-.2c0-.2-.1-.3-.2-.5l-.3-.7l-10-17.4a12 12 0 0 1 13.5-17.5a11.8 11.8 0 0 1 7.2 5.5l20 34.7a70.9 70.9 0 0 1 7.2 53.8Zm-125.8 78a8.2 8.2 0 0 1-6.6 3.4a8.6 8.6 0 0 1-4.6-1.4A117.9 117.9 0 0 1 41.1 208a8 8 0 1 1 13.8-8a102.6 102.6 0 0 0 30.8 33.4a8.1 8.1 0 0 1 2 11.2ZM168 31a8 8 0 0 1 8-8a60.2 60.2 0 0 1 52 30a7.9 7.9 0 0 1-3 10.9a7.1 7.1 0 0 1-4 1.1a8 8 0 0 1-6.9-4A44 44 0 0 0 176 39a8 8 0 0 1-8-8Z"
        />
      </svg>
    </div>
    <div class="mr-6">
      <span
        class="block font-semibold text-sm text-muted-800 dark:text-muted-100"
        >{{ props.title }}</span
      >
      <span class="block text-xs text-muted-400">{{ props.message }}</span>
    </div>
    <button
      type="button"
      class="h-9 w-9 flex items-center justify-center rounded-full ml-auto text-muted-700 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors duration-300 tw-accessibility"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 6L6 18M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>