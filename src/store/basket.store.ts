import { create } from 'zustand'
import { IBasketItem } from '@/dataTypes/basket.dto'

interface BasketProps {
  basketContent: IBasketItem[] | null
  basketTotal: number

  setTotal: () => void
  increaseAmount: (id: string) => void
  decreaseAmount: (id: string) => void

  removeItem: (id: string) => void
  addItem: (data: IBasketItem) => void
}

const initialState = {
  basketContent: null,
  basketTotal: 0
}

export const basketStore = create<BasketProps>((set, get) => ({
  ...initialState,

  setTotal: () => {
    const { basketContent } = get()
    const result = basketContent?.reduce((total, curItem) => (
      total + (curItem.price * curItem.amount)
    ), 0)
    set({ basketTotal: result })
  },

  increaseAmount: (id) => {
    const { basketContent, setTotal } = get()

    set({
      basketContent: basketContent?.map((item) => {
        if (item.id === id) {
          return {...item, amount: item.amount + 1}
        }
        return item
      })
    })
    setTotal()
  },

  decreaseAmount: (id) => {
    const { basketContent, setTotal } = get()

    set({
      basketContent: basketContent?.map((item) => {
        if (item.id === id) {
          const resultAmount = item.amount > 1 ? item.amount - 1 : item.amount
          return {...item, amount: resultAmount}
        }
        return item
      })
    })
    setTotal()
  },

  removeItem: (id) => {
    const { basketContent, setTotal } = get()
    set({
      basketContent: basketContent?.filter(item => item.id !== id)
    })
    setTotal()
  },

  addItem: (data) => {
    const { basketContent, increaseAmount, setTotal } = get()

    if (!basketContent) return set({ basketContent: [data] })

    const existsInStore = basketContent?.find(item => item.id === data.id)
    if (existsInStore) return increaseAmount(existsInStore.id)

    set({
      basketContent: [...basketContent, data]
    })
    setTotal()
  }
}))
