import database from '@/lib/database'
import { productModel } from '@/models/product'
import { NextResponse, NextRequest } from 'next/server'
import url from 'url'

database.connect()

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params
  const queryParams = url.parse(req.url, true).query
  const { name } = queryParams

  try {
    const products = await productModel.find().populate('category').exec()
    let filteredProducts = products.filter((product: any) => product.category.slug === slug)
    if (name) filteredProducts = products.filter((product: any) => product.name.toLowerCase().includes(name))
    return NextResponse.json({ products: filteredProducts })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
