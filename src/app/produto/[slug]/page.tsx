import Image from 'next/image'
import { Button, CustomLink } from '@/components'
import backIcon from 'public/assets/svg/back-green.svg'
import { getProductBySlug } from '@/services/requests'
import { formatPrice } from '@/helpers/formatPrice'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const {product} = await getProductBySlug(slug)

  return (
    <div className="mt-36 px-28 max-w-7xl mx-auto">
      <div className='flex gap-2 items-center'>
        <Image src={backIcon} alt='ícone de uma seta para a esquerda' />
        <CustomLink href='/' text='Voltar' />
      </div>

      <main className='mt-8 flex justify-between gap-24'>
        <div className='max-w-2xl flex flex-col gap-6 flex-1'>
          <div>
            <h1 className='font-title font-bold text-h2 capitalize'>
              {product.name}
            </h1>
            <p className='text-b3 text-green-500'>Linha NOME DA LINHA DO PRODUTO</p>
          </div>

          <p className='font-body text-b2 text-gray-800'>
        Lorem ipsum dolor sit amet consectetur. Ut diam maecenas euismod curabitur nec in justo nibh. Tellus dictumst ut netus sed.
          </p>

          <h2 className='font-title font-bold text-h4'>
          Lorem ipsum
          </h2>

          <p className='font-body text-b2 text-gray-800'>
        Lorem ipsum dolor sit amet consectetur. Ut diam maecenas euismod curabitur nec in justo nibh. Tellus dictumst ut netus sed.
          </p>

          <span className='font-title text-b1 text-green-500'>
          R${formatPrice(product.price)}
          </span>

          <div>
            <Button text='Adicionar à sacolinha' />
          </div>
        </div>

        <Image className='h-fit max-w-md flex-1' src={product.image} width={1000} height={1000} alt={`foto do produto ${product.name}`} />
      </main>
    </div>
  )
}
