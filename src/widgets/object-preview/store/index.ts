import type { ObjectPreview } from '../model/types'

export const dataPreview = shallowRef<ObjectPreview>({
  index: -1,
  name: '',
  image: '',
  // image: {
  //   '380': [],
  //   '760': []
  // },
  square: '',
})

export const visibilityPreview = ref(false)
