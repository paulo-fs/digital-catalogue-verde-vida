import { ICategory } from '@/dataTypes/category.dto'
import { model, Schema } from 'mongoose'

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
})

const CategoryModal = model('Category', CategorySchema)
export default CategoryModal
