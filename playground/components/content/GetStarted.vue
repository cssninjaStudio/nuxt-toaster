<script setup>
const demoCode = `
# Using pnpm
pnpm add -D @cssninja/nuxt-toaster

# Using yarn
pnpm add -D @cssninja/nuxt-toaster

# Using npm
npm install --save-dev @cssninja/nuxt-toaster
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
            Get Started
          </h2>
          <p
            class="text-base text-muted-500 pb-4 border-b border-muted-200 dark:border-muted-800"
          >
            Nuxt Toaster is a simple toaster (notifier) handler for Nuxt.js,
            served as a nuxt module.Start by adding
            <code>@cssninja/nuxt-toaster</code> as a dependency of your project.
          </p>
          <ul class="mt-4 space-y-2">
            <li>
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-emerald-500" viewBox="0 0 256 256">
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="currentColor"
                    opacity=".2"
                  />
                  <path
                    fill="currentColor"
                    d="m166.5 98.2l-53.2 50.7l-23.8-22.7a8 8 0 1 0-11 11.6l29.3 28a7.9 7.9 0 0 0 5.5 2.2a8.1 8.1 0 0 0 5.6-2.2l58.6-56a8 8 0 0 0-11-11.6Z"
                  />
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
                  />
                </svg>
                <span class="text-sm text-muted-500 dark:text-muted-400"
                  >Unstyled by default</span
                >
              </div>
            </li>
            <li>
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-emerald-500" viewBox="0 0 256 256">
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="currentColor"
                    opacity=".2"
                  />
                  <path
                    fill="currentColor"
                    d="m166.5 98.2l-53.2 50.7l-23.8-22.7a8 8 0 1 0-11 11.6l29.3 28a7.9 7.9 0 0 0 5.5 2.2a8.1 8.1 0 0 0 5.6-2.2l58.6-56a8 8 0 0 0-11-11.6Z"
                  />
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
                  />
                </svg>
                <span class="text-sm text-muted-500 dark:text-muted-400"
                  >Render any component as a toast</span
                >
              </div>
            </li>
            <li>
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-emerald-500" viewBox="0 0 256 256">
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="currentColor"
                    opacity=".2"
                  />
                  <path
                    fill="currentColor"
                    d="m166.5 98.2l-53.2 50.7l-23.8-22.7a8 8 0 1 0-11 11.6l29.3 28a7.9 7.9 0 0 0 5.5 2.2a8.1 8.1 0 0 0 5.6-2.2l58.6-56a8 8 0 0 0-11-11.6Z"
                  />
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
                  />
                </svg>
                <span class="text-sm text-muted-500 dark:text-muted-400"
                  >Fully customizable</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-full md:col-span-5">
        <div class="p-6 rounded-xl bg-muted-200 dark:bg-muted-1000">
          <DocCode :code="demoCode" />
        </div>
      </div>
    </div>
  </Section>
</template>