
interface ConstructionCard {
  id: string
  name: string
  date: string
  link_to_detail: string
  image_3840: string
  image_3840_webp: string
  image_1920: string
  image_1920_webp: string
  image_1536: string
  image_1536_webp: string
  image_768: string
  image_768_webp: string
  month: string
  section: string
}

export interface APIRequest {
  status: string
  data: [
    {
      name: string
      items: Array<ConstructionCard>
    }
  ]
}

export interface Year {
  key: string
  name: string
}
