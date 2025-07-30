import type { LngLat } from '@yandex/ymaps3-types'

export interface CardContact {
  name: string
  phone: string
  email: string
}

export interface APIData {
  address: string
  coords: LngLat | null
  offices: CardContact[]
}

// export interface APIRequest {
//   status: string
//   data: {
//     address: string
//     coords: LngLat | null
//     offices: CardContact[]
//   }
// }
