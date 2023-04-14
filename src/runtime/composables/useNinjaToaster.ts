import type { NinjaToasterInstance } from '../../types'
import { useNuxtApp } from '#imports'

export function useNinjaToaster(): NinjaToasterInstance {
  const { $nt } = useNuxtApp()
  return $nt as NinjaToasterInstance
}
