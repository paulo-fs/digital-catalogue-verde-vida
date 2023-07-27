import { ProductCard } from '@/components'
import { getProductsByCategory } from '@/services/requests'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryProducts({ params }: CategoryPageProps) {
  const { slug } = params
  const { products } = await getProductsByCategory(slug)

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
