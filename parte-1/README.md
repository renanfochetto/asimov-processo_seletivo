# Positivus — Landing Page Agência Digital | Processo Seletivo Asimov

Este projeto é a **Parte 1** do processo seletivo da Asimov Academy. Trata-se de uma Landing Page completa para uma agência de marketing digital, desenvolvida com foco em fidelidade visual, performance e acessibilidade.

A estética visual do projeto foi baseada rigorosamente no layout do Figma fornecido pela empresa. A interface utiliza uma linguagem visual moderna, com tipografia clara (**Space Grotesk**), componentes estruturados e um esquema de cores vibrante, focado na experiência do usuário e na clareza da informação.

## 🤖 Desenvolvimento Assistido por IA

Este projeto foi construído utilizando uma abordagem moderna de co-criação com Inteligência Artificial:

* **Arquitetura & Prototipagem:** Estrutura inicial e componentes de UI gerados via **v0.app** (Next.js/Tailwind).
* **Refinamento & Otimização:** Realizado um processo de "limpeza profunda" no código legado do v0, removendo centenas de linhas de CSS redundante e dezenas de dependências não utilizadas (Radix UI, Lucide, etc.) para garantir um bundle minimalista.
* **Padrão de Qualidade:** O projeto reflete uma colaboração entre a visão do desenvolvedor e o poder de execução de modelos de linguagem para garantir um código enxuto, performático e bem documentado com suporte total a TypeScript.

## 🛠️ Tecnologias

* **Frontend:** [Next.js 16](https://nextjs.org/) (App Router)
* **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Configuração:** TypeScript (Configuração otimizada para Turbopack)

## 🚀 Como Executar

1. Instale as dependências:

   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```
3. Para gerar a build de produção:

   ```bash
   npm run build
   ```

## 📋 Diferenciais Implementados

* **Limpeza Extrema:** Remoção de todas as dependências "morta" (Shadcn UI boilerplate) e otimização do `globals.css`.
* **Acessibilidade (A11y):** Implementação de semântica HTML5 correta, atributos ARIA, contraste de cores adequado e recurso de "Skip to Content".
* **Responsividade:** Layout adaptável para dispositivos móveis com grid dinâmico e tipografia fluida.
* **Centralização de Conteúdo:** Centralização de todas as strings do projeto no arquivo `lib/constants.ts`, facilitando manutenções.
