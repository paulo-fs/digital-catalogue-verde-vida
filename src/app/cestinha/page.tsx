'use client'
import Image from 'next/image'
import { useEffect } from 'react'

import { Button, CustomLink, AddedProduct } from '@/components'
import { formatPrice } from '@/helpers/formatPrice'
import { basketStore } from '@/store/basket.store'

import backIcon from 'public/assets/svg/back-green.svg'

export default function Cestinha() {
  const { basketContent, basketTotal, setTotal, increaseAmount, decreaseAmount, removeItem } = basketStore()

  const isDisabled = !basketContent

  useEffect(() => {
    setTotal()
  }, [setTotal, basketContent, basketTotal])

  return (
    <div className="mt-36 max-w-7xl mx-auto relative">
      <div className='flex gap-2 items-center absolute top-4'>
        <Image src={backIcon} alt='ícone de uma seta para a esquerda' />
        <CustomLink href='/produtos' text='Voltar' />
      </div>

      <h1 className='text-center font-title font-bold text-h3'>
        Minha cestinha
      </h1>

<<<<<<< HEAD
      <div className='flex flex-col max-w-2xl mx-auto'>
        <div className='flex flex-col w-full gap-2 mx-auto mt-10'>
          {(!basketContent || basketContent.length === 0) && (
            <span className='h-44 flex items-center text-gray-700 text-h4'>
              Sua cestinha está vazia =[
            </span>
          )}
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

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center justify-end mt-6 sm:mt-14'>
          <div>
            <span className='text-b3 text-gray-700 mr-3'>Total:</span>
            <span className='font-title text-b1 text-green-500'>R${formatPrice(basketTotal)}</span>
          </div>
          <Button text='Enviar pedido' disabled={isDisabled} />
=======
      <div className='flex flex-col gap-2 max-w-xl items-center justify-center mx-auto mt-10'>
        {(!basketContent || basketContent.length === 0) && (
          <div className='h-44 flex items-center text-gray-700 text-h4'>
            Sua cestinha está vazia =[
          </div>
        )}
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
>>>>>>> 135210a917b268a559768f1dc149f7e7412a6e7c
        </div>
      </div>
    </div>
  )
}
