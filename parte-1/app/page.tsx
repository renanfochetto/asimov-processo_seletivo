import Navbar from '@/app/components/layout/navbar'
import Hero from '@/app/components/sections/hero'
import Services from '@/app/components/sections/services'
import CtaBanner from '@/app/components/sections/cta-banner'
import CaseStudies from '@/app/components/sections/case-studies'
import { STRINGS } from '@/lib/constants'

/**
 * Página Principal (Landing Page)
 * 
 * Composição das seções do site seguindo a arquitetura de componentes do Next.js.
 * Inclui o recurso de 'Skip to Content' para melhor acessibilidade de teclado.
 */
export default function Page() {
  return (
    <>
      {/* Skip to content — acessibilidade de teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#B9FF66] focus:text-[#191A23] focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
      >
        {STRINGS.accessibility.skipToContent}
      </a>
      <main id="main-content" className="bg-white min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <CtaBanner />
        <CaseStudies />
      </main>
    </>
  )
}
