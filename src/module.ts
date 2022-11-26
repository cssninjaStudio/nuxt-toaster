import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addImports, addPlugin, defineNuxtModule } from '@nuxt/kit'
import type { NinjaToasterBaseProps } from './props'

export * from './props'

export interface ModuleOptions {
  installPlugin?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /** nuxt-icon configuration */
    toaster?: NinjaToasterBaseProps
  }
}

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
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
