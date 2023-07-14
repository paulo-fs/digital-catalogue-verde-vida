'use client'
import Image from 'next/image'
import { useEffect } from 'react'

import { Button, CustomLink } from '@/components'
import { AddedProduct } from './AddedProduct'
import { formatPrice } from '@/helpers/formatPrice'
import { basketStore } from '@/store/basket.store'

import backIcon from 'public/assets/svg/back-green.svg'

export default function Cestinha() {
  const { basketContent, basketTotal, setTotal, increaseAmount, decreaseAmount, removeItem } = basketStore()

  useEffect(() => {
    setTotal()
  }, [setTotal])

  return (
    <div className="mt-36 px-56 max-w-7xl mx-auto relative">
      <div className='flex gap-2 items-center absolute top-4 left-28'>
        <Image src={backIcon} alt='ícone de uma seta para a esquerda' />
        <CustomLink href='/produtos' text='Voltar' />
      </div>

      <h1 className='text-center font-title font-bold text-h3'>
        Minha cestinha
      </h1>

      <div className='flex flex-col gap-2 max-w-xl items-center justify-center mx-auto mt-10'>
        {basketContent && basketContent.map((product) => {
          return (
            <AddedProduct
              key={product.id}
              productData={product}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
              removeItem={removeItem}
            />
          )
        })}
      </div>

      <div className='flex gap-8 items-center justify-end mt-14'>
        <div>
          <span className='text-b3 text-gray-700 mr-3'>Total:</span>
          <span className='font-title text-b1 text-green-500'>R${formatPrice(basketTotal)}</span>
        </div>
        <Button text='Enviar pedido' />
      </div>
    </div>
  )
}
