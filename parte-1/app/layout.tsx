import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { STRINGS } from '@/lib/constants'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: STRINGS.site.title,
  description: STRINGS.site.description,
  icons: {
    icon: '/assets/icons/icon-positivus.svg',
  },
}

/**
 * Layout Raiz do Projeto
 * 
 * Define a estrutura base do HTML, carrega a fonte 'Space Grotesk',
 * configura metadados (SEO/Favicon) e integra o Vercel Analytics.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} bg-white`}>
      <body className="font-sans antialiased text-[#191A23]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
