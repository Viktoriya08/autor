import { listTheme } from '../data'

const theme = ref({
  base: listTheme['dark-transparent'],
  active: listTheme['dark-transparent']
})

export const updateTheme = (nameTheme: string) => {
  switch(nameTheme) {
    case 'brown-promo':
      theme.value.active = listTheme['yellow-transparent']
      break

    case 'blue-promo':
      theme.value.active = listTheme['blue-promo']
      break

    case 'blue-transparent':
      theme.value.active = listTheme['blue-transparent']
      break

    case 'dark-promo':
      theme.value.active = listTheme['dark-transparent']
      break

    case 'bronze-promo':
      theme.value.active = listTheme['bronze-transparent']
      break

    default:
      theme.value.active = listTheme['dark-transparent']
      break
  }
}

export const useHeader = () => {
  const route = useRoute()

  const resolveTheme = () => {
    const path = route.path

    switch(true) {
      case path.startsWith('/objects'):
        return  listTheme['objects']

      case path.startsWith('/floors'):
        return listTheme['floors']

      case path.startsWith('/contacts'):
        return listTheme['blue-internal']

      case path.startsWith('/construction'):
        return listTheme['blue-promo']

      case path.startsWith('/news'):
      case path.startsWith('/documents'):
        return listTheme['bronze-internal']

      default:
        return listTheme['dark-transparent']
    }
  }

  const resetTheme = (direction?: number, target?: HTMLElement) => {
    const id = target?.getAttribute('id')

    switch(id) {
      case 'section-people':
        theme.value.active = listTheme['blue-transparent']
        break

      case 'promo-main':
        theme.value.active = (direction === 1)
          ? listTheme['blue-promo']
          : theme.value.base
        break

      case 'history-slides':
        if (direction === 1) return
        theme.value.active = theme.value.base
        break

      default:
        theme.value.active = theme.value.base
        break
    }
  }

  watch(() => route.path, () => {
    theme.value.base = resolveTheme()
    theme.value.active = resolveTheme()
  }, { immediate: true })

  return {
    theme,
    updateTheme,
    resetTheme,
  }
}
