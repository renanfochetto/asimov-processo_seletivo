# Teste Técnico — Designer / Frontend Dev

## Entregáveis


|             | Repositório | Deploy |
| ----------- | ------------ | ------ |
| **Parte 1** | `/parte-1`   | https://asimov-parte-1-inky.vercel.app |
| **Parte 2** | `/parte-2`   | https://asimov-parte-2-phi.vercel.app |

---

## 1. Quais ferramentas de IA você usou?

Usei o **Claude** como assistente principal para refinamento de prompts e decisões de arquitetura. Para geração de código, testei três ferramentas em paralelo — **Claude Design**, **v0.app** e **Lovable** — antes de decidir qual usar em cada parte.

A Parte 1 foi desenvolvida no **v0.app**, pela sua precisão na reprodução de layouts existentes a partir de referências visuais. A Parte 2 foi desenvolvida no **Lovable**, que se destacou na geração criativa com maior liberdade de composição.

---

## 2. Em quais etapas a IA ajudou mais?

Na **Parte 1**, a maior contribuição foi na configuração inicial do projeto e na tradução fiel do design system — cores, tipografia, espaçamentos e padrão de sombras dos cards — para código production-ready.

Na **Parte 2**, a contribuição mais relevante foi na **concepção criativa**. A chave foi descrever a sensação que a página deveria transmitir, não apenas o que ela deve *conter*. Isso produziu resultados significativamente mais originais do que a abordagem convencional.

---

## 3. O que você ajustou manualmente e por quê?

Três frentes principais:

- **Limpeza de código** — remoção de componentes, dependências e assets não utilizados que as ferramentas geram por padrão
- **Responsividade e acessibilidade** — validação e ajustes em breakpoints, atributos ARIA e contraste de cores, onde a geração automática costuma ser imprecisa
- **Consistência arquitetural** — padronização de nomenclatura (kebab-case para arquivos, PascalCase para componentes) e separação de interfaces TypeScript.
