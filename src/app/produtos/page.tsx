import { ProductCard, TogleInputs } from '@/components'
import { getAllCategories } from '@/services/requests'
import { fakeProductList } from '@/store/fakeData'

export default async function Products() {
  const { categories } = await getAllCategories()
  return (
    <div className="mt-36 px-28 text-center">
      <TogleInputs
        categories={categories}
      />

      <div className='mt-14 inline-grid grid-cols-4 gap-8'>
        {
          fakeProductList && fakeProductList.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productData={product}
              />
            )
          })
        }
      T</div>
    </div>
  )
}
