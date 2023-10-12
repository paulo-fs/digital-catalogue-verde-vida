import Image from 'next/image'
import logo from '@/../public/assets/svg/logo-semiV-color.svg'
import logomini from '@/../public/assets/svg/logo_mini.svg'
import menuHamburguer from '@/../public/assets/svg/menu-hamburguer.svg'
import { CustomLink } from '../CustomLink'
import { HeaderBasket } from '../HeaderBasket'
import Link from 'next/link'

export function Header() {
  return (
    <menu
      className="backdrop-blur-md bg-white/60  fixed top-0 right-0 left-0 z-10 border-b border-green-100 w-full"
    >
      <div className='max-w-7xl flex justify-between items-center px-6 md:px-12 py-5 sm:py-8 mx-auto'>
        <Link href='/'>
          <Image src={logo} alt='logo Verde Vida' className='hidden sm:block' />
          <Image src={logomini} alt='logo Verde Vida' className=' sm:hidden' />
        </Link>

        <nav className='hidden sm:flex gap-4'>
          <CustomLink text='Minha Cestinha' href='/cestinha' />
        </nav>

        <HeaderBasket />

        <button className='sm:hidden'>
          <Image src={menuHamburguer} alt="Menu hamburguer" className='h-4' />
        </button>
      </div>
    </menu>
  )
}
