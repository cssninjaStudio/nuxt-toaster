# @cssninja/nuxt-toaster

A simple toaster handler for Nuxt.js

[![npm](https://img.shields.io/npm/v/@cssninja/nuxt-toaster.svg)](https://www.npmjs.com/package/@cssninja/nuxt-toaster)

## Features

- Unstyled by default
- Render any component as a toast
- Fully customizable
- Simple to use


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
   * The content of the toast, can be a render function
   * 
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
    containerId: 'nt-container',
    containerClass: 'nt-container-class',
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


### Using `@cssninja/nuxt-toaster` module options

To avoid to repeat yourself, you can set defaults values for ninjaToaster.show method in the module options.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@cssninja/nuxt-toaster'
  ],
  toaster: {
    base: {
      // default options for ninjaToaster.show
    }
  }
})
```

### Using a custom plugin

By default, the module create an instance of `ninjaToaster` and inject it in the nuxt context in `useNuxtApp().$nt`.  

You can create your own instance and inject it in the context by using a custom plugin.

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
```html
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
  <div :class="`my-toaster-${props.info}`">
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
  // define default show options here
  const nt = createNinjaToaster({
    theme: {
      containerId: 'my-toaster-container',
      containerClass: 'my-toaster-container-class',
      wrapperClass: 'my-toaster-wrapper-class',
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
      const toast = await nt.show(() => h(MyToastError, {
        ...options,
        type: 'error'
      }))

      // focus the toast once it's mounted
      toast.el.focus()
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


## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
