import { createNinjaToaster } from './create'

// @ts-expect-error - Nuxt 3 auto-imports
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster()
    }
  }
})
