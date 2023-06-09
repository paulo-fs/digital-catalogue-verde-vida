import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import iconEmagrecimento from '../../../../assets/svg/emagrecimento.svg'
import iconSaude from '../../../../assets/svg/healthy.svg'
import iconEnergia from '../../../../assets/svg/foco-concentracao.svg'
import iconBeleza from '../../../../assets/svg/beauty.svg'
import iconNutrientes from '../../../../assets/svg/nutrientes-essenciais.svg'
import iconImunidade from '../../../../assets/svg/imunidade.svg'
import iconExercicio from '../../../../assets/svg/workout.svg'
import iconSono from '../../../../assets/svg/sono.svg'

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