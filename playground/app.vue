<script setup lang="ts">
const { isDark } = useDarkmode()
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <Navigation />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
html,
body {
  font-family: 'Inter', sans-serif;
}
</style>