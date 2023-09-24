import { Slug } from '@/helper/slugNormalizer'
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { z } from 'zod'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const { id } = params

  const updateCategorySchema = z.object({
    name: z.string().max(50).optional(),
    icon: z.string().max(50).optional(),
  })

  try {
    updateCategorySchema.parse(body)
  } catch (err) {
    return NextResponse.json(err, {status: 400})
  }

  try {
    const category = await prisma.category.findUnique({where: {id}})
    const newSlug = body.name ? Slug.createFromText(body.name).value : null

    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 })

    category.name = body.name || category.name
    category.icon = body.icon || category.icon
    category.slug = newSlug || (category.slug)

    const updatedCategory = await prisma.category.update({where: {id: category.id}, data: category})

    return NextResponse.json({category: updatedCategory})
  } catch (err) {
    return NextResponse.json({ error: 'Could not update the category'})
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await prisma.category.delete({where: {id}})
    return NextResponse.json({ message: 'Category deleted successfully' })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Category not found' }, { status: 404 })
  }
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    const category = await prisma.category.findUnique({where: {id}})
    return NextResponse.json({category})
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Category not found' }, { status: 404 })
  }
}
