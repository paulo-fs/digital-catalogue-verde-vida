'use cliente'
import Image from 'next/image'
import trash from 'public/assets/svg/trash.svg'
import { RoundedButton } from './RoundedButton'
import { formatPrice } from '@/helpers/formatPrice'
import { IBasketItem } from '@/dataTypes/basket.dto'

interface AddedProductProps {
  productData: IBasketItem
  increaseAmount: (id: string) => void
  decreaseAmount: (id: string) => void
  removeItem: (id: string) => void
}

export function AddedProduct({productData, increaseAmount, decreaseAmount, removeItem}: AddedProductProps) {

  return (
    <div
      className="w-full h-fit flex items-center justify-between gap-3 sm:gap-6 text-gray-800"
    >
      <div className="w-full h-full bg-gray-100 rounded px-3 sm:px-8 py-3 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between">
        <span className='text-b2 capitalize'>
          {productData.name}
        </span>

        <div className='flex flex-wrap items-center gap-4 sm:gap-6'>
          <span>
            R${formatPrice(productData.price)}
          </span>
          <div className='flex items-center gap-3'>
            <span className='text-gray-700'>x</span>
            <div className='flex items-center gap-3'>
              <span>{productData.amount}</span>
              <div className='flex sm:flex-col gap-1'>
                <RoundedButton text='+' onClick={() => increaseAmount(productData.id)} />
                <RoundedButton text='-' onClick={() => decreaseAmount(productData.id)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className='grid place-content-center p-4 hover:bg-gray-100 transition rounded-full'
        onClick={() => removeItem(productData.id)}
      >
        <Image src={trash} alt='ícone de uma lata de lixo' />
      </button>
    </div>
  )
}
