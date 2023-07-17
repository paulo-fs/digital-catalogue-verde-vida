'use client'
import { togleSearchSelectInputsStore } from '@/store/togleSeachSelectInputs.store'
import { ButtonIcon } from './ButtonIcon'
import { SelectInput } from './SelectInput'
import { SelectedInput } from '@/dataTypes/searchSelect.dto'
import { SearchInput } from './SearchInput'
import { ICategory } from '@/dataTypes/category.dto'

interface TogleInputProps {
  categories: ICategory[]
}

export function TogleInputs({ categories }: TogleInputProps) {
  const {activeInput, changeActiveInput} = togleSearchSelectInputsStore()

  return (
    <div className='flex items-center justify-center gap-4'>
      {activeInput === SelectedInput.SEARCH && (
        <SearchInput
          icon='search'
          type='search'
          placeholder='Digite o nome do produto'
        />
      )}

      {activeInput === SelectedInput.SELECT && (
        <SelectInput
          icon='select'
          categories={categories}
        />
      )}
      <ButtonIcon
        icon='categoria'
        isActive={activeInput === SelectedInput.SELECT}
        onClick={() => changeActiveInput(SelectedInput.SELECT)}
      />
      <ButtonIcon
        icon='busca'
        isActive={activeInput === SelectedInput.SEARCH}
        onClick={() => changeActiveInput(SelectedInput.SEARCH)}
      />
    </div>
  )
}
