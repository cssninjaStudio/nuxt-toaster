<template>
  <section
    class="min-h-screen w-full overflow-hidden bg-stone-100 dark:bg-stone-900"
  >
    <div
      class="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-4 pt-24"
    >
      <div class="w-full flex items-center justify-center grow">
        <div class="w-full text-center">
          <div class="mb-4">
            <p class="uppercase font-semibold text-xs text-emerald-500 mb-4">
              <span class="py-2 px-3 border-2 border-emerald-500 rounded-lg"
                >Nuxt 3 Ready</span
              >
            </p>
            <h1 class="font-extrabold text-5xl text-stone-800 mb-2">
              Nuxt Toaster
            </h1>
            <p class="text-lg text-stone-500">Headless Nuxt 3 toaster module</p>
          </div>
          <!-- Copy input -->
          <div class="relative w-full max-w-md mx-auto">
            <input
              type="text"
              class="w-full h-12 pl-12 pr-4 py-2 rounded-lg font-mono text-stone-600 bg-white border border-stone-200"
              value="npm i -D @cssninja/nuxt-toaster"
            />
            <!-- Terminal icon -->
            <div
              class="absolute top-0 left-0 w-12 h-12 flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-stone-400" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="m117.3 134l-72 64a8.1 8.1 0 0 1-5.3 2a8 8 0 0 1-5.3-14l65.3-58l-65.3-58a8 8 0 1 1 10.6-12l72 64a8 8 0 0 1 0 12Zm98.7 50h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Z"
                />
              </svg>
            </div>
            <!-- Copy button -->
            <button
              type="button"
              class="absolute top-1 right-1 h-10 py-2 px-5 rounded-lg text-sm text-white bg-indigo-500"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <img
          class="mt-auto"
          src="/assets/img/mountains.svg"
          alt="Illustration"
        />
      </div>
    </div>
  </section>
</template>
