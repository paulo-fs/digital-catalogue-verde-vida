import { IProduct } from '@/dataTypes/product.dto'
import mongoose, { Schema } from 'mongoose'
import { categoryModel } from './category'

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  }
})

categoryModel

const ProductModel = () => mongoose.model<IProduct>('Product', ProductSchema)

export const productModel = (mongoose.models.Product || ProductModel()) as ReturnType<typeof ProductModel>
