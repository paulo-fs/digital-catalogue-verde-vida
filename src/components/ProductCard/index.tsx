'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../Button'
import { IProduct } from '@/dataTypes/product.dto'
import { formatPrice } from '@/helpers/formatPrice'
import { basketStore } from '@/store/basket.store'
import { IBasketItem } from '@/dataTypes/basket.dto'

interface ProductCardProps {
  productData: IProduct
}

export function ProductCard({ productData }: ProductCardProps) {
  const { addItem } = basketStore()

  const data: IBasketItem = {
    id: productData._id,
    name: productData.name,
    amount: 1,
    price: productData.price,
  }

  return (
    <div
      className='h-auto border-2 border-white hover:border-gray-200 transition rounded p-4'
    >
      <Link href={`/produtos/${productData.slug}`} className='flex'>
        <Image className='h-full w-auto' src={productData.image} width={1000} height={1000} alt={`foto do produto ${productData.name}`} />
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
