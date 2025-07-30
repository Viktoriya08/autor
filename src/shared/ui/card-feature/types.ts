// import { type IImg } from '@/shared/ui/images'

export interface CardFeatureProp {
  prefix?: string,
  value: string,
  unit?: string,
  name: string,
}

export interface CardFeature {
  heading: string,
  img: {
    [key: string]: string[]
  },
  title?: {
    default: string,
    mobile: string
  },
  text: {
    default: string,
    mobile: string
  },
  link?: string,
  params?: {
    default: CardFeatureProp[],
    mobile?: CardFeatureProp[]
  }
}
