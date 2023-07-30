import Image from 'next/image'
import logo from '@/../public/assets/svg/logo-semiV-color.svg'
import { CustomLink } from '../CustomLink'
import { HeaderBasket } from '../HeaderBasket'
import Link from 'next/link'

export function Header() {
  return (
    <menu
      className="backdrop-blur-md bg-white/60  fixed top-0 right-0 left-0 z-10 border-b border-green-100 w-full"
    >
      <div className='max-w-7xl flex justify-between items-center px-6 sm:px-28 py-8 mx-auto'>
        <Link href='/'>
          <Image src={logo} alt='logo Verde Vida' className='w-24 sm:w-full' />
        </Link>

        <nav className='hidden sm:flex gap-4'>
          <CustomLink text='Minha Cestinha' href='/cestinha' />
        </nav>

        <HeaderBasket />
      </div>
    </menu>
  )
}
