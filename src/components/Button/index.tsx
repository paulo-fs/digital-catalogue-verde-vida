import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   text: string
   variant?: 'primary' | 'secondary'
}

const primary = 'px-12 py-4 bg-green-500 hover:bg-green-700 disabled:bg-gray-200 transition text-white font-bold font-body text-b2 rounded'

const secondary = 'px-12 py-4 border-2 border-green-500 hover:bg-green-300 disabled:bg-gray-200 transition text-green-500 font-bold font-body text-b2 rounded'

export function Button({ text, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button {...props} className={variant === 'primary' ? primary : secondary}>
      {text}
    </button>
  )
}