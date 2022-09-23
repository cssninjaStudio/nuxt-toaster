import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addImports, addPlugin, defineNuxtModule } from '@nuxt/kit'
import type { NinjaToasterBaseProps } from './props'

export interface ModuleOptions {
  base?: NinjaToasterBaseProps
  installPlugin?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@cssninja/nuxt-toaster',
    configKey: 'toaster'
  },
  defaults: {
    base: {},
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

    nuxt.options.runtimeConfig.public.nt = options.base as any
  }
})
