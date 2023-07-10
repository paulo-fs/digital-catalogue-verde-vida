import arrowDown from '../assets/svg/arrowDown.svg'
import Image from 'next/image'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: 'select' | null
}

export function SelectInput({ icon, ...props }: InputProps) {
  const iconSelect = {
    'select': arrowDown
  }

  return(
    <label
      className="h-14 w-full max-w-md px-8 rounded-full border-2 border-gray-200 flex items-center relative"
    >
      <input
        {...props}
        className="outline-0 border-0 w-full"
      />

      <button
        type='submit'
        className="absolute right-0 h-full bg-white hover:bg-green-300 transition rounded-r-full grid place-content-center px-6"
      >
        { icon && (
          <Image src={iconSelect[icon]} alt='ícone de uma seta para baixo' />
        )}
      </button>
    </label>
  )
}
