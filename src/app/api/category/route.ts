import { Slug } from '@/helper/slugNormalizer'
import database from '@/lib/database'
import { categoryModel } from '@/models/category'
import { NextResponse, NextRequest } from 'next/server'
import { z } from 'zod'

database.connect()

export async function GET() {
  try {
    const categories = await categoryModel.find()
    return NextResponse.json({categories})
  } catch (err) {
    return NextResponse.json({message: 'error'})
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  const registerCategorySchema = z.object({
    name: z.string().max(50),
    icon: z.string().max(50),
  })

  try {
    registerCategorySchema.parse(body)
  } catch (err) {
    return NextResponse.json(err, {status: 400})
  }

  try {
    const found = await categoryModel.find({ name: body.name })
    if (found.length !== 0) return NextResponse.json({ error: 'This category already exists, select other name' })
  } catch (err) {
    return NextResponse.json({ error: 'unknow error' })
  }

  const newSlug = Slug.createFromText(body.name).value

  try {
    await categoryModel.create({
      name: body.name,
      icon: body.icon,
      slug: newSlug
    })
    return NextResponse.json({ message: 'Category created successfully' })
  } catch (err) {
    console.log(err)
    return NextResponse.json({error: 'Erron saving the category.'}, { status: 400 })
  }
}
