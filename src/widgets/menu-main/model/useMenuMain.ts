const isActive = ref(false)

export const useMenuMain = () => {
  const toggleMenu = () => {
    isActive.value = !isActive.value
  }

  const closeMenu = () => {
    isActive.value = false
  }

  onMounted(() => {
    const { $lenis } = useNuxtApp()

    watch(() => isActive.value, () => {
      if (isActive.value) {
        $lenis?.stop()
      } else {
        $lenis?.start()
      }
    })
  })

  return {
    isActive,
    toggleMenu,
    closeMenu,
  }
}
