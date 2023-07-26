import { ICategory } from '@/dataTypes/category.dto'
import mongoose, { Schema } from 'mongoose'

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

const CategoryModel = () => mongoose.model<ICategory>('Category', CategorySchema)

export const categoryModel = (mongoose.models.Category || CategoryModel()) as ReturnType<typeof CategoryModel>
