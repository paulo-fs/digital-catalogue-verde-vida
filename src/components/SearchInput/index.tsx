import iconSearch from '../../assets/svg/Search.svg'
import Image from 'next/image'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: 'search' | null
}

export function SearchInput({ icon, ...props }: InputProps) {
  const iconSelect = {
    'search': iconSearch
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
        className="absolute right-0 h-full bg-green-300 hover:bg-green-500 transition rounded-r-full grid place-content-center px-6"
      >
        { icon && (
          <Image src={iconSelect[icon]} alt='ícone de pesquisa ou de menu' />
        )}
      </button>
    </label>
  )
}
