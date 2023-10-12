import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    const product = await prisma.product.findUnique({where: {id}, include: {category: true}})
    return NextResponse.json({ product })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const formData = await req.formData()
  const acceptedTypes = ['image/jpg', 'image/jpeg', 'image/png']
  const maxSize = 5 * 1024 * 1024

  const name = formData.get('name') as string | null
  const price = formData.get('price') as number | null
  const category = formData.get('category') as string | null
  const image = formData.get('image') as Blob | null
  const imageType = image ? image.type : null

  if (image && acceptedTypes.indexOf(image.type) === -1) {
    return NextResponse.json({ error: 'The image need to be jpg, jpeg or png.'}, {status: 400})
  }

  if (image && image.size > maxSize) {
    return NextResponse.json({ error: 'Max image size alowed is 5mb'}, {status: 400})
  }

  if (category) {
    try {
      const found = await prisma.category.findUnique({where: { id: category }})
      if (!found) return NextResponse.json({ error: 'Category not found'}, { status: 404 })
    } catch (err) {
      console.log(err)
      return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
  }

  const updateData = {
    name,
    price,
    category,
    // TODO: implement image upload and delete the previous one.
    image: image ? Buffer.from(await image.arrayBuffer()).toString('base64url') : null,
    imageType
  }

  const cleanUpdateData = Object.fromEntries(
    Object.entries(updateData).filter(([_, value]) => value !== undefined && value !== null)
  )


  try {
    const product = await prisma.product.findUnique({ where: { id }})
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 })

    const updatedProduct = await productModel.findByIdAndUpdate(id, cleanUpdateData, {
      new: true,
      runValidators: true
    })

    return NextResponse.json({ product: updatedProduct })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error in update product' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await productModel.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
