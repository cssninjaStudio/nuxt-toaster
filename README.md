# @cssninja/nuxt-toaster

🔔 A simple toaster (notifier) handler for Nuxt.js

[![npm](https://img.shields.io/npm/v/@cssninja/nuxt-toaster.svg)](https://www.npmjs.com/package/@cssninja/nuxt-toaster)

## Features

- 🔧 Unstyled by default
- 🧩 Render any component as a toast
- 🎨 Fully customizable
- 🪄 Simple to use


## Installation

1. Add `@cssninja/nuxt-toaster` dependency to your project
```bash
# Using pnpm
pnpm add -D @cssninja/nuxt-toaster

# Using yarn
pnpm add -D @cssninja/nuxt-toaster

# Using npm
npm install --save-dev @cssninja/nuxt-toaster
```

2. Add `@cssninja/nuxt-toaster` to the `modules` section of `nuxt.config.js`

```ts
export default defineNuxtConfig({
  modules: [
    '@cssninja/nuxt-toaster'
  ]
})
```

## Basic Usage

### Show a toast

```ts
// get the ninjaToaster instance
const { $nt } = useNuxtApp()

// show a toast with a string as content
$nt.show('Hello world')
```

### Show a toast with a custom component

```ts
// define or import a component
const MyToast = defineComponent({
  /* ... */
})

// get the ninjaToaster instance
const { $nt } = useNuxtApp()

// show a toast with render function as content
$nt.show(() => h(MyToast))
```

## Configuration

### Using `ninjaToaster.show` options
```ts
// get the ninjaToaster instance
const { $nt } = useNuxtApp()

$nt.show({
  /**
   * The content of the toast, can be a render function (a.k.a stateless component)
   * 
   * @type {string | number | Record<string, any> | (() => Component)}
   * @required
   */
  content: 'Hello world',

  /**
   * The duration of the toast
   * 
   * @default 5000
   */
  duration: 5000,

  /**
   * Pause the duration timer on hover, or focus
   * 
   * @default true
   */
  pauseOnHover: true,

  /**
   * Whereas the toast can be closed on click,
   * or on pressing Enter/Space keys when focused
   * 
   * @default true
   */
  dismissible: false,

  /**
   * Maximum number of toasts to show 
   * on the same `theme.containerId`
   * 
   * @default Infinity
   */
  maxToasts: 5,

  /**
   * Transition property for the toast
   * 
   * @see https://vuejs.org/api/built-in-components.html#transition
   */
  transition: {
    name: 'fadeIn',
  },

  /**
   * The theme used for the toast
   */
  theme: {
    /**
     * The container id where the toast will be rendered
     * If not exists, it will be created automatically
     * 
     * @default 'nt-container'
     */
    containerId: 'nt-container',
    /**
     * The class name for the toaster container (applyed to toast container)
     * 
     * @type {string | string[]}
     * @default ''
     */
    containerClass: 'nt-container-class',
    /**
     * The class name for the toast wrapper (applyed to each toast)
     * 
     * @type {string | string[]}
     * @default ''
     */
    wrapperClass: 'nt-wrapper-class',
  }
})
```

> This will create a toast with the following HTML structure:
> ```html
> <body>
>   <!-- ... -->
>   <div id="nt-container" class="nt-container-class">
>     <div
>       class="nt-wrapper-class"
>       role="alert"
>       tabindex="0"
>     >
>       Hello world
>     </div>
>   </div>
> </body>
> ```
> **note:** the `theme` property is used to customize the toaster behavior. Each `theme.containerId` will have their own context (e.g. the `maxToasts` will count how many toaster are visible in the container with matching id).


### Using `toaster` app config

To avoid to repeat yourself, you can set defaults values for ninjaToaster.show method in the nuxt `app.config.ts` at the root of your project.

```ts
// app.config.ts
export default defineAppConfig({
  toaster: {
    // default options for ninjaToaster.show
  }
})
```

### Using a custom plugin

By default, the module create an instance of `ninjaToaster` and inject it in the nuxt context in `useNuxtApp().$nt`.  

You can create your own instance and inject it in the context by using a custom plugin. Here we are using tailwindcss to style the toast.

1. Disable default plugin in `nuxt.config.ts` module options
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@cssninja/nuxt-toaster'
  ],
  toaster: {
    // disable the default plugin 
    installPlugin: false
  }
})
```

2. Create a custom toast component
```vue
<script setup lang="ts">
// components/MyToast.vue
const props = defineProps<{
  title: string
  message?: string
  type: 'info' | 'error'
}>()

const {
  isHovered,
  isActive,
  timer,
  duration,
  click,
  close,
} = useNinjaToasterState()

const {
  percent,
  endAt,
  closeIn
} = useNinjaToasterProgress()
</script>

<template>
  <div
    class="rounded p-4"
    :class="[
      props.type === 'info' && 'bg-indigo-600 text-indigo-500'
      props.type === 'error' && 'bg-rose-600 text-rose-500'
    ]"
  >
    <h1>{{ props.title }}</h1>
    <p v-if="props.message">{{ props.message }}</p>
    <button @click="close()">Close</button>
  </div>
</template>
```

3. Create a custom plugin

```ts
// plugins/toaster.ts
import MyToast from '~/components/MyToast.vue'

interface ToasterOptions {
  message: string
  title?: string
}

export default defineNuxtPlugin(() => {
  // define or import a theme
  const theme = {
    containerId: 'nt-container-bottom-right',
    containerClass: [
      'absolute',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse',
      'items-start',
      'gap-2'
    ],
    wrapperClass: [
      'pointer-events-auto',
      'cursor-pointer',
    ],
  }

  // set default show options here
  const nt = createNinjaToaster({
    theme,
    maxToasts: 5,
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-300 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform translate-x-full opacity-0'
    }
  })

  const toaster = {
    info (options: ToasterOptions) {
      nt.show(() => h(MyToast, {
        ...options,
        type: 'info'
      }))
    },
    async error (options: ToasterOptions) {
      // wait for the toast to be mounted
      const { el, close } = await nt.show(() => h(MyToastError, {
        ...options,
        type: 'error'
      }))

      // focus the toast once it's mounted
      el.focus()
    },
    close() {
      // close all toasts
      nt.closeAll()

      // or close toasts in a specific containerId
      nt.close('nt-container-bottom-right') 

      // or close toasts using a theme
      nt.close(theme)
    },
  }

  return {
    provide {
      toaster
    }
  }
})
```

3. Use your `toaster` instance in your app
```ts
// pages/index.vue
const { $toaster } = useNuxtApp()

$toaster.info({
  title: 'Hello world',
  message: 'This is a toaster info message'
})
$toaster.error({
  title: 'Hello world',
  message: 'This is a toaster error message'
})
```

## Theming

### Minimal CSS theme

```css
#nt-container {
  /* make container fit the screen */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 100;
  pointer-events: none;

  /* position the toasts using flexbox */
  display: flex;
  
  /**
   * position all toasts in bottom of the screen 
   * - use "flex-direction: column;" to position in top screen
   */
  flex-direction: column-reverse;

  /**
   * align all toasts to the center
   * - use "align-items: start" to aling to the left
   * - use "align-items: end" to aling to the right
   */
  align-items: center;

  /* add some space between toasts and screen */
  padding: 2rem;
  gap: 1rem;
}

#nt-container [role='alert'] {
  /* allow toasts to be interactive */
  pointer-events: auto;

  /* add styles to toasts */
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}


@media (max-width: 767px) {
  #nt-container {
    /* fit toasts to screen on mobile */
    padding: 0;
  }
}

```


## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
