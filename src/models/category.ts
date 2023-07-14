import { ICategory } from '@/dataTypes/category.dto'
import { model, models, Schema } from 'mongoose'

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

const CategoryModel = () => model<ICategory>('Category', CategorySchema)

export default (models.Category || CategoryModel()) as ReturnType<typeof CategoryModel>
