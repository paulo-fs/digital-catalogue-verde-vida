import { Button, CustomLink } from '@/components'
import Image from 'next/image'
import backIcon from '../../assets/svg/back-green.svg'
import { AddedProduct } from './AddedProduct'

export default function Cestinha() {
  return (
    <div className="mt-36 px-56 max-w-7xl mx-auto relative">
      <div className='flex gap-2 items-center absolute top-4 left-28'>
        <Image src={backIcon} alt='ícone de uma seta para a esquerda' />
        <CustomLink href='/' text='Voltar' />
      </div>

      <h1 className='text-center font-title font-bold text-h2'>
        Minha cestinha
      </h1>

      <div className='flex flex-col gap-2 max-w-xl items-center justify-center mx-auto mt-10'>
        <AddedProduct />
        <AddedProduct />
        <AddedProduct />
      </div>

      <div className='flex gap-8 items-center justify-end mt-14'>
        <div>
          <span className='text-b3 text-gray-700 mr-3'>Subtotal:</span>
          <span className='font-title text-b1 text-green-500'>R$39,90</span>
        </div>
        <Button text='Enviar pedido' />
      </div>
    </div>
  )
}
