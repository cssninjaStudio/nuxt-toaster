<template>
  <Section>
    <hr class="mb-10 pt-10 border-t border-muted-200 dark:border-muted-800" />
    <div class="w-full max-w-md mx-auto text-center mb-10">
      <p class="uppercase font-semibold text-xs text-primary-500 mb-2">
        <span
          class="inline-block py-2 px-3 border-2 border-primary-500 rounded-lg scale-90"
          >Philosophy</span
        >
      </p>
      <h2 class="font-extrabold text-5xl text-muted-800 dark:text-white">
        Headless Toasts
      </h2>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-6">
      <div>
        <p class="text-muted-500 pb-3">
          With the rising of abstracted UI libraries like
          <a href="#" class="font-medium text-primary-500">Tailwind CSS</a>, a
          lot of developers realised they don't want to be forced in some UI
          choices anymore. Nuxt Toaster does exactly that, it ships unstyled and
          without a UI.
        </p>
      </div>
      <div>
        <p class="text-muted-500 pb-3">
          This behavior allows any developer to create his own set of toasts
          without having to look the same from a project to another. Nuxt
          Toaster provides
          <a href="#" class="font-medium text-primary-500">Theming options</a>
          as well as Tailwind and plain CSS based
          <a href="#" class="font-medium text-primary-500">examples</a>.
        </p>
      </div>
    </div>

    <div class="relative w-full max-w-3xl mx-auto">
      <div
        class="group cursor-pointer relative w-full h-[380px] xs:h-[300px] flex items-center justify-center mx-auto"
      >
        <div
          class="absolute top-1/2 inset-x-0 -translate-y-1/2 w-[380px] h-[380px] xs:w-[300px] xs:h-[300px] mx-auto grid grid-cols-12 scale-90"
        >
          <div
            v-for="index in 144"
            :key="index"
            class="border border-muted-200 dark:border-muted-800"
            :class="[
              //index <= 12 && 'border-t-0',
              //index >= 133 && 'border-b-0',
              //index === 0 && '!border-l-0',
            ]"
          ></div>
        </div>

        <!-- Toast -->
        <div
          class="relative w-full max-w-md flex items-center shadow-2xl shadow-muted-400/10 dark:shadow-muted-800/10 z-10 xs:scale-90"
        >
          <!-- Toast icon -->
          <div
            class="relative h-24 xs:h-20 w-24 flex items-center justify-center rounded-l-xl text-emerald-500 bg-emerald-100 dark:text-white dark:bg-emerald-500 group-hover:-translate-x-4 transition-transform duration-300"
          >
            <svg class="w-8 h-8" viewBox="0 0 256 172">
              <path
                fill="#80EEC0"
                d="M112.973 9.25c-7.172-12.333-25.104-12.333-32.277 0L2.524 143.66c-7.172 12.333 1.794 27.749 16.14 27.749h61.024c-6.13-5.357-8.4-14.625-3.76-22.576L135.13 47.348L112.973 9.25Z"
              />
              <path
                fill="#00DC82"
                d="M162.505 38.733c5.936-10.09 20.776-10.09 26.712 0l64.694 109.971c5.936 10.091-1.484 22.705-13.357 22.705H111.167c-11.872 0-19.292-12.614-13.356-22.705l64.694-109.971Z"
              />
            </svg>
            <!-- Legend -->
            <div class="absolute -top-24 inset-x-0 mx-auto text-center">
              <span
                class="text-muted-500 dark:text-muted-400 opacity-0 group-hover:opacity-100 after:content-[''] after:absolute after:top-8 after:inset-x-0 after:mx-auto after:h-0 group-hover:after:h-12 after:w-px after:pr-1 after:border-l-2 after:border-muted-300 dark:after:border-muted-700 transition-all duration-300"
                >Toast icon</span
              >
            </div>
          </div>
          <!-- Toast content -->
          <div
            class="relative h-24 xs:h-20 flex items-center px-6 bg-white dark:bg-muted-800"
          >
            <span class="text-lg xs:text-sm text-muted-600 dark:text-muted-400"
              >Nuxt has been installed!</span
            >
            <!-- Legend -->
            <div class="absolute -top-24 inset-x-0 mx-auto text-center">
              <span
                class="text-muted-500 dark:text-muted-400 opacity-0 group-hover:opacity-100 after:content-[''] after:absolute after:top-8 after:inset-x-0 after:mx-auto after:h-0 group-hover:after:h-12 after:w-px after:pr-1 after:border-l-2 after:border-muted-300 dark:after:border-muted-700 transition-all duration-300"
                >Toast content</span
              >
            </div>
          </div>
          <!-- Toast close -->
          <div
            class="relative h-24 xs:h-20 flex items-center justify-center rounded-r-xl bg-slate-200 dark:bg-muted-700 group-hover:translate-x-4 transition-transform duration-300"
          >
            <button
              type="button"
              class="h-12 w-12 flex items-center justify-center rounded-full mx-4 text-muted-700 dark:text-muted-400 hover:bg-slate-100 dark:hover:bg-muted-800 transition-colors duration-300 tw-accessibility"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
              <!-- Legend -->
              <span
                class="block absolute -top-24 inset-x-0 mx-auto text-center"
              >
                <span
                  class="text-muted-500 dark:text-muted-400 opacity-0 group-hover:opacity-100 after:content-[''] after:absolute after:top-8 after:inset-x-0 after:mx-auto after:h-0 group-hover:after:h-12 after:w-px after:pr-1 after:border-l-2 after:border-muted-300 dark:after:border-muted-700 transition-all duration-300"
                  >Close</span
                >
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>