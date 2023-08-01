import { Header } from '@/components'
import { ReactNode } from 'react'

interface BasketLayoutProps {
  children: ReactNode
}

export default async function BasketLayout({children}: BasketLayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-36 px-6 md:px-12">
        {children}
      </div>
    </>
  )
}
