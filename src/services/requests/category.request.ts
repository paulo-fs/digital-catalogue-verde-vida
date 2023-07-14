import { ICategory } from '@/dataTypes/category.dto'

export async function getAllCategories(): Promise<{categories: ICategory[]}> {
  const {categories} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
    .then(response => response.json())
    .catch(error => console.log(error))


  return {
    categories
  }
}
