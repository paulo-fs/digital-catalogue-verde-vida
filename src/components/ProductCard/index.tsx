'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../Button'
import product from '../../assets/images/product-photo.png'
import { IProduct } from '@/dataTypes/product.dto'
import { formatPrice } from '@/helpers/formatPrice'
import { basketStore } from '@/store/basket.store'
import { IBasketItem } from '@/dataTypes/basket.dto'

interface ProductCardProps {
  linkUrl?: string
  productData: IProduct
}

export function ProductCard({ linkUrl = '/products', productData }: ProductCardProps) {
  const { addItem } = basketStore()

  const data: IBasketItem = {
    id: productData.id,
    name: productData.name,
    amount: 1,
    price: productData.price
  }

  return (
    <div
      className='h-auto border-2 border-white hover:border-gray-200 transition rounded p-4'
    >
      <Link href={linkUrl} className='flex'>
        <Image className='h-full w-auto' src={product} alt='foto de um produto Verde Vida' />
      </Link>

      <div className='flex flex-col gap-2 justify-center'>
        <h4 className='text-gray-800 capitalize'>
          {productData.name}
        </h4>

        <div className='flex transition items-center justify-center gap-6'>
          <span className='text-green-500 text-b3'>
            R${formatPrice(productData.price)}
          </span>
          <Button
            text="Adicionar"
            type='button'
            onClick={() => addItem(data)}
            small
          />
        </div>
      </div>

    </div>
  )
}
