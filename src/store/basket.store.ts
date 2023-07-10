import { create } from 'zustand'
import { IBasketItem } from '@/dataTypes/basket.dto'

const dummyProductList = [
  {
    id: '1',
    name: 'vital drops 1',
    price: 20,
    amount: 1
  },
  {
    id: '2',
    name: 'vital drops 2',
    price: 20.5,
    amount: 1
  },
  {
    id: '3',
    name: 'vital drops 3',
    price: 10,
    amount: 1
  },
]

interface BasketProps {
  basketContent: IBasketItem[] | null
  basketTotal: number

  setTotal: () => void
  increaseAmount: (id: string) => void
  decreaseAmount: (id: string) => void
}

const initialState = {
  basketContent: dummyProductList,
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
}))
