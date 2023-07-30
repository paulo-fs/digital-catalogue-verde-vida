import { Header } from '@/components'
import { ReactNode } from 'react'

interface ProductDetailLayoutProps {
  children: ReactNode
}

export default async function ProductDetailLayout({children}: ProductDetailLayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-36">
        {children}
      </div>
    </>
  )
}
