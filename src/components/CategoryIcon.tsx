import Image from 'next/image'

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
} as any

interface CategoryIconProps {
  iconName: keyof typeof iconSelect
  height?: number
  className?: string
}

export function CategoryIcon({ iconName, height, className }: CategoryIconProps) {
  return (
    <Image
      src={iconSelect[iconName]}
      // className={`flex ${height ? 'h-'+height : ''}`}
      className={className ? className : ''}
      alt='Ícone'
    />
  )
}
