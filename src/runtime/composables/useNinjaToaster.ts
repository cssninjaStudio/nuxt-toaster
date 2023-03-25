import { useNuxtApp } from '#imports'
import { NinjaToasterInstance } from '../../types'

export function useNinjaToaster(): NinjaToasterInstance {
  const { $nt } = useNuxtApp()
  return $nt
}