import { IProductDetail } from '@/dataTypes/productDetail.dto'
import { model, models, Schema } from 'mongoose'

const ProductDetailSchema = new Schema({
  title1: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: false,
  },
  description2: {
    type: String,
    required: false,
  },
  title3: {
    type: String,
    required: false,
  },
  description3: {
    type: String,
    required: false,
  },
})

const ProductDetailModel = () => model<IProductDetail>('ProductDetail', ProductDetailSchema)

export default (models.ProductDetail || ProductDetailModel()) as ReturnType<typeof ProductDetailModel>
