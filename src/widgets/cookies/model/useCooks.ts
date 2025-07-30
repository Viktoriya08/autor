import { useCookies } from 'vue3-cookies'

const stateTheme = ref({
  base: 'blue',
  active: 'blue'
})

export const updateTheme = (theme: string) => {
  switch(theme) {
    case 'brown-promo':
      stateTheme.value.active = 'yellow'
      break

    case 'blue-promo':
    case 'blue-transparent':
      stateTheme.value.active = 'dark'
      break

    case 'bronze-promo':
      stateTheme.value.active = 'bronze'
      break

    case 'dark-promo':
    default:
      stateTheme.value.active = 'blue'
      break
  }
}

export const useCooks = () => {
  const route = useRoute()
  const { cookies } = useCookies()
  const stateCookies = ref(false)

  const resolveTheme = () => {
    const path = route.path

    switch(true) {
      case path.startsWith('/objects'):
        return 'dark'

      case path.startsWith('/floors'):
        return 'dark'

      case path.startsWith('/contacts'):
        return 'dark'

      case path.startsWith('/construction'):
        return 'dark'

      case path.startsWith('/news'):
      case path.startsWith('/documents'):
        return 'bronze'

      default:
        return 'blue'
    }
  }

  const hasCookie = () => {
    return cookies.get('consent') == 'accepted'
  }

  const setCookie = () => {
    cookies.set('consent', 'accepted')
    stateCookies.value = false
  }

  const resetTheme = (direction?: number , target?: HTMLElement) => {
    const id = target?.getAttribute('id')

    switch(id) {
      case 'section-people':
        stateTheme.value.active = 'dark'
        break

      case 'promo-main':
        stateTheme.value.active =  (direction === 1)
          ? 'dark'
          : stateTheme.value.base
        break

      case 'history-slides':
        if (direction === 1) return
        stateTheme.value.active = stateTheme.value.base
        break

      default:
        stateTheme.value.active = stateTheme.value.base
        break
    }
  }

  watch(() => route.path, () => {
    stateTheme.value.base = resolveTheme()
    stateTheme.value.active = resolveTheme()
  }, { immediate: true })

  return {
    stateCookies,
    setCookie,
    hasCookie,
    updateTheme,
    resetTheme,
    stateTheme,
  }
}
