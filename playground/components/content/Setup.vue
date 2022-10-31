<script setup>
const demoCode2 = `
export default defineNuxtConfig({
  modules: [
    '@cssninja/nuxt-toaster'
  ]
})
`
</script>

<template>
  <Section>
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-full md:col-start-2 md:col-end-7">
        <div class="p-6 rounded-xl bg-muted-200 dark:bg-muted-1000">
          <DocCode :code="demoCode2" file="nuxt.config.ts" />
        </div>
      </div>
      <div class="col-span-full md:col-span-5">
        <div class="flex flex-col justify-center h-full w-full max-w-md">
          <h2
            class="font-extrabold text-4xl text-muted-800 dark:text-white mb-2"
          >
            Setup module
          </h2>
          <p
            class="text-base text-muted-500 pb-3 border-b border-muted-200 dark:border-muted-800"
          >
            To setup the module in your Nuxt project, add
            <code>@cssninja/nuxt-toaster</code> to the modules section of your
            <code>nuxt.config.js</code> or <code>nuxt.config.ts</code> file.
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>