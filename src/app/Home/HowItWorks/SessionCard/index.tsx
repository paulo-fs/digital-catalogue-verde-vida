import iconAccess from '../../../../assets/svg/hand.svg'
import iconAdd from '../../../../assets/svg/Bag.svg'
import iconSend from '../../../../assets/svg/whats.svg'
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
      className="border-2 border-white hover:border-gray-200 transition rounded py-10 px-6 w-80 h-auto flex flex-col items-center gap-8"
      {...props}
    >
      <Image src={iconSelect[icon]} alt='' />

      <div className='flex flex-col gap-4'>
        <h3 className='font-title font-bold text-h3 leading-none'>
          {title}
        </h3>
        <p className='text-gray-700'>
          {content}
        </p>
      </div>
    </div>
  )
}