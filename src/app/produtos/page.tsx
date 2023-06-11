import { ButtonIcon, ProductCard, SearchInput } from '@/components'

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
