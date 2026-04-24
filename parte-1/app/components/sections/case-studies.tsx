import { STRINGS } from '@/lib/constants'

interface CaseStudy {
  text: string
  label: string
}

const caseStudies: CaseStudy[] = [...STRINGS.caseStudies.items]

/**
 * Seção Case Studies (Estudos de Caso)
 * 
 * Exibe exemplos de sucesso da agência em um card escuro com divisores
 * responsivos (horizontal no mobile, vertical no desktop).
 */
export default function CaseStudies() {
  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="py-16 lg:py-[80px]"
    >
      <div className="px-6 md:px-[60px] max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mb-12 lg:mb-[80px]">
          <span
            id="cases-heading"
            className="font-medium flex-shrink-0 text-2xl lg:text-[28px]"
            style={{
              backgroundColor: '#B9FF66',
              color: '#191A23',
              borderRadius: '7px',
              padding: '4px 8px',
            }}
          >
            {STRINGS.caseStudies.heading}
          </span>
          <p
            className="text-[#191A23] text-base md:text-lg leading-relaxed"
            style={{ maxWidth: '580px' }}
          >
            {STRINGS.caseStudies.description}
          </p>
        </div>

        {/* Dark card */}
        <div
          className="flex flex-col lg:flex-row"
          style={{
            backgroundColor: '#191A23',
            borderRadius: '45px',
            padding: '40px 32px',
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className={`flex-1 flex flex-col justify-between py-8 lg:py-0
                ${index < caseStudies.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r border-white/30 pb-8 lg:pb-0 lg:pr-16 mb-8 lg:mb-0'
                  : ''}
                ${index > 0 ? 'lg:pl-16' : ''}
              `}
            >
              <p
                className="text-white text-base md:text-lg leading-relaxed"
              >
                {caseStudy.text}
              </p>
              <a
                href="#"
                className="flex items-center gap-2 mt-5 focus-visible:outline-none focus-visible:underline"
                style={{ color: '#B9FF66', fontSize: '18px' }}
                aria-label={`${STRINGS.caseStudies.aria.learnMoreAbout} ${caseStudy.label}`}
              >
                <span>{STRINGS.common.learnMore}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="#B9FF66"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
