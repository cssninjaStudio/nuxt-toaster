import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'

import type { ModuleOptions, NinjaToasterBaseProps } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@cssninja/nuxt-toaster',
    configKey: 'toaster',
    compatibility: {
      nuxt: '^3.0.0-0 || ^4.0.0-0',
    },
  },
  defaults: {
    installPlugin: true,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    addImports({
      name: 'useNinjaToasterState',
      as: 'useNinjaToasterState',
      from: resolve(runtimeDir, 'composables', 'useNinjaToasterState'),
    })
    addImports({
      name: 'useNinjaToasterProgress',
      as: 'useNinjaToasterProgress',
      from: resolve(runtimeDir, 'composables', 'useNinjaToasterState'),
    })
    addImports({
      name: 'createNinjaToaster',
      as: 'createNinjaToaster',
      from: resolve(runtimeDir, 'create'),
    })

    if (options.installPlugin) {
      addImports({
        name: 'useNinjaToaster',
        as: 'useNinjaToaster',
        from: resolve(runtimeDir, 'composables', 'useNinjaToaster'),
      })
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    toaster?: NinjaToasterBaseProps
  }
}
