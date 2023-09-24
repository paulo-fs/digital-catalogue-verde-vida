import {PrismaClient} from '@prisma/client'
import { categorySeedData } from './seeds/categorySeed'

const prisma = new PrismaClient()

async function main() {
  const categories = await prisma.category.createMany({
    data: categorySeedData
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
