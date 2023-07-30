import Image from 'next/image'
import folha from '@/../public/assets/images/folha 1.png'
import { Button } from '@/components'
import Link from 'next/link'

export function Hero() {
  return (
    <main className="flex justify-between items-center">
      <div className="max-w-xl flex flex-col gap-6 justify-start">
        <h1 className="text-h3 md:text-h2 lg:text-h1 font-title font-bold leading-none">
               Cuidado diário feito para você
        </h1>
        <p className="text-b3 md:text-b2 lg:text-b1 font-normal text-gray-700">
               Fórmulas cuidadosamente planejadas para atender as suas necessidades.
        </p>
        <div className='w-full flex'>
          <Link href='/produtos' className='mx-auto sm:mx-0'>
            <Button text='Ver catálogo' />
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex ml-8">
        <Image src={folha} width={440} quality={100} alt='Uma folha e um produto deitado sobre a folha' />
      </div>
    </main>
  )
}
