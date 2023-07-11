import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import iconEmagrecimento from '@/../public/assets/svg/emagrecimento.svg'
import iconSaude from '@/../public/assets/svg/healthy.svg'
import iconEnergia from '@/../public/assets/svg/foco-concentracao.svg'
import iconBeleza from '@/../public/assets/svg/beauty.svg'
import iconNutrientes from '@/../public/assets/svg/nutrientes-essenciais.svg'
import iconImunidade from '@/../public/assets/svg/imunidade.svg'
import iconExercicio from '@/../public/assets/svg/workout.svg'
import iconSono from '@/../public/assets/svg/sono.svg'

const iconSelect = {
  'emagrecimento': iconEmagrecimento,
  'saude': iconSaude,
  'energia': iconEnergia,
  'beleza': iconBeleza,
  'nutrientes': iconNutrientes,
  'imunidade': iconImunidade,
  'exercicio': iconExercicio,
  'sono': iconSono
}

interface CategoryCardProps extends LinkProps {
   title: string
   href: string
   icon: keyof typeof iconSelect
}

export function CategoryCard({ title, href, icon, ...props }: CategoryCardProps) {
  return (
    <Link
      href={href}
      {...props}
      className='w-40 h-auto border-2 border-white hover:border-gray-200 transition rounded flex flex-col items-center px-4 py-6 justify-between mt-8'
    >
      <Image src={iconSelect[icon]} alt='icon' />
      <p className='text-gray-700 mt-4'>
        {title}
      </p>
    </Link>
  )
}
