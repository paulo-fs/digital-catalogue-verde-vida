import { Schema } from 'mongoose'

export interface IProduct {
  _id: string
  name: string
  price: number
  image: string
  category: Schema.Types.ObjectId
  available: boolean
}
