import { Header, TogleInputs } from '@/components'
import { getAllCategories } from '@/services/requests'
import { ReactNode } from 'react'

interface ProductsLayoutProps {
  children: ReactNode
}

export default async function ProductsLayout({children}: ProductsLayoutProps) {
  const { categories } = await getAllCategories()

  return (
    <>
      <Header />
      <div className="mt-10 sm:mt-36 px-6 md:px-12 text-center">
        <div className='hidden sm:block'>
          <TogleInputs
            categories={categories}
          />
        </div>

        <div className='mt-14 inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
          {children}
        </div>
      </div>
    </>
  )
}
