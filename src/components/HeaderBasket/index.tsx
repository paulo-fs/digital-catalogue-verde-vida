'use client'
import Image from 'next/image'
import smallBagIcon from '../../assets/svg/smallBagIcon.svg'
import { basketStore } from '@/store/basket.store'
import { formatPrice } from '@/helpers/formatPrice'
import { useEffect } from 'react'

export function HeaderBasket() {
  const { basketTotal, setTotal } = basketStore()

  useEffect(() => {
    setTotal()
  }, [setTotal])

  return (
    <div className='flex gap-4 items-center'>
      <span className='font-body text-b2 text-green-500'>R${formatPrice(basketTotal)}</span>
      <Image src={smallBagIcon} alt='ícone de uma sacola de compras' />
    </div>
  )
}
