import { useNuxtApp } from '#imports'

type NinjaToasterInstance = ReturnType<typeof createNinjaToaster>

export function useNinjaToaster() {
  const { $nt } = useNuxtApp()
  return $nt as NinjaToasterInstance
}