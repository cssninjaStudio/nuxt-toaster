import { createNinjaToaster } from './create'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster()
    }
  }
})
