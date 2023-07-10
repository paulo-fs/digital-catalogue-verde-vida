'use client'
import Image from 'next/image'
import * as DropDown from '@radix-ui/react-dropdown-menu'

import arrowDown from '../assets/svg/arrowDown.svg'

interface InputProps {
  icon?: 'select' | null
}

export function SelectInput({ icon }: InputProps) {
  const iconSelect = {
    'select': arrowDown
  }

  return(
    <label
      className="h-14 w-96 max-w-md px-2 rounded-full border-2 border-gray-200 flex items-center relative"
    >
      <DropDown.Root>
        <DropDown.Trigger asChild className='w-full'>
          <button
            className="h-full w-full px-6 flex items-center justify-between text-gray-700"
          >
            Selecione uma categoria
            { icon && (
              <Image src={iconSelect[icon]} alt='ícone de uma seta para baixo'
                className=''
              />
            )}
          </button>
        </DropDown.Trigger>

        <DropDown.Portal>
          <DropDown.Content
            align='center'
            sideOffset={5}
            className='bg-white max-w-md w-80 rounded-md border-2 border-gray-200 shadow-lg shadow-gray-100'
          >

            <DropDown.Group className='flex flex-col'>
              <DropDown.Item
                className='p-4 hover:bg-green-300 cursor-pointer'
              >
                Beleza
              </DropDown.Item>
              <DropDown.Item
                className='p-4 hover:bg-green-300 cursor-pointer'
              >
                Saúde
              </DropDown.Item>
              <DropDown.Item
                className='p-4 hover:bg-green-300 cursor-pointer'
              >
                Imunidade
              </DropDown.Item>
            </DropDown.Group>
          </DropDown.Content>
        </DropDown.Portal>

      </DropDown.Root>

    </label>
  )
}
