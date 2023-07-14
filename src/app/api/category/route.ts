import { Slug } from '@/helper/slugNormalizer'
import database from '@/lib/database'
import Category from '@/models/category'
import { NextResponse, NextRequest } from 'next/server'

database.connect()

export async function GET() {
  try {
    const categories = await Category.find()
    return NextResponse.json(categories)
  } catch (err) {
    return NextResponse.json({message: 'error'})
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  try {
    const found = await Category.find({ name: body.name })
    if (found.length !== 0) return NextResponse.json({ error: 'This category already exists, select other name' })
  } catch (err) {
    return NextResponse.json({ error: 'unknow error' })
  }

  const newSlug = Slug.createFromText(body.name).value

  try {
    await Category.create({
      name: body.name,
      icon: body.icon,
      slug: newSlug
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.log(err)
    return NextResponse.json({error: 'Erron saving the category.'}, { status: 400 })
  }
}
