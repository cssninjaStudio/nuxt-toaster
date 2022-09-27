<template>
  <section
    class="min-h-screen w-full overflow-hidden bg-muted-100 dark:bg-muted-900 ltablet:bg-red"
  >
    <div
      class="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-4 pt-24"
    >
      <!-- Toasts -->
      <div
        class="hidden md:block absolute top-40 left-20 ptablet:translate-y-96 ltablet:left-1 lg:left-20 z-10"
      >
        <ToastIconSuccess />
      </div>
      <div
        class="hidden md:block absolute top-64 left-6 ptablet:translate-y-96 ltablet:-left-7 lg:left-6 z-10"
      >
        <ToastLabelInfo />
      </div>
      <div
        class="hidden md:block absolute top-[350px] left-24 ptablet:translate-y-96 ltablet:left-5 lg:left-24 z-10"
      >
        <ToastIconSoloDanger />
      </div>

      <div
        class="absolute bottom-64 md:top-40 right-20 ptablet:translate-y-96 ltablet:right-1 lg:right-20 z-10"
      >
        <ToastUserReplyClose />
      </div>
      <div
        class="absolute bottom-44 md:top-64 right-6 ptablet:translate-y-96 ltablet:-right-7 lg:right-6 z-10"
      >
        <ToastLabelSuccess />
      </div>
      <div
        class="absolute bottom-[95px] md:top-[350px] ptablet:translate-y-96 right-24 ltablet:right-5 lg:right-24 z-10"
      >
        <ToastActionButtons />
      </div>

      <!-- Content -->
      <div class="w-full flex items-center justify-center grow">
        <div class="w-full text-center">
          <div class="w-full max-w-md mx-auto mb-4">
            <p class="uppercase font-semibold text-xs text-emerald-500 mb-4">
              <span class="py-2 px-3 border-2 border-emerald-500 rounded-lg"
                >Nuxt 3 Ready</span
              >
            </p>
            <h1
              class="font-extrabold text-5xl text-muted-800 dark:text-white mb-2"
            >
              Nuxt Toaster
            </h1>
            <p
              class="text-lg text-muted-500 pb-3 border-b border-muted-200 dark:border-muted-800"
            >
              <span class="mr-2">🔔</span> A simple toaster (notifier) handler
              for Nuxt.js
            </p>
          </div>
          <!-- Copy input -->
          <div
            class="group relative w-full flex flex-col gap-3 ptablet:max-w-md ltablet:max-w-sm lg:max-w-md mx-auto mt-4"
          >
            <input
              type="text"
              class="w-full h-14 pl-14 pr-4 py-2 rounded-xl font-mono text-muted-600 dark:text-muted-400 bg-white dark:bg-muted-1000 border border-muted-200 dark:border-muted-800 group-hover:shadow-xl group-hover:shadow-muted-400/10 dark:group-hover:shadow-muted-800/10 transition-all duration-300 tw-accessibility"
              value="npm i -D @cssninja/nuxt-toaster"
            />
            <!-- Terminal icon -->
            <div
              class="absolute top-0 left-0 w-14 h-14 flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-muted-400" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="m117.3 134l-72 64a8.1 8.1 0 0 1-5.3 2a8 8 0 0 1-5.3-14l65.3-58l-65.3-58a8 8 0 1 1 10.6-12l72 64a8 8 0 0 1 0 12Zm98.7 50h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Z"
                />
              </svg>
            </div>
            <!-- Copy button -->
            <button
              type="button"
              class="w-full lg:w-auto lg:absolute top-2 right-2 h-12 lg:h-10 py-2 px-5 rounded-lg text-sm text-white bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-800/10 transition-all duration-300 tw-accessibility"
            >
              Try Me
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <img
          class="w-full max-w-5xl mx-auto mt-auto"
          src="/assets/img/mountains.svg"
          alt="Illustration"
        />
      </div>
    </div>
  </section>
</template>
