export interface APIRequest {
  status: string
  data: {
    id: string
    name: string
    profit_indicators: Array<string>
  }
}
