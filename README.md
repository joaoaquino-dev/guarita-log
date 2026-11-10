# GuaritaLog

Sistema web mobile-first de passagem de turno para vigilantes patrimoniais.

🔗 **[Acessar aplicação](https://guarita-log.vercel.app/)**

---

## O problema

Na rotina de vigilância patrimonial, a passagem de turno entre vigilantes muitas vezes é feita em livro de ocorrências físico, à mão: letra difícil de ler, rasuras, informações perdidas e nenhum histórico rápido de consultar.

## A solução

Aplicação web mobile-first que digitaliza o registro de passagem de turno: checklist de equipamentos do posto, registro obrigatório de ocorrência quando algum item apresenta problema e histórico de turnos anteriores.

## Funcionalidades

- Checklist de equipamentos com confirmação item a item
- Validação de regra: itens não conferidos exigem descrição de ocorrência antes de finalizar
- Campo livre para comunicados entre turnos
- Histórico de registros anteriores salvo no navegador
- Persistência local via `localStorage` (MVP sem necessidade de servidor)

## Tecnologias

React 19 · TypeScript · Tailwind CSS · React Router 7 · Vite

## Rodando localmente

```bash
git clone https://github.com/joaoaquino-dev/guarita-log
cd guarita-log
npm install
npm run dev
```

Para gerar a build de produção:

```bash
npm run build
```

## Decisões técnicas

- **`localStorage` em vez de backend neste MVP:** permite testar o fluxo completo em um único dispositivo (como um celular corporativo fixo do posto) sem custo de infraestrutura.
- **Inicialização preguiçosa (`lazy useState`):** leitura do `localStorage` feita diretamente no inicializador do estado em `App.tsx`, evitando re-renderizações desnecessárias ao carregar.
- **TypeScript strict:** contratos de dados definidos em `src/types/index.ts` para garantir a estrutura dos registros do formulário até o armazenamento.

## Limitações e próximos passos

- Os dados ficam apenas no navegador do dispositivo atual. O próximo passo natural é persistir em banco (como Supabase/PostgreSQL) com login por posto/vigilante.
- Adicionar filtro por data ou nome do vigilante no histórico.
- Incluir testes automatizados para a validação do formulário.

## Como o projeto foi feito

O tema surgiu da minha vivência real trabalhando como vigilante patrimonial, a partir de uma ideia estruturada e desenvolvida com apoio de IA. Eu defini o fluxo de uso, revisei o código e publiquei a aplicação.

## Autor

João Aquino · [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-aquino-dev) · [GitHub](https://github.com/joaoaquino-dev)
