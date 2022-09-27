<script setup lang="ts">
const { isDark } = useDarkmode()
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<style>
html,
body {
  font-family: 'Inter', sans-serif;
}
</style>