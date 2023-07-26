import database from '@/lib/database'
import mongoose from 'mongoose'
import { NextResponse, NextRequest } from 'next/server'

database.connect()

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params

  try {
    const product = await mongoose.model('Product').find({slug: slug}).populate('category').exec()
    return NextResponse.json({ product })
  } catch (err) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
