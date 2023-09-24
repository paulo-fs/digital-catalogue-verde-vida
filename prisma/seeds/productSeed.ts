import {Product} from '@prisma/client'
import { randomUUID } from 'node:crypto'

export const productSeedData: Product[] = [
  {
    id: randomUUID(),
    name: 'serum niacinamida',
    slug: 'serum-niacinamida',
    image: '/uploads/products/serum-niacinamida-1690334424820-978467559.png',
    price: 100,
    available: true,
    category_id: 'b425e178-fe13-4823-b073-719569522d24',
  },
  {
    id: randomUUID(),
    name: 'espuma amisoft',
    slug: 'espuma-amisoft',
    image: '/uploads/products/espuma-limpeza-amisoft-1690486019568-577286382.png',
    price: 100,
    available: true,
    category_id: 'b425e178-fe13-4823-b073-719569522d24',
  },
]
