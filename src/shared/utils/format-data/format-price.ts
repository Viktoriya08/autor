export const formatPrice = (price: string) => {
  const value = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0
  }).format(Number(price))

  return value
}
