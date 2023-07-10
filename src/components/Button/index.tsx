'use client'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   text: string
   variant?: 'primary' | 'secondary'
   small?: boolean
}

export function Button({ text, small = false, variant = 'primary', ...props }: ButtonProps) {
  const baseStyle = 'font-bold font-body rounded transition'

  const defaultSize = 'px-12 py-4 text-b2'
  const smallSize = 'px-6 py-3 text-b3'

  const primary = 'bg-green-500 hover:bg-green-700 disabled:bg-gray-200 text-white'
  const secondary = 'border-2 border-green-500 hover:bg-green-300 disabled:bg-gray-200 text-green-500'

  return (
    <button {...props}
      className={`
        ${baseStyle}
        ${variant === 'primary' ? primary : secondary}
        ${small ? smallSize : defaultSize}
      `}
    >
      {text}
    </button>
  )
}
