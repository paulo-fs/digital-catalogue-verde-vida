import database from '@/lib/database'
import { productModel } from '@/models/product'
import { NextResponse, NextRequest } from 'next/server'

database.connect()

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params

  try {
    const products = await productModel.find().populate('category').exec()
    const filteredProducts = products.filter((product: any) => product.category.slug === slug)
    return NextResponse.json({ products: filteredProducts })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
