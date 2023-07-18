import database from '@/lib/database'
import mongoose from 'mongoose'
import { NextResponse, NextRequest } from 'next/server'

database.connect()

export async function GET() {
  try {
    const products = await mongoose.model('Product').find().populate('category').exec()
    return NextResponse.json({products})
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error in getting products' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const acceptedTypes = ['image/jpg', 'image/jpeg', 'image/png']
  const maxSize = 5 * 1024 * 1024

  const name = formData.get('name') as string | null
  const price = formData.get('price') as number | null
  const category = formData.get('category') as string | null
  const image = formData.get('image') as Blob | null

  if(!image || !name || !price || !category) {
    return NextResponse.json({ error: 'Name, price, category and image as required' }, { status: 400 })
  }

  if (acceptedTypes.indexOf(image.type) === -1) {
    return NextResponse.json({ error: 'The image need to be jpg, jpeg or png.'}, {status: 400})
  }

  if (image.size > maxSize) {
    return NextResponse.json({ error: 'Max image size alowed is 5mb'}, {status: 400})
  }

  try {
    const found = await mongoose.model('Product').find({ name: name })
    if (found.length !== 0) return NextResponse.json({ error: 'Product already exists' }, { status: 400 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  try {
    const buffer = Buffer.from(await image.arrayBuffer())
    const base64 = buffer.toString('base64url')

    const newProduct = await mongoose.model('Product').create({
      name: name,
      price: price,
      image: base64,
      imageType: image.type,
      category: category,
    })
    return NextResponse.json({ product: newProduct })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Could not create the new product' }, { status: 400 })
  }
}
