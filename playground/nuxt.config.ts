import { defineNuxtConfig } from 'nuxt/config'
// @ts-expect-error - this is a playground
import NinjaNuxtToaster from '..'

export default defineNuxtConfig({
  modules: [NinjaNuxtToaster],
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
