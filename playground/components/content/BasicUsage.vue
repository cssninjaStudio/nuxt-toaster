<script setup>
const demoCode3 = `
// get the ninjaToaster instance
const { $nt } = useNuxtApp()

// show a toast with a string as content
$nt.show('Hello world')
  `
</script>

<template>
  <Section>
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-full md:col-span-5 md:col-start-2">
        <div class="flex flex-col justify-center h-full w-full max-w-md">
          <h2
            class="font-extrabold text-4xl text-muted-800 dark:text-white mb-2"
          >
            Show a Toast
          </h2>
          <p
            class="text-base text-muted-500 pb-4 border-b border-muted-200 dark:border-muted-800"
          >
            Once you've added <code>@cssninja/nuxt-toaster</code> to your
            project, you can immediately start showing toasts. Please note that
            toasts will be unstyled. Jump to the
            <NuxtLink to="/" class="font-medium text-primary-500"
              >theming section</NuxtLink
            >
            for more details.
          </p>
        </div>
      </div>
      <div class="col-span-full md:col-span-5">
        <div class="p-6 rounded-xl bg-muted-200 dark:bg-muted-1000">
          <DocCode :code="demoCode3" />
        </div>
      </div>
    </div>
  </Section>
</template>