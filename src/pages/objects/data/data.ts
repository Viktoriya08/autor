export const testObjectProps = {
  name: '16',
  price: ['28 795 000', '28 795 000'],
  params: [
    { name: 'комнаты', value: '1 (Студия)' },
    { name: 'Площадь', value: '26 м²' },
    { name: 'Этаж', value: '4' },
    { name: 'Отделка', value: 'Полная' },
    { name: 'терраса', value: 'Есть' },
  ],
  chips: [
    { icon: 'mount', text: 'вид на горы' },
    { icon: 'sea', text: 'вид на море' },
    { icon: 'sea', text: 'полная отделка' },
    { icon: 'sea', text: 'двухуровневые' },
    { icon: 'sea', text: 'с террасой' },
  ]
}

export const testObjectView = {
  imgs: {
    1: '/image/plan/plan-object-1.png',
    2: '/image/plan/plan-object-2.png'
  }
}

export const testObjectSimilar = [
  {
    id: '88',
    name: '№88',
    image: {
      '380': [
        '/image/plan/object-380.png',
        '/image/plan/object-380.webp'
      ],
      '760': [
        '/image/plan/object-760.png',
        '/image/plan/object-760.webp'
      ]
    },
    price: ['20 879 500', '20 879 500'],
    square: '54.94',
    features: {
      floor: { value: '3' },
      type: { value: '2', unit: true },
      view: { icon: 'sea-20', text: 'вид на море' },
    }
  },
  {
    id: '66',
    name: '№66',
    image: {
      '380': [
        '/image/plan/object-380.png',
        '/image/plan/object-380.webp'
      ],
      '760': [
        '/image/plan/object-760.png',
        '/image/plan/object-760.webp'
      ]
    },
    price: ['208 795 000', '208 795 000'],
    square: '111.94',
    features: {
      floor: { value: '3' },
      type: { value: 'c', unit: false },
      view: { icon: 'sea-20', text: 'вид на море' },
    }
  },
  {
    id: '77',
    name: '№77',
    image: {
      '380': [
        '/image/plan/object-380.png',
        '/image/plan/object-380.webp'
      ],
      '760': [
        '/image/plan/object-760.png',
        '/image/plan/object-760.webp'
      ]
    },
    price: ['208 795 000', '208 795 000'],
    square: '100.5',
    features: {
      floor: { value: '6' },
      type: { value: '3', unit: true },
      view: { icon: 'sea-20', text: 'вид на море' },
    },
    booked: true
  },
]
