import Image from 'next/image'
import { Hero, HomeCategories, HowItWorks } from '@/components'
import logo from 'public/assets/svg/logo-semiV-color.svg'

export default function Home() {
  return (
    <>
      <header
        className="backdrop-blur-md bg-white/60  fixed top-0 right-0 left-0 z-10 border-b border-green-100 w-full"
      >
        <Image src={logo} alt='logo Verde Vida' className='mx-auto py-4' />
      </header>
      <div className="px-6 sm:px-12 md:px-28 mt-36 font-body text-gray-900 flex flex-col gap-14">
        <Hero />
        <HowItWorks />
        <HomeCategories />
      </div>
    </>
  )
}
