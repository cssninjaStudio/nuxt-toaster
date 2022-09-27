<template>
  <div
    class="w-full flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-stone-800 shadow-xl shadow-stone-300/10 dark:shadow-stone-800/10 overflow-hidden"
  >
    <div
      class="inline-flex justify-center items-center relative w-10 h-10 rounded-full"
    >
      <img
        src="https://media.cssninja.io/shuriken/avatars/3.svg"
        class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
        alt="Avatar image"
      />
    </div>
    <div class="mr-6">
      <span class="block font-semibold text-sm text-stone-800">Clark E.</span>
      <span class="block text-xs text-stone-400">Replied to your post</span>
    </div>
    <button
      type="button"
      class="h-11 w-11 flex items-center justify-center ml-auto"
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