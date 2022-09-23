<script setup lang="ts">
const props = defineProps<{
  message?: string
}>()
</script>

<template>
  <div class="rounded bg-green-600 p-4 text-white">
    <p>Hello, {{ props.message }}</p>
  </div>
</template>
