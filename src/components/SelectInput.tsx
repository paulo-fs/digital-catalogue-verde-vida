'use client'
import Image from 'next/image'
import * as DropDown from '@radix-ui/react-dropdown-menu'
import { CategoryIcon } from '@/components'

import arrowDown from '@/../public/assets/svg/arrowDown.svg'
import { ICategory } from '@/dataTypes/category.dto'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface InputProps {
  icon?: 'select' | null
  categories?: ICategory[]
}

export function SelectInput({ icon, categories }: InputProps) {
  const iconSelect = {
    'select': arrowDown
  }

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const router = useRouter()

  function handleSelectCategory(category: string, slug: string | null) {
    setSelectedCategory(category)
    if (!slug) return router.push('/produtos')
    router.push(`/produtos/categoria/${slug}`)
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
            {selectedCategory ? selectedCategory : 'Selecione uma categoria'}
            {/* Selecione uma categoria */}
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
              {categories && categories.map((category) => {
                return (
                  <DropDown.Item
                    key={category._id}
                    className='p-4 hover:bg-green-300 cursor-pointer flex items-center gap-8'
                    onClick={() => handleSelectCategory(category.name, category.slug)}
                  >
                    <div className='h-6'>
                      <CategoryIcon iconName={category.icon}
                        className='h-8 w-8'
                      />
                    </div>
                    {category.name}
                  </DropDown.Item>
                )
              })}
              <DropDown.Item
                className='p-4 hover:bg-green-300 cursor-pointer'
                onClick={() => handleSelectCategory('Todas categorias', null)}
              >
                Todas categorias
              </DropDown.Item>

            </DropDown.Group>
          </DropDown.Content>
        </DropDown.Portal>

      </DropDown.Root>

    </label>
  )
}
