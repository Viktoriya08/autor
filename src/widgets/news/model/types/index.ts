export interface NewsItem {
  name: string
  link_to_detail: string
  image: string | null,
  image_webp: string | null,
  imageFirst?: {
    [key: string]: [string | null, string | null]
  }[]
  date: string,
  date_news: string,
  section_name: string,
  section_code: string,
  tagFirst: boolean,
  tagFirstinSection: boolean
}

export interface ListNews {
  title: string
  items: NewsItem[]
}
