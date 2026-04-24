/**
 * Interface para as propriedades do CodeBlock.
 */
interface CodeBlockProps {
  className?: string;
}

/**
 * Componente que simula um terminal Unix para exibição de código Python.
 * Utiliza destaque de sintaxe manual com classes Tailwind para evitar dependências extras.
 * Inclui efeitos visuais como scanlines e caret piscante.
 */
export const CodeBlock = ({ className = "" }: CodeBlockProps) => {
  return (
    <div className={`relative ${className}`} role="figure" aria-label="Exemplo de código Python em um terminal">
      {/* ETIQUETAS "ADESIVAS" — Estética de hardware antigo/CRT */}
      <div className="absolute -top-3 left-6 z-20 bg-blood px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper" aria-hidden="true">
        prova_real.py
      </div>
      <div className="absolute -top-3 right-6 z-20 bg-acid px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink" aria-hidden="true">
        rodando · agora
      </div>

      {/* JANELA DO TERMINAL */}
      <div className="relative overflow-hidden border-2 border-ink bg-terminal-bg shadow-[12px_12px_0_0_hsl(var(--ink))]">
        {/* Barra de título do terminal */}
        <div className="flex items-center justify-between border-b border-terminal-dim/30 bg-terminal-bg px-4 py-2">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-blood/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-ochre/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-acid/80" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-comment">
            ~/curso/agente.py — zsh — 80×24
          </span>
          <span className="font-mono text-[10px] text-terminal-comment" aria-hidden="true">
            ⌘
          </span>
        </div>

        {/* Corpo do código */}
        <div className="relative">
          <pre className="relative z-10 overflow-x-auto px-5 py-5 font-mono text-[12px] leading-[1.65] outline-none focus:ring-1 focus:ring-terminal-dim/30" tabIndex={0}>
            <code className="text-terminal-fg">
              <Line n={1}>
                <span className="text-terminal-keyword">from</span>{" "}
                <span className="text-terminal-fn">openai</span>{" "}
                <span className="text-terminal-keyword">import</span>{" "}
                <span className="text-terminal-fg">OpenAI</span>
              </Line>
              <Line n={2}>
                <span className="text-terminal-keyword">import</span>{" "}
                <span className="text-terminal-fn">os</span>
              </Line>
              <Line n={3}> </Line>
              <Line n={4}>
                <span className="text-terminal-comment"># agente que responde como um professor paciente</span>
              </Line>
              <Line n={5}>
                <span className="text-terminal-fg">cliente</span>{" "}
                <span className="text-terminal-keyword">=</span>{" "}
                <span className="text-terminal-fn">OpenAI</span>
                <span className="text-terminal-fg">(</span>
                <span className="text-terminal-fg">api_key</span>
                <span className="text-terminal-keyword">=</span>
                <span className="text-terminal-fn">os</span>
                <span className="text-terminal-fg">.</span>
                <span className="text-terminal-fn">getenv</span>
                <span className="text-terminal-fg">(</span>
                <span className="text-terminal-string">"OPENAI_API_KEY"</span>
                <span className="text-terminal-fg">))</span>
              </Line>
              <Line n={6}> </Line>
              <Line n={7}>
                <span className="text-terminal-keyword">def</span>{" "}
                <span className="text-terminal-fn">perguntar</span>
                <span className="text-terminal-fg">(</span>
                <span className="text-terminal-fg">duvida</span>
                <span className="text-terminal-fg">: </span>
                <span className="text-terminal-fn">str</span>
                <span className="text-terminal-fg">) </span>
                <span className="text-terminal-keyword">{"->"}</span>{" "}
                <span className="text-terminal-fn">str</span>
                <span className="text-terminal-fg">:</span>
              </Line>
              <Line n={8}>
                {"    "}
                <span className="text-terminal-fg">resposta</span>{" "}
                <span className="text-terminal-keyword">=</span>{" "}
                <span className="text-terminal-fg">cliente.chat.completions.</span>
                <span className="text-terminal-fn">create</span>
                <span className="text-terminal-fg">(</span>
              </Line>
              <Line n={9}>
                {"        "}
                <span className="text-terminal-fg">model</span>
                <span className="text-terminal-keyword">=</span>
                <span className="text-terminal-string">"gpt-4o-mini"</span>
                <span className="text-terminal-fg">,</span>
              </Line>
              <Line n={10}>
                {"        "}
                <span className="text-terminal-fg">messages</span>
                <span className="text-terminal-keyword">=</span>
                <span className="text-terminal-fg">[</span>
              </Line>
              <Line n={11}>
                {"            "}
                <span className="text-terminal-fg">{"{"}</span>
                <span className="text-terminal-string">"role"</span>
                <span className="text-terminal-fg">: </span>
                <span className="text-terminal-string">"system"</span>
                <span className="text-terminal-fg">, </span>
                <span className="text-terminal-string">"content"</span>
                <span className="text-terminal-fg">: </span>
                <span className="text-terminal-string">"explique como se eu tivesse 10 anos"</span>
                <span className="text-terminal-fg">{"}"}</span>
                <span className="text-terminal-fg">,</span>
              </Line>
              <Line n={12}>
                {"            "}
                <span className="text-terminal-fg">{"{"}</span>
                <span className="text-terminal-string">"role"</span>
                <span className="text-terminal-fg">: </span>
                <span className="text-terminal-string">"user"</span>
                <span className="text-terminal-fg">, </span>
                <span className="text-terminal-string">"content"</span>
                <span className="text-terminal-fg">: </span>
                <span className="text-terminal-fg">duvida</span>
                <span className="text-terminal-fg">{"}"}</span>
                <span className="text-terminal-fg">,</span>
              </Line>
              <Line n={13}>
                {"        "}
                <span className="text-terminal-fg">],</span>
              </Line>
              <Line n={14}>
                {"        "}
                <span className="text-terminal-fg">temperature</span>
                <span className="text-terminal-keyword">=</span>
                <span className="text-terminal-num">0.4</span>
                <span className="text-terminal-fg">,</span>
              </Line>
              <Line n={15}>
                {"    "}
                <span className="text-terminal-fg">)</span>
              </Line>
              <Line n={16}>
                {"    "}
                <span className="text-terminal-keyword">return</span>{" "}
                <span className="text-terminal-fg">resposta.choices[</span>
                <span className="text-terminal-num">0</span>
                <span className="text-terminal-fg">].message.content</span>
              </Line>
              <Line n={17}> </Line>
              <Line n={18}>
                <span className="text-terminal-keyword">if</span>{" "}
                <span className="text-terminal-fg">__name__</span>{" "}
                <span className="text-terminal-keyword">==</span>{" "}
                <span className="text-terminal-string">"__main__"</span>
                <span className="text-terminal-fg">:</span>
              </Line>
              <Line n={19}>
                {"    "}
                <span className="text-terminal-fn">print</span>
                <span className="text-terminal-fg">(</span>
                <span className="text-terminal-fn">perguntar</span>
                <span className="text-terminal-fg">(</span>
                <span className="text-terminal-string">"o que é uma list comprehension?"</span>
                <span className="text-terminal-fg">))</span>
              </Line>
              <Line n={20}> </Line>
              <Line n={21}>
                <span className="text-terminal-comment">{">>> "}</span>
                <span className="text-acid">é uma forma curta de criar listas em Python.</span>
                <span className="blink-caret text-acid" aria-hidden="true">▊</span>
              </Line>
            </code>
          </pre>

          {/* EFEITO DE SCANLINES — Simula monitor CRT */}
          <div className="scanlines pointer-events-none absolute inset-0 z-20 opacity-40" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

/**
 * Interface para as propriedades de cada linha de código.
 */
interface LineProps {
  n: number;
  children: React.ReactNode;
}

/**
 * Componente que renderiza uma linha de código com numeração.
 */
const Line = ({ n, children }: LineProps) => (
  <div className="flex">
    <span className="mr-4 inline-block w-5 shrink-0 select-none text-right text-terminal-comment/60" aria-hidden="true">
      {n}
    </span>
    <span className="flex-1 min-w-0">{children}</span>
  </div>
);
