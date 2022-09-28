<script setup lang="ts">
import { useNinjaToasterProgress, useNinjaToasterState } from '#imports'

const props = defineProps<{
  message?: string
}>()

const state = useNinjaToasterState()
const { percent, closeIn, endAt } = useNinjaToasterProgress()
</script>

<template>
  <div class="relative rounded bg-slate-500 p-4 pb-6 text-white">
    <div class="absolute inset-x-0 bottom-0 h-4">
      <div
        class="h-4 rounded-b bg-slate-600"
        :style="{
          width: `${percent * 100}%`,
        }"
      ></div>
    </div>

    <button
      class="rounded bg-white px-2 py-1 text-slate-500 hover:bg-slate-200 hover:text-slate-600 focus:bg-slate-200 focus:text-slate-600"
      @click="state.close"
    >
      close
    </button>
    <p>Hello, {{ props.message }}</p>
    <pre>{{ state }}</pre>
    <pre>{{ { percent, closeIn, endAt } }}</pre>
    <NuxtLink
      to="/#hello"
      class="hover:text-slate-100 hover:underline focus:text-slate-100 focus:underline"
    >
      A NuxtLink
    </NuxtLink>
  </div>
</template>
