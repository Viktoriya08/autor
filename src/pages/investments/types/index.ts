export interface imgProps {
  390?: Array<[string | null, string | null]>
  780?: Array<[string | null, string | null]>
  768?: Array<[string | null, string | null]>
  1536?: Array<[string | null, string | null]>
  1920?: Array<[string | null, string | null]>
  3840?: Array<[string | null, string | null]>
}

export interface Indicator {
  title: string
  number: string
  unit: string
}

export interface APIRequest {
  status: string
  data: {
    name: string
    text: string
    text_mobile: string
    image: imgProps
    profit_indicators: Array<Indicator>
  }
}
