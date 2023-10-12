import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import url from 'url'

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params
  const queryParams = url.parse(req.url, true).query
  const { name } = queryParams

  try {
    const foundProducts = name ? await prisma.product.findMany({where: {name: name as string, category: {slug}}, include: {category: true}}) : []
    return NextResponse.json({ products: foundProducts })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
