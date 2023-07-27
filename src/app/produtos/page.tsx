import { ProductCard } from '@/components'
import { getAllProducts } from '@/services/requests'

export default async function Products() {
  const { products } = await getAllProducts()

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
