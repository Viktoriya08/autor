import type { CardFeatureProp } from '@/shared/ui/card-feature/types'

export type SlideData = {
  name: string
  title: string
  image: ImagePaths
  small_image_80: string[]
  title_to_text: string
  title_to_text_mobile: string
  text: string
  text_mobile: string
  parametrs: {
    default: CardFeatureProp[]
    mobile: CardFeatureProp[]
  }
}

export type StateSlider = {
  active: boolean,
  activeSlide: number,
  count: number,
}
