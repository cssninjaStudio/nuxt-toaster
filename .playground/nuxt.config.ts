import { defineNuxtConfig } from 'nuxt/config'
import NinjaNuxtToaster from '..'

export default defineNuxtConfig({
  modules: [NinjaNuxtToaster],
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.tailwindcss.com',
        },
      ],
    },
  },
})
