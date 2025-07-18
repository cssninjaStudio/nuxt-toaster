import { createNinjaToaster } from './create'

import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster(),
    },
  }
})
