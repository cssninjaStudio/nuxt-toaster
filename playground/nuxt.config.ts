import { defineNuxtConfig } from 'nuxt/config'
import NinjaNuxtToaster from '..'

export default defineNuxtConfig({
  modules: [NinjaNuxtToaster],
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900?family=Elsie+Swash+Caps:wght@400;900&display=swap'
        }
      ],
      script: [
        {
          src: 'https://cdn.tailwindcss.com'
        }
      ]
    }
  }
})
