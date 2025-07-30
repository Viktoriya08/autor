
export interface Review {
  id: string
  item_name: string
  invest_text: string
  profit_text: string
  profit_text_rubles: string
  profit_text_how: string
  age: string
  city: string
  invest_detail: string
  profit_detail: string | null
  image: string | null
  image_webp: string | null
  title_modal: string | null
  text_modal: string | null
  video_review: string | null
}

export interface APIRequest {
  status: string
  data: {
    name: string
    text: string
    items: Array<Review>
  }
}
