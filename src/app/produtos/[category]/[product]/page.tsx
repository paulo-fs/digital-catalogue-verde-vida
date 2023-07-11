import Image from 'next/image'
import { Button, CustomLink } from '@/components'
import backIcon from '/assets/svg/back-green.svg'
import productPhoto from '/assets/images/product-photo.png'

interface ProductPageProps {
  params: {
    product: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { product } = params

  return (
    <div className="mt-36 px-28 max-w-7xl mx-auto">
      <div className='flex gap-2 items-center'>
        <Image src={backIcon} alt='ícone de uma seta para a esquerda' />
        <CustomLink href='/' text='Voltar' />
      </div>

      <main className='mt-8 flex justify-between gap-24'>
        <div className='max-w-2xl flex flex-col gap-6 flex-1'>
          <div>
            <h1 className='font-title font-bold text-h2'>
            Vital Drops VC-IP
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
          R$39,90
          </span>

          <div>
            <Button text='Adicionar à sacolinha' />
          </div>
        </div>

        <Image src={productPhoto} alt='foto de um produto'
          className='h-fit max-w-md flex-1'
        />
      </main>
    </div>
  )
}
