export interface ObjectItem {
  // id: string
  number: string
  total_area: string
  floor: string
  rooms: { value: string, unit: boolean }
  window: { icon: string, name: string } | null
  price: string[]
  free?: string
  image: string | null
}
