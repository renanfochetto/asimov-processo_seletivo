import Image from 'next/image'
import { STRINGS } from '@/lib/constants'

const partnerLogos = [
  { src: '/assets/logos/amazon-logo.svg', alt: 'Amazon' },
  { src: '/assets/logos/dribble-logo.svg', alt: 'Dribbble' },
  { src: '/assets/logos/hubspot-logo.svg', alt: 'HubSpot' },
  { src: '/assets/logos/notion-logo.svg', alt: 'Notion' },
  { src: '/assets/logos/netflix-logo.svg', alt: 'Netflix' },
  { src: '/assets/logos/zoom-logo.svg', alt: 'Zoom' },
]

/**
 * Seção Hero
 * 
 * Apresenta o título principal, descrição e a ilustração de destaque da agência.
 * Inclui também uma faixa com os logotipos dos parceiros para prova social.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-6 md:px-[60px] max-w-[1280px] mx-auto"
    >
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row items-center gap-8 pt-10 pb-10 lg:pt-[70px] lg:pb-[70px]">
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            id="hero-heading"
            className="text-[#191A23] font-medium text-balance text-4xl md:text-5xl lg:text-[60px]"
            style={{ lineHeight: 1.2 }}
          >
            {STRINGS.hero.heading}
          </h1>
          <p
            className="text-[#191A23] text-base md:text-lg mt-6 lg:mt-[35px] leading-relaxed mx-auto lg:mx-0"
            style={{ maxWidth: '500px' }}
          >
            {STRINGS.hero.description}
          </p>
          <a
            href="#"
            className="inline-block bg-[#191A23] text-white mt-6 lg:mt-[35px] rounded-xl px-8 py-4 lg:py-5 text-lg lg:text-xl hover:bg-[#2d2e3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#191A23] transition-colors"
          >
            {STRINGS.common.bookConsultation}
          </a>
        </div>

        {/* Right column — hidden on small, shown on lg */}
        <div className="flex-1 flex justify-center w-full max-w-sm lg:max-w-none">
          <Image
            src="/assets/images/hero-illustration.svg"
            alt="Megafone com ícones de redes sociais representando marketing digital"
            width={600}
            height={515}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Partner logos strip */}
      <div className="pb-10 lg:pb-[60px]">
        <ul
          aria-label={STRINGS.hero.aria.partners}
          className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-0"
        >
          {partnerLogos.map((logo) => (
            <li key={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="object-contain h-8 md:h-10 lg:h-12 w-auto"
                style={{ filter: 'grayscale(1)' }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
