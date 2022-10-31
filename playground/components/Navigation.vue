<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
const { toggleDark } = useDarkmode()
const { y } = useWindowScrollFixed()

const mobileOpen = ref(false)

const isScrolled = computed(() => {
  return y.value > 60
})

const isChecked = ref(false)
const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled && 'bg-white dark:bg-muted-1000',
      mobileOpen ? 'bg-white dark:bg-muted-1000' : '',
    ]"
  >
    <div class="mx-auto w-full max-w-7xl p-4">
      <div class="w-full flex items-center justify-between gap-x-2">
        <div class="w-full lg:w-auto flex items-center gap-x-2">
          <NuxtLink to="/" class="flex items-center gap-2 tw-accessibility">
            <img class="w-9 h-9" src="/assets/img/logo.svg" alt="Logo" />
            <img
              class="h-5 dark:invert"
              src="/assets/img/logo-text.svg"
              alt="Logo text"
            />
          </NuxtLink>

          <!-- Hamburger -->
          <button
            class="flex relative justify-center items-center ml-auto w-10 h-10 lg:hidden tw-accessibility"
            @click="mobileOpen = !mobileOpen"
          >
            <div
              class="block top-1/2 left-6 w-4 -translate-x-1/2 -translate-y-1/2"
            >
              <span
                class="block absolute w-7 h-0.5 text-indigo-500 bg-current transition duration-500 ease-in-out"
                :class="mobileOpen ? 'rotate-45' : '-translate-y-2'"
              />
              <span
                class="block absolute w-5 h-0.5 text-indigo-500 bg-current transition duration-500 ease-in-out"
                :class="mobileOpen ? 'opacity-0' : ''"
              />
              <span
                class="block absolute w-7 h-0.5 text-indigo-500 bg-current transition duration-500 ease-in-out"
                :class="mobileOpen ? '-rotate-45' : 'translate-y-2'"
              />
            </div>
          </button>
        </div>
        <div
          class="lg:flex flex-col lg:flex-row items-center justify-end p-6 lg:p-0 space-y-3 lg:space-y-0 lg:divide-x divide-muted-300 dark:divide-muted-700 bg-white dark:bg-muted-900 lg:bg-transparent dark:lg:bg-transparent"
          :class="mobileOpen ? 'fixed top-[72px] left-0 w-full flex' : 'hidden'"
        >
          <div
            class="flex flex-col lg:flex-row items-center justify-end gap-x-5 lg:pr-4 space-y-3 lg:space-y-0"
          >
            <a
              class="text-muted-700 hover:text-muted-500 dark:text-muted-400 dark:hover:text-muted-200 transition-colors duration-300 cursor-pointer tw-accessibility"
              @click.prevent="scrollTo(`#demo-examples`, 800, { offset: 5 })"
              >Examples</a
            >
            <NuxtLink
              to="/api"
              class="text-muted-700 hover:text-muted-500 dark:text-muted-400 dark:hover:text-muted-200 transition-colors duration-300 tw-accessibility"
              >API docs</NuxtLink
            >
          </div>
          <div class="flex items-center justify-end gap-x-1 lg:pl-4">
            <NuxtLink
              to="/"
              class="w-10 h-10 flex items-center justify-center rounded-full text-muted-700 hover:text-muted-500 dark:text-muted-400 dark:hover:text-muted-200 transition-colors duration-300 tw-accessibility"
            >
              <svg class="w-5 h-5" viewBox="0 0 1536 1504">
                <path
                  fill="currentColor"
                  d="M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/"
              class="w-10 h-10 flex items-center justify-center rounded-full text-muted-700 hover:text-muted-500 dark:text-muted-400 dark:hover:text-muted-200 transition-colors duration-300 tw-accessibility"
            >
              <svg class="w-5 h-5" viewBox="0 0 1600 1280">
                <path
                  fill="currentColor"
                  d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50z"
                />
              </svg>
            </NuxtLink>
            <!-- Theme -->
            <label
              class="block w-9 h-9 rounded-full overflow-hidden relative mx-auto focus-within:tw-accessibility-static"
            >
              <input
                v-model="isChecked"
                type="checkbox"
                class="absolute top-0 left-0 z-[2] w-full h-full opacity-0 cursor-pointer"
                @change="() => toggleDark()"
              />
              <span
                class="block relative w-9 h-9 bg-white dark:bg-muted-800 rounded-full border border-muted-300 dark:border-muted-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
                  :class="[
                    !isChecked
                      ? 'opacity-100 -translate-x-[45%] -translate-y-1/2'
                      : 'opacity-0  -translate-x-[45%] -translate-y-[150%]',
                  ]"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" class="fill-current" />
                    <path class="fill-current" d="M12 1v2" />
                    <path class="fill-current" d="M12 21v2" />
                    <path class="fill-current" d="M4.22 4.22l1.42 1.42" />
                    <path class="fill-current" d="M18.36 18.36l1.42 1.42" />
                    <path class="fill-current" d="M1 12h2" />
                    <path class="fill-current" d="M21 12h2" />
                    <path class="fill-current" d="M4.22 19.78l1.42-1.42" />
                    <path class="fill-current" d="M18.36 5.64l1.42-1.42" />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
                  :class="[
                    !isChecked
                      ? 'opacity-0 -translate-x-[45%] -translate-y-[150%]'
                      : 'opacity-100 -translate-x-[45%] -translate-y-1/2',
                  ]"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      class="fill-current"
                      d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
                    />
                  </g>
                </svg>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
