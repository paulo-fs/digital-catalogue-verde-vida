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
  const { addItem, setTotal } = basketStore()

  const data: IBasketItem = {
    id: productData._id,
    name: productData.name,
    amount: 1,
    price: productData.price,
  }

  function handleAddItemToBasket() {
    addItem(data)
    setTotal()
  }

  return (
    <div
      className='h-auto border-2 border-white hover:border-gray-200 transition rounded p-0 sm:p-4 flex sm:flex-col items-center gap-2 sm:gap-4'
    >
      <Link href={`/detalhes/${productData.slug}`} className='flex w-5/12 h-max sm:w-auto'>
        <Image className='h-full w-auto' src={productData.image} width={1000} height={1000} alt={`foto do produto ${productData.name}`} />
      </Link>

      <div className='w-7/12 sm:w-full text-left sm:text-center flex flex-col gap-2 justify-center'>
        <h4 className='text-gray-800 capitalize text-b2 sm:text-b3'>
          {productData.name}
        </h4>

        <div className='flex flex-row-reverse flex-wrap sm:flex-col lg:flex-row transition items-center justify-end sm:justify-center gap-2 lg:gap-6'>
          <span className='text-green-500 text-b2 sm:text-b3'>
            R${formatPrice(productData.price)}
          </span>
          <Button
            text="Adicionar"
            type='button'
            onClick={handleAddItemToBasket}
            small
          />
        </div>
      </div>

    </div>
  )
}
