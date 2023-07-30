import iconAccess from '@/../public/assets/svg/hand.svg'
import iconAdd from '@/../public/assets/svg/Bag.svg'
import iconSend from '@/../public/assets/svg/whats.svg'
import Image from 'next/image'
import { HtmlHTMLAttributes } from 'react'

interface SessionCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
   title: string
   content: string
   icon: 'access' | 'add' | 'send'
}

export function SessionCard({ icon, title, content, ...props }: SessionCardProps) {
  const iconSelect = {
    'access': iconAccess,
    'add': iconAdd,
    'send': iconSend
  }

  return (
    <div
      className="border-2 border-white hover:border-gray-200 transition rounded py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-6 w-full md:w-80 h-auto flex sm:flex-col items-center gap-8"
      {...props}
    >
      <Image src={iconSelect[icon]} alt='' className='w-12 md:w-16' />

      <div className='flex flex-col gap-4 text-left sm:text-center'>
        <h3 className='font-title font-bold text-h4 md:text-h3 leading-none'>
          {title}
        </h3>
        <p className='text-gray-700'>
          {content}
        </p>
      </div>
    </div>
  )
}
