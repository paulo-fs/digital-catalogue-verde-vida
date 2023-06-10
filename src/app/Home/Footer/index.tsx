import { CustomLink } from '@/components'

export function Footer() {
  return (
    <footer className="bg-green-300 bg-opacity-50 px-28 mt-20 flex flex-col items-center gap-4 pb-8 pt-12">

      <div className="flex gap-36">
        <div className="flex flex-col gap-4">
          <h3 className="font-title font-bold text-h4">A Verde Vida</h3>
          <CustomLink href='/' text="Sobre nós" />
          <CustomLink href='/' text="Nossos contatos" />
          <CustomLink href='/' text="Certificações" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-title font-bold text-h4">Nosso catálogo</h3>
          <CustomLink href='/#categories' text='Categorias' />
          <CustomLink href='/' text='Minhas cestinha' />
          <CustomLink href='/#how' text='Como funciona' />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-title font-bold text-h4">Área científica</h3>
          <CustomLink href='' text='Artigos científicos sobre nossos ativos' />
        </div>
      </div>


      <div className="w-full border-t border-green-300 flex gap-48 justify-center mt-8 pt-8">
        <p>Todos os direitos reservados.</p>
        <p>Desenvolvido por: Paulo Souza</p>
      </div>
    </footer>
  )
}