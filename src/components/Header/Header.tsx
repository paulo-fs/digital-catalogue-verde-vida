import Image from 'next/image'
import logo from '@/../public/assets/svg/logo-semiV-color.svg'
import { CustomLink } from '../CustomLink'
import { HeaderBasket } from '../HeaderBasket'
import Link from 'next/link'

export function Header() {
  return (
    <menu
      className="backdrop-blur-md bg-white/60 flex justify-between items-center px-28 py-8 fixed top-0 right-0 left-0 z-10 border-b border-green-100 max-w-7xl mx-auto"
    >
      <Link href='/'>
        <Image src={logo} alt='logo Verde Vida' />
      </Link>

      <nav className='flex gap-5'>
        <CustomLink text='Minha Cestinha' href='/cestinha' />
      </nav>

      <HeaderBasket />
    </menu>
  )
}
