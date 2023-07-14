import { model, models, Schema } from 'mongoose'

export interface ICategory {
  name: string
  icon: string
  slug: string
}

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
