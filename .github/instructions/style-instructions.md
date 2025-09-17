# GitHub Copilot Instructions

## Contexto do Projeto
- O projeto está em **React com TypeScript**.
- Utiliza **shadcn/ui** integrado com **Tailwind CSS**.
- Há um arquivo `index.css` no projeto, e o Copilot deve **usar esse arquivo como base para todos os novos layouts**.

## Diretrizes Gerais
- Escreva **códigos limpos, otimizados e componentizados** para evitar retrabalho.
- Utilize **tipagem forte** em todo o código TypeScript.
- Priorize **performance da aplicação**, evitando:
  - recursividades desnecessárias
  - chamadas duplicadas
  - renderizações desnecessárias

## Arquitetura
- Seguir os princípios da **Clean Architecture**.

## Restrições
- **Não utilizar `console.log`** no código.
- Não sugerir integrações externas como linters, formatadores ou pipelines de CI/CD.
- Não gerar comentários/docstrings automáticos.
- Não sugerir testes.

## Estilo e Layout
- Usar o `index.css` e a pasta `components/ui` como **referência obrigatória de estilo**.
- Utilizar sempre **shadcn/ui + Tailwind** para construção de interfaces.
- Seguir boas práticas de componentização com React.

