import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params

  try {
    const product = await prisma.product.findFirst({where: {slug}, include: {category: true}})
    return NextResponse.json({ product })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
