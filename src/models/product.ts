import { IProduct } from '@/dataTypes/product.dto'
import { model, Schema } from 'mongoose'
import CategoryModal from './category'

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  imageType: {
    type: String,
    require: true
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

CategoryModal

const ProductModel = model<IProduct>('Product', ProductSchema)
export default ProductModel
