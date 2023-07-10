export function formatPrice(price: number) {
  const result = price.toFixed(2).replace('.', ',')
  return result
}
