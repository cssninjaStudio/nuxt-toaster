<script setup lang="ts">
import { useNinjaToasterProgress, useNinjaToasterState } from '#imports'

const props = defineProps<{
  message?: string
}>()

const state = useNinjaToasterState()
const { percent, closeIn, endAt } = useNinjaToasterProgress()
const toggled = ref(false)
</script>
  
  <template>
  <div
    class="relative rounded-xl bg-white dark:bg-muted-800 p-6 shadow-2xl shadow-muted-500/10 dark:shadow-muted-800/10"
  >
    <div v-if="!toggled" class="text-center">
      <div
        class="relative flex h-20 w-20 items-center justify-center mx-auto rounded-full"
      >
        <img
          src="https://media.cssninja.io/shuriken/avatars/16.svg"
          class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
          alt="Avatar image"
        />
      </div>
      <div>
        <h4 class="font-medium text-muted-800 dark:text-muted-100">Jerry K.</h4>
        <p class="text-sm text-muted-400">Scrum Master</p>
      </div>
      <div class="py-4">
        <p class="text-sm text-muted-500 dark:text-muted-400">
          Jerry is a talented Scrum Master looking for new opportunities.
        </p>
      </div>
      <div class="flex items-center justify-between gap-2 mb-6">
        <button
          type="button"
          class="w-full flex items-center justify-center h-10 py-2 px-4 text-sm text-muted-600 dark:text-muted-400 bg-muted-100 dark:bg-muted-700 rounded-lg hover:bg-muted-50 dark:hover:bg-muted-600 transition-colors duration-300"
        >
          View Profile
        </button>
        <button
          type="button"
          class="w-full flex items-center justify-center h-10 py-2 px-4 text-sm bg-current rounded-lg transition-colors duration-300"
        >
          <span class="text-white">Hire Now</span>
        </button>
      </div>
      <div
        class="relative h-1 w-full bg-muted-200 dark:bg-muted-800 overflow-hidden rounded mb-4"
      >
        <div
          class="absolute top-0 left-0 h-full rounded transition duration-300 bg-current w-full"
          :style="{
            width: `${percent * 100}%`,
          }"
        ></div>
      </div>
      <!-- Toggle -->
      <div class="w-full">
        <button
          type="button"
          class="w-full inline-flex justify-center text-xs font-medium underline-offset-2 hover:underline text-current cursor-pointer"
          @click="toggled = !toggled"
        >
          See some code behind it
        </button>
      </div>
    </div>
    <!-- Code -->
    <div v-else>
      <div class="flex items-center justify-between">
        <div class="w-3 h-3 rounded-full bg-current"></div>
        <button
          type="button"
          class="inline-flex justify-center text-xs font-medium underline-offset-2 hover:underline text-current cursor-pointer"
          @click="state.close"
        >
          This closes the toast
        </button>
      </div>
      <!-- Message -->
      <div class="py-4">
        <p class="text-sm text-muted-600 dark:text-muted-200">
          {{ props.message }}
        </p>
      </div>
      <!-- State -->
      <div class="space-y-4 mb-2">
        <div class="relative">
          <span class="absolute top-3 right-3 text-xs text-muted-400"
            >State</span
          >
          <pre
            class="p-6 font-mono text-xs text-muted-500 dark:text-muted-400 rounded-xl bg-muted-100 dark:bg-muted-800"
            >{{ state }}</pre
          >
        </div>
        <div class="relative">
          <span class="absolute top-3 right-3 text-xs text-muted-400"
            >Duration</span
          >
          <pre
            class="p-6 font-mono text-xs text-muted-500 dark:text-muted-400 rounded-xl bg-muted-100 dark:bg-muted-800"
            >{{ { percent, closeIn, endAt } }}</pre
          >
        </div>
      </div>
      <!-- Toggle -->
      <div class="w-full">
        <button
          type="button"
          class="w-full inline-flex justify-center text-xs font-medium underline-offset-2 hover:underline text-current cursor-pointer"
          @click="toggled = !toggled"
        >
          Back to toast content
        </button>
      </div>
    </div>
  </div>
</template>
  