import { IProduct } from '@/dataTypes/product.dto'

export async function getAllProducts(searchParam?: string): Promise<{products: IProduct[]}> {
  let query = ''

  if (searchParam) {
    query = `name=${searchParam}`
  }

  const {products} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product?${query}`)
    .then(response => response.json())
    .catch(error => console.log(error))

  return {
    products
  }
}

export async function getProductsByCategory(category: string, searchParam?: string): Promise<{products: IProduct[]}> {
  let query = ''

  if (searchParam) {
    query = `name=${searchParam}`
  }

  const {products} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/category/${category}?${query}`)
    .then(response => response.json())
    .catch(error => console.log(error))

  return {
    products
  }
}

export async function getProductBySlug(slug: string): Promise<{product: IProduct}> {
  const {product} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/slug/${slug}`)
    .then(response => response.json())
    .catch(error => console.log(error))

  return {
    product
  }
}
