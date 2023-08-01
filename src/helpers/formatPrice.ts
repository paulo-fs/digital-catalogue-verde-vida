export function formatPrice(price: number) {
  const result = price ? price.toFixed(2).replace('.', ',') : '0,00'
  return result
}
