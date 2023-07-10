import { create } from 'zustand'
import { SelectedInput } from '@/dataTypes/searchSelect.dto'

interface TogleSearchSelectInputsProps {
  activeInput: SelectedInput

  changeActiveInput: (input: SelectedInput) => void
}

const initialState = {
  activeInput: SelectedInput.SEARCH
}

export const togleSearchSelectInputsStore = create<TogleSearchSelectInputsProps>((set, get) => ({
  ...initialState,

  changeActiveInput: (input) => {
    set({ activeInput: input })
  }
}))
