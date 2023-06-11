import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../Button'
import product from '../../assets/images/product-photo.png'

interface ProductCardProps {
  linkUrl?: string
}

export function ProductCard({ linkUrl = '/products' }: ProductCardProps) {
  return (
    <div
      className='h-auto border-2 border-white hover:border-gray-200 transition rounded p-4'
    >
      <Link href={linkUrl} className='flex'>
        <Image className='h-full w-auto' src={product} alt='foto de um produto Verde Vida' />
      </Link>

      <div className='flex flex-col gap-2 justify-center'>
        <h4 className='text-gray-800'>Nome do produto</h4>

        <div className='flex transition items-center justify-center gap-6'>
          <span className='text-green-500 text-b3'>R$30,00</span>
          <Button
            text="Adicionar"
            type='button'
            small
          />
        </div>
      </div>

    </div>
  )
}
