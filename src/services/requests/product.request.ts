import { IProduct } from '@/dataTypes/product.dto'

export async function getAllProducts(): Promise<{products: IProduct[]}> {
  const {products} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`)
    .then(response => response.json())
    .catch(error => console.log(error))

  return {
    products
  }
}

export async function getProductsByCategory(category: string): Promise<{products: IProduct[]}> {
  const {products} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/category/${category}`)
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
