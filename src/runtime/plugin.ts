import { createNinjaToaster } from './create'

// @ts-ignore
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster()
    }
  }
})
