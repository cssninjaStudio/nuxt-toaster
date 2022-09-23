import { defineNuxtConfig } from 'nuxt/config'
import NinjaNuxtToaster from '..'

export default defineNuxtConfig({
  modules: [NinjaNuxtToaster],
  toaster: {},
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.tailwindcss.com'
        }
      ]
    }
  }
})
