import Image from 'next/image'
import { STRINGS } from '@/lib/constants'

type CardBackground = 'light' | 'green' | 'dark'

interface Service {
  title: string
  illustration: string
  background: CardBackground
  badgeBg?: string
  badgeText?: string
}

const services: Service[] = [...STRINGS.services.list]

interface CardColors {
  bg: string
  badgeBg: string
  badgeText: string
  linkText: string
  learnMoreIcon: string
}

function getCardColors(background: CardBackground): CardColors {
  switch (background) {
    case 'light':
      return {
        bg: '#F3F3F3',
        badgeBg: '#B9FF66',
        badgeText: '#191A23',
        linkText: '#191A23',
        learnMoreIcon: '/assets/icons/icon-arrow.svg',
      }
    case 'green':
      return {
        bg: '#B9FF66',
        badgeBg: '#191A23',
        badgeText: '#FFFFFF',
        linkText: '#191A23',
        learnMoreIcon: '/assets/icons/icon-arrow.svg',
      }
    case 'dark':
      return {
        bg: '#191A23',
        badgeBg: '#B9FF66',
        badgeText: '#191A23',
        linkText: '#FFFFFF',
        learnMoreIcon: '/assets/icons/icon-star.svg',
      }
  }
}

interface ServiceCardProps {
  service: Service
}

/**
 * Componente de Cartão de Serviço
 * 
 * Renderiza um artigo individual para cada serviço oferecido, adaptando cores
 * e ícones com base no tipo de background ('light', 'green', 'dark').
 */
function ServiceCard({ service }: ServiceCardProps) {
  const colors = getCardColors(service.background)
  const badgeBg = service.badgeBg ?? colors.badgeBg
  const badgeText = service.badgeText ?? colors.badgeText
  const titleLines = service.title.split('\n')
  const titlePlain = service.title.replace('\n', ' ')

  return (
    <article
      aria-label={titlePlain}
      className="relative flex flex-col justify-between"
      style={{
        backgroundColor: colors.bg,
        borderRadius: '45px',
        border: '1px solid #191A23',
        boxShadow: '0px 4px 0px #191A23',
        padding: '40px',
        minHeight: '240px',
      }}
    >
      {/* Title badge — canto superior esquerdo */}
      <div className="flex flex-col items-start" style={{ maxWidth: '55%' }}>
        {titleLines.map((line) => (
          <span
            key={line}
            className="font-medium text-2xl lg:text-[28px]"
            style={{
              backgroundColor: badgeBg,
              color: badgeText,
              borderRadius: '7px',
              padding: '2px 8px',
              lineHeight: 1.2,
              display: 'inline-block',
            }}
          >
            {line}
          </span>
        ))}
      </div>

      {/* Ilustração — centralizada verticalmente na metade direita */}
      <div className="absolute inset-y-0 right-[40px] flex items-center overflow-hidden">
        <Image
          src={service.illustration}
          alt=""
          aria-hidden="true"
          width={170}
          height={160}
          className="object-contain"
          style={{ maxHeight: '170px' }}
        />
      </div>

      {/* Learn more link */}
      <a
        href="#"
        className="flex items-center gap-3 self-start mt-6 focus-visible:outline-none focus-visible:underline"
        style={{ color: colors.linkText, fontSize: '18px' }}
        aria-label={`${STRINGS.services.aria.learnMoreAbout} ${titlePlain}`}
      >
        <Image
          src={colors.learnMoreIcon}
          alt=""
          aria-hidden="true"
          width={41}
          height={41}
        />
        <span>{STRINGS.common.learnMore}</span>
      </a>
    </article>
  )
}

/**
 * Seção de Serviços
 * 
 * Lista os serviços da agência em um grid responsivo (1 coluna mobile, 2 colunas desktop).
 */
export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 lg:py-[80px]"
    >
      <div className="px-6 md:px-[60px] max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mb-12 lg:mb-[80px]">
          <span
            id="services-heading"
            className="font-medium flex-shrink-0 text-2xl lg:text-[28px]"
            style={{
              backgroundColor: '#B9FF66',
              color: '#191A23',
              borderRadius: '7px',
              padding: '4px 8px',
            }}
          >
            {STRINGS.services.heading}
          </span>
          <p
            className="text-[#191A23] text-base md:text-lg leading-relaxed"
            style={{ maxWidth: '580px' }}
          >
            {STRINGS.services.description}
          </p>
        </div>

        {/* Grid 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[40px]">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
