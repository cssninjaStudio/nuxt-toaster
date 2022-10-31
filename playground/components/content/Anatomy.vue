<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
const scrollTo = VueScrollTo.scrollTo

const activeTab = ref('unstyled')
</script>

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
          <a
            class="font-medium text-primary-500 cursor-pointer"
            @click.prevent="scrollTo(`#demo-examples`, 800, { offset: 5 })"
            >examples</a
          >.
        </p>
      </div>
    </div>

    <div class="w-full max-w-xl mx-auto flex flex-col gap-2">
      <!-- Tabs -->
      <div class="flex items-center justify-center overflow-hidden mb-4">
        <div
          class="flex justify-center gap-x-6 grow font-sans border-b border-muted-200 dark:border-muted-800 xs:overflow-x-auto"
        >
          <button
            type="button"
            class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
            :class="
              activeTab === 'unstyled'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
            @click="activeTab = 'unstyled'"
          >
            Unstyled
          </button>
          <button
            type="button"
            class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
            :class="
              activeTab === 'styled'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
            @click="activeTab = 'styled'"
          >
            CSS Styled
          </button>
          <button
            type="button"
            class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
            :class="
              activeTab === 'custom'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
            @click="activeTab = 'custom'"
          >
            Custom UI
          </button>
        </div>
      </div>
      <div class="text-center mb-4">
        <p
          v-if="activeTab === 'unstyled'"
          class="text-sm text-muted-500 dark:text-muted-400"
        >
          Nuxt Toaster is a toast engine, meaning that it primarily delivers
          <strong>unstyled</strong> toast elements. Styling is done separately
          via CSS and / or theming options.
        </p>
        <p
          v-else-if="activeTab === 'styled'"
          class="text-sm text-muted-500 dark:text-muted-400"
        >
          If you need basic styling, Nuxt Toaster provides prebuilt
          <strong>CSS presets</strong> that you can import into your project to
          enable a basic set of styles.
        </p>
        <p
          v-else-if="activeTab === 'custom'"
          class="text-sm text-muted-500 dark:text-muted-400"
        >
          As a rendering engine Nuxt Toaster can render external components that
          can also receive data and properties from the toast container itself.
        </p>
      </div>
    </div>

    <div class="relative w-full max-w-3xl mx-auto">
      <div
        class="group cursor-pointer relative w-full h-[380px] xs:h-[300px] flex items-center justify-center mx-auto"
      >
        <div
          class="absolute top-1/2 inset-x-0 -translate-y-1/2 w-[380px] h-[380px] xs:w-[300px] xs:h-[300px] mx-auto grid grid-cols-12 scale-90 z-10"
        >
          <div
            v-for="index in 144"
            :key="index"
            class="border border-muted-200 dark:border-muted-800"
          ></div>
        </div>

        <div
          class="absolute top-1/2 inset-x-0 -translate-y-1/2 w-[380px] h-[380px] xs:w-[300px] xs:h-[300px] mx-auto border-2 border-muted-100 dark:border-muted-900 scale-90 z-20"
        ></div>

        <!-- Toast Unstyled -->
        <div
          v-if="activeTab === 'unstyled'"
          class="relative w-full max-w-sm flex items-center rounded-xl border-2 border-dashed border-muted-300 dark:border-muted-500 z-30 xs:scale-90"
        >
          <!-- Toast content -->
          <div
            class="relative w-full h-24 xs:h-20 flex items-center justify-center px-8"
          >
            <span class="text-lg xs:text-sm text-muted-600 dark:text-muted-400"
              >Nuxt has been installed!</span
            >
            <!-- Legend -->
            <div class="absolute -top-24 inset-x-0 mx-auto text-center">
              <span
                class="text-muted-500 dark:text-muted-400 opacity-0 group-hover:opacity-100 after:content-[''] after:absolute after:top-8 after:inset-x-0 after:mx-auto after:h-0 group-hover:after:h-12 after:w-px after:pr-1 after:border-l-2 after:border-muted-300 dark:after:border-muted-700 transition-all duration-300"
                >Unstyled content</span
              >
            </div>
          </div>
        </div>

        <!-- Toast Styled -->
        <div
          v-else-if="activeTab === 'styled'"
          class="relative w-full max-w-sm flex items-center shadow-2xl shadow-muted-400/10 dark:shadow-muted-800/10 z-30 xs:scale-90"
        >
          <!-- Toast content -->
          <div
            class="relative w-full h-24 xs:h-20 flex items-center px-8 rounded-xl bg-white dark:bg-muted-800"
          >
            <span class="text-lg xs:text-sm text-muted-600 dark:text-muted-400"
              >Nuxt has been installed!</span
            >
            <!-- Legend -->
            <div class="absolute -top-24 inset-x-0 mx-auto text-center">
              <span
                class="text-muted-500 dark:text-muted-400 opacity-0 group-hover:opacity-100 after:content-[''] after:absolute after:top-8 after:inset-x-0 after:mx-auto after:h-0 group-hover:after:h-12 after:w-px after:pr-1 after:border-l-2 after:border-muted-300 dark:after:border-muted-700 transition-all duration-300"
                >Styled content</span
              >
            </div>
          </div>
        </div>

        <!-- Toast Custom -->
        <div
          v-else-if="activeTab === 'custom'"
          class="relative w-full max-w-md flex items-center shadow-2xl shadow-muted-400/10 dark:shadow-muted-800/10 z-30 xs:scale-90"
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

    <div class="relative w-full max-w-lg mx-auto mt-10">
      <div
        class="w-full flex flex-col md:flex-row gap-6 p-6 rounded-xl border-2 border-primary-500 bg-primary-100 dark:bg-primary-500/10"
      >
        <svg
          class="w-8 h-8 min-w-[2rem] text-primary-500"
          viewBox="0 0 256 256"
        >
          <path fill="currentColor" d="M216 160h-56v56l56-56z" opacity=".2" />
          <path
            fill="currentColor"
            d="M96 104h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16Zm0 32h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16Zm32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Z"
          />
          <path
            fill="currentColor"
            d="M224 156.7V48a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.7a15.9 15.9 0 0 0 11.3-4.7l51.3-51.3a16.3 16.3 0 0 0 3.3-4.9h.1a17.4 17.4 0 0 0 1.3-6.4ZM48 48h160v104h-48a8 8 0 0 0-8 8v48H48Zm148.7 120L168 196.7V168Z"
          />
        </svg>
        <div>
          <h4
            class="font-medium text-lg text-primary-700 dark:text-primary-500 mb-1"
          >
            Important note
          </h4>
          <p class="text-sm text-primary-600 dark:text-primary-300">
            Please keep in mind that Nuxt Toaster is a
            <strong>toast rendering engine</strong> and not a classic toasting
            library that ships with prebuilt styles. Styles presets and custom
            examples are provided for inspiration, so you can build your own.
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>