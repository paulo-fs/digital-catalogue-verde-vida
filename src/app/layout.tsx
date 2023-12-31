import { Montserrat, Be_Vietnam_Pro } from 'next/font/google'
import { Footer } from '@/components'
import './globals.css'


const montserrat = Montserrat({ subsets: ['latin'] })
const beVietnam = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Catálogo Verde Vida',
  description: 'A maneira mais simples de cuidar da sua saúde.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${beVietnam.className} ${montserrat.className}`}>
        <main className='max-w-7xl mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
