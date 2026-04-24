'use client'

import Image from 'next/image'
import { useState } from 'react'
import { STRINGS } from '@/lib/constants'

const navLinks = STRINGS.navbar.links

/**
 * Componente de Navegação Principal (Navbar)
 * 
 * Este componente gerencia o cabeçalho do site, incluindo o menu de navegação
 * para desktop e a versão mobile (hamburguer). Os textos são centralizados
 * no arquivo de constantes para facilitar a manutenção.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full py-5 md:py-[30px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] flex items-center">
        {/* Logo — Link para o topo da página com label de acessibilidade */}
        <a href="#" className="flex items-center flex-1" aria-label={STRINGS.navbar.aria.logo}>
          <Image
            src="/assets/logos/positivus-logo.svg"
            alt="Positivus"
            width={174}
            height={44}
            className="w-36 md:w-[174px] h-auto"
            priority
          />
        </a>

        {/* Nav desktop */}
        <nav aria-label={STRINGS.navbar.aria.nav} className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#191A23] hover:underline focus-visible:outline-none focus-visible:underline text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <a
          href="#"
          className="hidden lg:inline-block text-[#191A23] border border-[#191A23] hover:bg-[#191A23] hover:text-white focus-visible:bg-[#191A23] focus-visible:text-white transition-colors ml-8 xl:ml-10 whitespace-nowrap rounded-xl px-6 py-3 text-lg"
        >
          {STRINGS.common.requestQuote}
        </a>

        {/* Botão Hambúrguer — Visível apenas em mobile. Controla o estado 'menuOpen' */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#191A23] rounded focus-visible:ring-offset-2"
          aria-label={menuOpen ? STRINGS.navbar.aria.closeMenu : STRINGS.navbar.aria.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-6 h-0.5 bg-[#191A23] transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#191A23] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#191A23] transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={STRINGS.navbar.aria.mobileNav}
          className="lg:hidden border-t border-[#191A23]/10 mt-4"
        >
          <ul className="flex flex-col max-w-[1280px] mx-auto px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-[#191A23] text-lg py-2 hover:underline focus-visible:underline focus-visible:outline-none"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="inline-block text-[#191A23] border border-[#191A23] hover:bg-[#191A23] hover:text-white transition-colors rounded-xl px-6 py-3 text-lg mt-2"
              >
                {STRINGS.common.requestQuote}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
