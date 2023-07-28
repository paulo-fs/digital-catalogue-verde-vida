import { ProductCard } from '@/components'
import { getAllProducts } from '@/services/requests'

interface ProductsProps {
  searchParams?: { [key: string]: string | undefined }
}

export default async function Products({searchParams}: ProductsProps) {
  const { products } = await getAllProducts(searchParams?.name)

  return (
    <>
      {
        products && products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              productData={product}
            />
          )
        })
      }
    </>
  )
}
