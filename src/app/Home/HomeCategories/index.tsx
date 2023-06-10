import { CategoryCard } from './CategoryCard'

export function HomeCategories() {
  return (
    <section id='categories' className="text-center">
      <div>
        <h3 className="font-title font-bold text-h2">
               Categorias
        </h3>
        <p className="text-gray-700">
               Selecione a categoria e navegue pelos produtos
        </p>
      </div>

      <div className="px-60 flex flex-wrap gap-4 justify-center">
        <CategoryCard
          href="/"
          title="Emagrecimento"
          icon="emagrecimento"
        />
        <CategoryCard
          href='/'
          title="Saúde Geral"
          icon="saude"
        />
        <CategoryCard
          href='/'
          title='Energia, Foco e Concentração'
          icon="energia"
        />
        <CategoryCard
          href='/'
          title='Pele e Beleza'
          icon="beleza"
        />
        <CategoryCard
          href='/'
          title='Nutrientes Essenciais'
          icon="nutrientes"
        />
        <CategoryCard
          href='/'
          title='Imunidade'
          icon="imunidade"
        />
        <CategoryCard
          href='/'
          title='Exercícios físicos'
          icon="exercicio"
        />
        <CategoryCard
          href='/'
          title='Sono'
          icon="sono"
        />
      </div>
    </section>
  )
}