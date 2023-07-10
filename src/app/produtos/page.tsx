import { ButtonIcon, ProductCard, SearchInput } from '@/components'
import { fakeProductList } from '@/store/fakeData'

export default function Products() {
  return (
    <div className="mt-36 px-28 text-center">
      <div className='flex items-center justify-center gap-4'>
        <SearchInput
          icon='search'
          type='search'
          placeholder='Digite o nome do produto'
        />
        <ButtonIcon icon='categoria' />
        <ButtonIcon isActive />
      </div>

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
      </div>
    </div>
  )
}
