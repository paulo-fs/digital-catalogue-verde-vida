import { Montserrat, Be_Vietnam_Pro } from 'next/font/google'
import { Footer, Header } from '@/components'
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
