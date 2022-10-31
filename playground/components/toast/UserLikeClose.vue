<template>
  <div
    class="w-full flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/10 dark:shadow-muted-800/10 overflow-hidden"
  >
    <div
      class="inline-flex justify-center items-center relative w-10 h-10 rounded-full"
    >
      <img
        src="https://media.cssninja.io/shuriken/avatars/15.svg"
        class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
        alt="Avatar image"
      />
    </div>
    <div class="mr-6">
      <span
        class="block font-semibold text-sm text-muted-800 dark:text-muted-100"
        >Aaron S.</span
      >
      <span class="block text-xs text-muted-400">Liked your reply</span>
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