export type Room = {
  room: string
  number: string
  square: string
  price: string[]
  free: string
}

export type ListRoom = {
  [key: string]: Room
}
