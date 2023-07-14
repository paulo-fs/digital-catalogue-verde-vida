import { ICategory } from '@/dataTypes/category.dto'
import { CategoryCard } from './CategoryCard'

export async function HomeCategories() {
  const requestData = await fetch('http://localhost:3000/api/category')
    .then(response => response.json())
    .catch(error => console.log(error))

  const { categories } = requestData

  return (
    <section id='categories' className="text-center">
      <div>
        <h3 className="font-title font-bold text-h2">
               Categorias
        </h3>
        <p className="text-gray-700">
               Selecione a categoria e navegue pelos produtos
        </p>
      </div>

      <div className="inline-grid grid-cols-4 gap-8">
        {categories && categories.map((category: ICategory) => {
          return (
            <CategoryCard
              key={category._id}
              href={`/category/${category.slug}`}
              title={category.name}
              icon={category.icon}
            />
          )
        })}
      </div>
    </section>
  )
}
