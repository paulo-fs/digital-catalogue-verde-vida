import { ICategory } from '@/dataTypes/category.dto'
import { CategoryCard } from './CategoryCard'
import { getAllCategories } from '@/services/requests'

export async function HomeCategories() {
  const { categories } = await getAllCategories()

  return (
    <section id='categories' className="text-center w-full">
      <div>
        <h3 className="font-title font-bold text-h3 sm:text-h2">
               Categorias
        </h3>
        <p className="text-gray-700">
               Selecione a categoria e navegue pelos produtos
        </p>
      </div>

      <div className="w-full inline-grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {categories && categories.map((category: ICategory) => {
          return (
            <CategoryCard
              key={category._id}
              href={`/produtos/${category.slug}`}
              title={category.name}
              icon={category.icon}
            />
          )
        })}
      </div>
    </section>
  )
}
