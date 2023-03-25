<script setup lang="ts">
const props = defineProps<{
  type?: 'basic' | 'custom' | 'advanced'
  message?: string
}>()
</script>

<template>
  <div class="rounded bg-green-600 p-4 text-white">
    <p>Hello global, {{ props.message }}</p>
  </div>
</template>
