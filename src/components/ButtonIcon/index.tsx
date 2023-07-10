'use client'
import iconSearch from '../../assets/svg/Search.svg'
import iconCategory from '../../assets/svg/Menu-left.svg'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: 'busca' | 'categoria'
  isActive?: boolean
}

export function ButtonIcon({ icon = 'busca', isActive = false, ...props }: ButtonIconProps) {
  const iconSelect = {
    'busca': iconSearch,
    'categoria': iconCategory
  } as const

  return (
    <button
      {...props}
      type='button'
      className={`
        rounded-full hover:bg-green-500 transition p-4
        ${isActive ? 'bg-green-500' : 'bg-green-300'}
      `}
    >
      <Image src={iconSelect[icon]} alt={`botão com um ícone de ${icon}`} />
    </button>
  )
}
