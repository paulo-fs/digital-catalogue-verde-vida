import Link, { LinkProps } from 'next/link'
import { CategoryIcon } from '@/components/CategoryIcon'

interface CategoryCardProps extends LinkProps {
   title: string
   href: string
   icon: string
}

export async function CategoryCard({ title, href, icon, ...props }: CategoryCardProps) {
  return (
    <Link
      href={href}
      {...props}
      className='w-40 h-auto border-2 border-white hover:border-gray-200 transition rounded flex flex-col items-center px-4 py-6 justify-between mt-8'
    >
      <CategoryIcon iconName={icon} />
      <p className='text-gray-700 mt-4 capitalize'>
        {title}
      </p>
    </Link>
  )
}
