import Image from 'next/image'
import { STRINGS } from '@/lib/constants'

/**
 * Seção CTA Banner
 * 
 * Um banner de incentivo para contato, com uma ilustração que vaza lateralmente
 * no desktop para criar um efeito visual dinâmico.
 */
export default function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-14 lg:py-[70px]"
    >
      <div className="px-6 md:px-[60px] max-w-[1280px] mx-auto">
        {/* Wrapper relativo para a ilustração poder vazar sem ser cortada */}
        <div className="relative">
          {/* Card */}
          <div
            style={{
              backgroundColor: '#F3F3F3',
              borderRadius: '45px',
              overflow: 'hidden',
            }}
            className="px-8 py-10 md:px-[60px] md:py-[50px]"
          >
            {/* Left column — texto ocupa metade esquerda em desktop */}
            <div className="max-w-full lg:max-w-[500px]">
              <h2
                id="cta-heading"
                className="text-[#191A23] font-semibold text-balance text-2xl md:text-[30px]"
                style={{ lineHeight: 1.3 }}
              >
                {STRINGS.ctaBanner.heading}
              </h2>
              <p
                className="text-[#191A23] text-base md:text-lg leading-relaxed mt-4 md:mt-5"
              >
                {STRINGS.ctaBanner.description}
              </p>
              <a
                href="#"
                className="inline-block bg-[#191A23] text-white mt-6 rounded-xl px-8 py-4 text-lg hover:bg-[#2d2e3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#191A23] transition-colors"
              >
                {STRINGS.common.getFreeProposal}
              </a>
            </div>
          </div>

          {/* Ilustração — visível apenas em telas grandes, vaza fora do card */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute pointer-events-none"
            style={{
              right: 'clamp(20px, -263px + 27.64vw, 135px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '340px',
              height: '115%',
            }}
          >
            <Image
              src="/assets/images/cta-illustration.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
