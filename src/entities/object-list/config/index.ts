import { PUBLIC_REMOTE } from '@/shared/config'

// шаг подгрузки
export const limitLoad = 10

export const filterName = {
  price: 'PROFITBASE_PRICE',
  room: 'FILTER_ROOMS',
  free: 'FILTER_FREE',
  square: 'PROFITBASE_AREA_TOTAL',
  tag: 'FILTER_TAGS',
  limit: 'limit',
  sort: 'sort',
  page: 'page',
}

export const sortItems = [
  { value: 'price-asc', text: 'Цена по возрастанию' },
  { value: 'price-desc', text: 'Цена по убыванию' },
  { value: 'pricem-asc', text: 'цена за м² по возрастанию' },
  { value: 'pricem-desc', text: 'цена за м² по убыванию' },
  { value: 'square-asc', text: 'площадь по возрастанию' },
  { value: 'square-desc', text: 'площадь по убыванию' },
]

export const urlApi = `${PUBLIC_REMOTE}/api/v1/object/list`
