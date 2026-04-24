import { CodeBlock } from "./code-block";

/**
 * Interface para os itens de lista (bullets) do Hero.
 */
interface BulletProps {
  num: string;
  children: React.ReactNode;
}

/**
 * Componente de item de lista estilizado como nota marginal.
 * Usa fontes monoespaçadas para reforçar a estética de terminal/caderno.
 */
const Bullet = ({ num, children }: BulletProps) => (
  <li className="group flex items-start gap-4 border-t border-ink/30 py-3 first:border-t-0" role="listitem">
    <span className="mt-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blood" aria-hidden="true">
      {num}
    </span>
    <span className="font-mono text-sm leading-snug text-ink-soft">
      {children}
    </span>
  </li>
);

/**
 * Componente principal da Hero Section.
 * Design inspirado em editorial dos anos 90 e terminais Unix (Neo-expressionismo digital).
 */
export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden grain bg-paper text-ink"
      aria-labelledby="hero-title"
    >
      {/* BARRA SUPERIOR — Estilo cabeçalho de jornal/revista */}
      <header className="relative z-30 border-b-2 border-ink">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-xl tracking-tight" aria-label="Asimov Python e IA">PY/IA</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
              edição 014 — abril
            </span>
          </div>
          <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft md:flex" aria-label="Navegação secundária">
            <a href="#modulos" className="hover:text-ink transition-colors">módulos</a>
            <a href="#projetos" className="hover:text-ink transition-colors">projetos</a>
            <a href="#preco" className="hover:text-ink transition-colors">preço</a>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" aria-hidden="true" />
              ao vivo
            </span>
          </nav>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            BR · pt-br
          </span>
        </div>
      </header>

      {/* TICKER (Letreiro Digital) — Reforça a ideia de "tempo real" e comunidade */}
      <div className="relative z-20 overflow-hidden border-b-2 border-ink bg-ink py-2 text-paper" role="marquee" aria-live="off">
        <div className="ticker-track flex whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              {[
                "import futuro from python",
                "·",
                "20.000+ alunos compilando juntos",
                "·",
                "agentes · llms · automação",
                "·",
                "do print('hello world') ao seu primeiro saas",
                "·",
                "sem enrolação · sem hype · só código",
                "·",
              ].map((t, j) => (
                <span key={j} className={t === "·" ? "text-acid" : ""}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-10 md:px-10 md:pt-16">
        {/* Marca d'água lateral — Decoração visual */}
        <div className="pointer-events-none absolute right-4 top-12 hidden select-none md:block" aria-hidden="true">
          <span className="font-display text-[180px] leading-none text-ink/[0.04]">
            01
          </span>
        </div>

        {/* Linha de metadados — Contexto rápido do curso */}
        <div className="relative z-10 mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          <span className="bg-ink px-2 py-1 text-paper">curso · python × ia</span>
          <span>40h · 12 módulos</span>
          <span>turma 2025.q2</span>
          <span className="text-blood font-bold">vagas limitadas</span>
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* COLUNA ESQUERDA — Headline, benefícios e CTAs */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Headline editorial — Uso de tipografia fluida com clamp para responsividade */}
            <h1 id="hero-title" className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9]">
              <span className="block">Aprenda</span>
              <span className="block">
                <span className="text-stroke">Python</span>{" "}
                <span className="font-serif-italic font-normal text-ink">
                  do zero
                </span>
              </span>
              <span className="block">
                e construa{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-acid px-2 text-ink">projetos</span>
                </span>
              </span>
              <span className="block">
                <span className="font-serif-italic font-normal">reais</span>{" "}
                com <span className="text-blood">IA.</span>
              </span>
            </h1>

            {/* Subheadline com borda lateral para destaque editorial */}
            <p className="mt-8 max-w-xl border-l-4 border-ink pl-5 font-mono text-[15px] leading-relaxed text-ink-soft md:text-base">
              <span className="text-blood" aria-hidden="true">»</span> O curso mais prático do
              Brasil para quem quer entrar em tecnologia{" "}
              <span className="bg-ink px-1 text-paper">sem enrolação.</span>
            </p>

            {/* Lista de benefícios principais */}
            <ul className="mt-10 max-w-xl" role="list">
              <Bullet num="01">+40 horas de conteúdo direto ao ponto</Bullet>
              <Bullet num="02">
                Projetos com Python + IA desde o módulo 1
              </Bullet>
              <Bullet num="03">
                Suporte da comunidade com +20.000 alunos
              </Bullet>
              <Bullet num="04">Certificado reconhecido pelo mercado</Bullet>
            </ul>

            {/* Chamadas para ação (CTAs) — Responsivas: empilham no mobile, lado a lado no tablet+ */}
            <div className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="#comecar"
                className="group relative inline-flex items-center justify-between gap-6 border-2 border-ink bg-ink px-7 py-5 text-paper shadow-[8px_8px_0_0_hsl(var(--acid))] hover:shadow-[4px_4px_0_0_hsl(var(--acid))] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-acid focus:ring-offset-2"
              >
                <span className="font-display text-base uppercase tracking-tight">
                  Quero começar agora
                </span>
                <span className="font-mono text-xl text-acid" aria-hidden="true">→</span>
              </a>
              <a
                href="#programa"
                className="inline-flex items-center justify-between gap-6 border-2 border-ink bg-paper px-7 py-5 text-ink hover:bg-ink hover:text-paper transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
              >
                <span className="font-mono text-xs uppercase tracking-[0.25em]">
                  Ver o que vou aprender
                </span>
                <span className="font-mono text-xl" aria-hidden="true">↘</span>
              </a>
            </div>

            {/* Prova social e garantias */}
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
              <span aria-label="Avaliação 4.9 de 5 estrelas">★★★★★ 4.9</span>
              <span className="hidden sm:inline opacity-50" aria-hidden="true">|</span>
              <span>+20.000 alunos</span>
              <span className="hidden sm:inline opacity-50" aria-hidden="true">|</span>
              <span className="text-blood font-bold">7 dias de garantia</span>
            </div>
          </div>

          {/* COLUNA DIREITA — Visualização do código (Terminal) */}
          <div className="relative lg:col-span-5 xl:col-span-6">
            {/* Anotação estilo manuscrito para humanizar o código técnico */}
            <div className="mb-6 flex items-end justify-between">
              <div className="font-serif-italic text-2xl leading-[1.1] text-ink md:text-3xl">
                isso aqui não é
                <br />
                exemplo —{" "}
                <span className="underline decoration-blood decoration-[3px] underline-offset-4">
                  é o módulo 02.
                </span>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft md:block" aria-hidden="true">
                fig.01 ↓
              </span>
            </div>

            <CodeBlock />

            {/* Cards de estatísticas simuladas do terminal */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Stat label="execução" value="0.42s" />
              <Stat label="tokens" value="184" />
              <Stat label="custo" value="$0.0003" />
            </div>

            {/* Citação inspiracional lateral */}
            <p className="mt-6 font-serif-italic text-lg leading-snug text-ink-soft max-w-md">
              "o momento em que o código roda pela primeira vez —{" "}
              <span className="text-ink">é nele que a gente aposta.</span>"
            </p>
          </div>
        </div>
      </div>

      {/* RODAPÉ DA SEÇÃO — Navegação de continuidade */}
      <footer className="relative z-10 border-t-2 border-ink">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft md:px-10">
          <span>scroll ↓ para o programa completo</span>
          <span aria-hidden="true">{"// fim da seção 01"}</span>
        </div>
      </footer>
    </section>
  );
};

/**
 * Interface para os cards de estatísticas.
 */
interface StatProps {
  label: string;
  value: string;
}

/**
 * Componente de estatística (ex: tempo de execução, custo).
 */
const Stat = ({ label, value }: StatProps) => (
  <div className="border-2 border-ink bg-paper-deep px-3 py-2 flex flex-col justify-between">
    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-soft mb-1">
      {label}
    </div>
    <div className="font-display text-lg text-ink">{value}</div>
  </div>
);
