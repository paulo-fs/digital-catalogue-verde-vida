import Image from 'next/image'
import smallBagIcon from '../../assets/svg/smallBagIcon.svg'

export function HeaderBasket() {
   return (
      <div className='flex gap-4 items-center'>
         <span className='font-body text-b2 text-green-500'>R$30,00</span>
         <Image src={smallBagIcon} alt='ícone de uma sacola de compras' />
      </div>
   )
}