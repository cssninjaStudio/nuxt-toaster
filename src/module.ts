import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { addImports, addPlugin, defineNuxtModule } from '@nuxt/kit'
import type { NinjaToasterBaseProps } from './types'
import { ModuleOptions } from '@nuxt/schema'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@cssninja/nuxt-toaster',
    configKey: 'toaster',
    compatibility: {
      nuxt: '^3.0.0-rc.9'
    }
  },
  defaults: {
    installPlugin: true
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addImports({
      name: 'useNinjaToasterState',
      as: 'useNinjaToasterState',
      from: resolve(runtimeDir, 'composables/useNinjaToasterState')
    })
    addImports({
      name: 'useNinjaToasterProgress',
      as: 'useNinjaToasterProgress',
      from: resolve(runtimeDir, 'composables/useNinjaToasterState')
    })
    addImports({
      name: 'createNinjaToaster',
      as: 'createNinjaToaster',
      from: resolve(runtimeDir, 'create')
    })

    if (options.installPlugin) {
      addImports({
        name: 'useNinjaToaster',
        as: 'useNinjaToaster',
        from: resolve(runtimeDir, 'composables/useNinjaToaster')
      })
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    toaster?: NinjaToasterBaseProps
  }
}