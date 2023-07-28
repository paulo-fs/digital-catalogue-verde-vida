'use client'
import Image from 'next/image'
import { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react'
import iconSearch from '@/../public/assets/svg/Search.svg'
import { useRouter } from 'next/navigation'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: 'search' | null
}

export function SearchInput({ icon, ...props }: InputProps) {
  const iconSelect = {
    'search': iconSearch
  }
  const searchRef = useRef(null)
  const [value, setValue] = useState('')
  const route = useRouter()

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function handleSearch() {
    route.push(`?name=${value}`)
  }

  function handleClearSearch() {
    setValue('')
    route.push('?')
  }

  return(
    <label
      className="h-14 w-full max-w-md px-8 rounded-full border-2 border-gray-200 flex items-center relative"
    >
      <input
        {...props}
        className="outline-0 border-0 w-full"
        ref={searchRef}
        onChange={handleInputChange}
        value={value}
      />

      <button
        type='submit'
        className="absolute right-20 bg-white hover:bg-gray-100 text-gray-700 transition rounded-full grid place-content-center w-10 h-10"
        onClick={handleClearSearch}
      >
        x
      </button>

      <button
        type='submit'
        className="absolute right-0 h-full bg-green-500 hover:bg-green-700 transition rounded-r-full grid place-content-center px-6"
        onClick={handleSearch}
      >
        { icon && (
          <Image src={iconSelect[icon]} alt='ícone de pesquisa ou de menu' />
        )}
      </button>
    </label>
  )
}
