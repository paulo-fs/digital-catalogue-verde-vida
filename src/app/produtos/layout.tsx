import { TogleInputs } from '@/components'
import { getAllCategories } from '@/services/requests'
import { ReactNode } from 'react'

interface ProductsLayoutProps {
  children: ReactNode
}

export default async function ProductsLayout({children}: ProductsLayoutProps) {
  const { categories } = await getAllCategories()

  return (
    <div className="mt-36 px-28 text-center">
      <TogleInputs
        categories={categories}
      />

      <div className='mt-14 inline-grid grid-cols-4 gap-8'>
        {children}
      </div>
    </div>
  )
}
