'use client'
import { togleSearchSelectInputsStore } from '@/store/togleSeachSelectInputs.store'
import { ButtonIcon } from './ButtonIcon'
import { SelectInput } from './SelectInput'
import { SelectedInput } from '@/dataTypes/searchSelect.dto'
import { SearchInput } from './SearchInput'

export function TogleInputs() {
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
          type='search'
          placeholder='Selecione uma cagegoria'
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
