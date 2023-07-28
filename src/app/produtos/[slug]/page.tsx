import { ProductCard } from '@/components'
import { getProductsByCategory } from '@/services/requests'

interface CategoryPageProps {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | undefined }
}

export default async function CategoryProducts({ params, searchParams }: CategoryPageProps) {
  const { slug } = params
  const { products } = await getProductsByCategory(slug, searchParams?.name)

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
