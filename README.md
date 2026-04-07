# GuaritaLog

Sistema de passagem de turno para vigilantes patrimoniais.

🔗 **[Acessar aplicação](https://guarita-log.vercel.app/)**

---

## O problema

A passagem de turno entre vigilantes é feita em caderno físico, à mão. Letra ilegível, rasuras, informações perdidas e nenhum histórico pesquisável. Um processo crítico de segurança dependendo de papel e caneta.

## A solução

Aplicação web mobile-first que digitaliza o processo: checklist de equipamentos, registro de ocorrências e histórico de turnos. Tudo acessível pelo celular corporativo no posto de serviço.

## Funcionalidades

- Checklist de equipamentos com confirmação item a item
- Validação: itens não conferidos exigem registro de ocorrência
- Campo livre para comunicados entre turnos
- Histórico completo de registros anteriores
- Persistência local via localStorage — funciona sem backend

## Stack

React · TypeScript · Tailwind CSS · React Router · Vite

## Rodando localmente

```bash
git clone https://github.com/joaoaquino-dev/guarita-log
cd guarita-log
npm install
npm run dev
```

## Decisões técnicas

**localStorage em vez de backend:** MVP focado em validar o fluxo. Dados persistem no dispositivo, o que é suficiente para uso em posto fixo com celular corporativo dedicado.

**Sem autenticação:** O vigilante informa o nome no momento do registro.

**TypeScript strict:** Tipos definidos em `src/types/index.ts` garantem consistência dos registros desde a criação até a persistência.
