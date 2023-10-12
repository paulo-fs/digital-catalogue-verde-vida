import { NextResponse, NextRequest } from 'next/server'
import mime from 'mime'
import { join } from 'path'
import { stat, mkdir, writeFile } from 'fs/promises'
import { Slug } from '@/helper/slugNormalizer'
import url from 'url'
import prisma from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const queryParams = url.parse(req.url, true).query
  const { name } = queryParams

  try {
    const productName = name?.toString()
    const products = await prisma.product.findFirst({where: {name: productName}, include: {category: true}})
    return NextResponse.json({products})
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error in getting products' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const acceptedTypes = ['image/jpg', 'image/jpeg', 'image/png']
  const maxSize = 3 * 1024 * 1024 // 3mb

  const name = formData.get('name') as string | null
  const price = formData.get('price') as number | null
  const category = formData.get('category') as string | null
  const image = formData.get('image') as Blob | null

  if(!image || !name || !price || !category) {
    return NextResponse.json({ error: 'Name, price, category and image as required' }, { status: 400 })
  }

  const productSlug = Slug.createFromText(name).value

  if (acceptedTypes.indexOf(image.type) === -1) {
    return NextResponse.json({ error: 'The image need to be jpg, jpeg or png.'}, {status: 400})
  }

  if (image.size > maxSize) {
    return NextResponse.json({ error: 'Max image size alowed is 5mb'}, {status: 400})
  }

  try {
    const found = await prisma.product.findFirst({ where: {name} })
    if (found) return NextResponse.json({ error: 'Product already exists' }, { status: 400 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  const buffer = Buffer.from(await image.arrayBuffer())
  const relativeUploadDir = '/uploads/products'
  const uploadDir = join(process.cwd(), 'public', relativeUploadDir)

  try {
    await stat(uploadDir)
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      await mkdir(uploadDir, { recursive: true })
    } else {
      console.error('Error white trying to create directory when uploading a file\n', err)
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    const filename = `${image.name.replace(/\.[^/.]+$/, '')}-${uniqueSuffix}.${mime.getExtension(image.type)}`
    await writeFile(`${uploadDir}/${filename}`, buffer)
    const fileUrl = `${relativeUploadDir}/${filename}`

    const newProduct = await prisma.product.create({data: {
      name: name,
      slug: productSlug,
      price: price,
      image: fileUrl,
      category_id: category,
    }})
    return NextResponse.json({ product: newProduct })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Could not create the new product' }, { status: 400 })
  }
}
