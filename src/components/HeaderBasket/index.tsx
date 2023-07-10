'use client'
import Image from 'next/image'
import smallBagIcon from '../../assets/svg/smallBagIcon.svg'
import { basketStore } from '@/store/basket.store'
import { formatPrice } from '@/helpers/formatPrice'
import { useEffect } from 'react'
import Link from 'next/link'

export function HeaderBasket() {
  const { basketTotal, setTotal } = basketStore()

  useEffect(() => {
    setTotal()
  }, [setTotal])

  return (
    <Link href='/cestinha'>
      <div className='flex gap-4 items-center'>
        <span className='font-body text-b2 text-green-500'>R${formatPrice(basketTotal)}</span>
        <Image src={smallBagIcon} alt='ícone de uma sacola de compras' />
      </div>
    </Link>
  )
}
