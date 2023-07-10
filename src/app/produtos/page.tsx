import { ProductCard, TogleInputs } from '@/components'
import { fakeProductList } from '@/store/fakeData'

export default function Products() {
  return (
    <div className="mt-36 px-28 text-center">
      <TogleInputs />

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
