<script setup>
import { plainExample } from '@/assets/examples'

const activeTab = ref('tab-1')

const positionY = ref('bottom')
const positionX = ref('right')
const color = ref('default')
const message = ref('You invited Clarke!')
const duration = 3000
</script>
  
  <template>
  <Section>
    <div>
      <hr class="mb-10 border-t border-muted-200 dark:border-muted-800" />
      <div
        class="w-full max-w-xl mb-10 ptablet:text-center ptablet:mx-auto lg:pl-20"
      >
        <!-- Icon -->
        <div
          class="w-20 h-20 flex items-center justify-center rounded-full mb-4 ptablet:mx-auto bg-white dark:bg-muted-800 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500 text-indigo-500 dark:text-white"
          >
            <svg class="w-6 h-6" viewBox="0 0 15 15">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M.132.162A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .498.542l-1 11.916a.5.5 0 0 1-.34.432l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1-.34-.432L.002.542a.5.5 0 0 1 .13-.38ZM11 3H4v1h6v2H6v1h4v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86V3Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <!-- Title -->
        <h2 class="font-extrabold text-5xl text-muted-800 dark:text-white mb-2">
          Plain CSS example
        </h2>
        <p class="text-lg text-muted-500 dark:text-muted-400 pb-3">
          Nuxt Toaster provides a basic CSS stylesheet that you can import in
          your project if you need prebuilt styles. Hit the invite button below
          to start popping toasts.
        </p>
      </div>
      <div class="grid ltablet:grid-cols-12 lg:grid-cols-12 gap-8">
        <div class="ltablet:col-span-6 lg:col-span-6">
          <div class="flex flex-col justify-center items-center h-full w-full">
            <MockupBasic
              :position-y="positionY"
              :position-x="positionX"
              :color="color"
              :message="message"
              :duration="duration"
            />
          </div>
        </div>
        <div class="ltablet:col-span-6 lg:col-span-6">
          <div
            class="flex flex-col justify-center ptablet:items-center h-full w-full"
          >
            <div>
              <!-- Tabs -->
              <div
                class="flex items-center justify-between overflow-hidden mb-6"
              >
                <div
                  class="flex gap-x-6 grow font-sans border-b border-muted-200 dark:border-muted-800 xs:overflow-x-auto"
                >
                  <button
                    type="button"
                    class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
                    :class="
                      activeTab === 'tab-1'
                        ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                        : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
                    "
                    @click="activeTab = 'tab-1'"
                  >
                    Customize
                  </button>
                  <button
                    type="button"
                    class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
                    :class="
                      activeTab === 'tab-2'
                        ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                        : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
                    "
                    @click="activeTab = 'tab-2'"
                  >
                    Code sample
                  </button>
                </div>
              </div>

              <!-- Tab content 1 -->
              <div v-if="activeTab === 'tab-1'">
                <!-- Customize -->
                <div class="w-full max-w-sm">
                  <p class="text-sm text-muted-400 dark:text-muted-400 mb-4">
                    Play with the available options to customize content,
                    positionning, duration and toast colors.
                  </p>
                  <!-- Grid -->
                  <div class="grid grid-cols-2 gap-4">
                    <!-- Y Position -->
                    <div class="xs:col-span-2 space-y-2">
                      <p class="text-sm text-muted-500 dark:text-muted-400">
                        Y Position
                      </p>
                      <div class="flex gap-2">
                        <div class="relative">
                          <input
                            v-model="positionY"
                            type="radio"
                            name="y_position"
                            value="top"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              positionY === 'top'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Top
                          </div>
                        </div>
                        <div class="relative">
                          <input
                            v-model="positionY"
                            type="radio"
                            name="y_position"
                            value="bottom"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              positionY === 'bottom'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Bottom
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- X Position -->
                    <div class="xs:col-span-2 space-y-2">
                      <div class="space-y-2">
                        <p class="text-sm text-muted-500 dark:text-muted-400">
                          X Position
                        </p>
                        <div class="flex gap-2">
                          <div class="relative">
                            <input
                              v-model="positionX"
                              type="radio"
                              name="x_position"
                              value="left"
                              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div
                              class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                              :class="
                                positionX === 'left'
                                  ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                  : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                              "
                            >
                              Left
                            </div>
                          </div>
                          <div class="relative">
                            <input
                              v-model="positionX"
                              type="radio"
                              name="x_position"
                              value="center"
                              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div
                              class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                              :class="
                                positionX === 'center'
                                  ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                  : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                              "
                            >
                              Center
                            </div>
                          </div>
                          <div class="relative">
                            <input
                              v-model="positionX"
                              type="radio"
                              name="x_position"
                              value="right"
                              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div
                              class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                              :class="
                                positionX === 'right'
                                  ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                  : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                              "
                            >
                              Right
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Colors -->
                    <div class="col-span-2 space-y-2">
                      <p class="text-sm text-muted-500 dark:text-muted-400">
                        Colors
                      </p>
                      <div class="flex gap-2">
                        <div class="relative">
                          <input
                            v-model="color"
                            type="radio"
                            name="t_color"
                            value="default"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              color === 'default'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Default
                          </div>
                        </div>
                        <div class="relative">
                          <input
                            v-model="color"
                            type="radio"
                            name="t_color"
                            value="success"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              color === 'success'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Success
                          </div>
                        </div>
                        <div class="relative">
                          <input
                            v-model="color"
                            type="radio"
                            name="t_color"
                            value="info"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              color === 'info'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Info
                          </div>
                        </div>
                        <div class="relative">
                          <input
                            v-model="color"
                            type="radio"
                            name="t_color"
                            value="warning"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              color === 'warning'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Warning
                          </div>
                        </div>
                        <div class="relative">
                          <input
                            v-model="color"
                            type="radio"
                            name="t_color"
                            value="danger"
                            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div
                            class="inline-flex items-center justify-center w-16 h-8 py-2 px-4 font-semibold text-xs border-2 rounded-lg"
                            :class="
                              color === 'danger'
                                ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                                : 'text-muted-500 dark:text-muted-400 bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700'
                            "
                          >
                            Danger
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Message -->
                    <div class="xs:col-span-2 space-y-2">
                      <p class="text-sm text-muted-500 dark:text-muted-400">
                        Message
                      </p>

                      <div class="group relative">
                        <input
                          v-model="message"
                          type="text"
                          class="px-3 py-2 h-10 text-sm leading-5 font-sans w-full rounded-xl bg-white text-muted-600 border border-muted-300 focus:border-muted-300 focus:shadow-lg focus:shadow-muted-300/50 dark:focus:shadow-muted-800/50 placeholder:text-muted-300 dark:placeholder:text-muted-500 dark:bg-muted-800 dark:text-muted-200 dark:border-muted-700 dark:focus:border-muted-700 transition-all duration-300 tw-accessibility"
                          placeholder="ex: Hello World!"
                        />
                      </div>
                    </div>
                    <!-- Duration -->
                    <div class="xs:col-span-2 space-y-2">
                      <p class="text-sm text-muted-500 dark:text-muted-400">
                        Duration (ms)
                      </p>

                      <div class="group relative">
                        <input
                          v-model="duration"
                          type="number"
                          class="px-3 py-2 h-10 text-sm leading-5 font-sans w-full rounded-xl bg-white text-muted-600 border border-muted-300 focus:border-muted-300 focus:shadow-lg focus:shadow-muted-300/50 dark:focus:shadow-muted-800/50 placeholder:text-muted-300 dark:placeholder:text-muted-500 dark:bg-muted-800 dark:text-muted-200 dark:border-muted-700 dark:focus:border-muted-700 transition-all duration-300 tw-accessibility"
                          placeholder="ex: 5000"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="text-xs text-muted-400 dark:text-muted-400 mt-4">
                    There are more options to customize, take look at the
                    <a href="#" class="font-medium text-primary-500"
                      >API docs</a
                    >
                    section.
                  </p>
                </div>
              </div>

              <!-- Tab content 2 -->
              <div v-else-if="activeTab === 'tab-2'">
                <DocCode :code="plainExample" scrollable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>