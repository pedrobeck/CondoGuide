# CondoGuide

Sistema de gestão e central de ajuda para condomínios.

## Requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd CondoGuide
```

2. Instale as dependências:
```bash
npm install
```

## Configuração do Banco de Dados

Este projeto utiliza Drizzle ORM com Neon (PostgreSQL serverless). Para configurar o banco:

1. Configure suas variáveis de ambiente (crie um arquivo `.env` baseado no `.env.example` se houver)

2. Execute as migrações do banco:
```bash
npm run db:push
```

## Como Executar

### Modo de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot-reload:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000` (ou a porta configurada).

### Modo de Produção

1. Compile o projeto:
```bash
npm run build
```

2. Inicie o servidor de produção:
```bash
npm run start
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Executa o servidor compilado em produção
- `npm run check` - Verifica tipos TypeScript
- `npm run db:push` - Sincroniza o esquema do banco de dados

## Tecnologias Utilizadas

- **Backend**: Express.js com TypeScript
- **Frontend**: React com Vite
- **Banco de Dados**: PostgreSQL (Neon) com Drizzle ORM
- **UI**: Tailwind CSS + Radix UI
- **Autenticação**: Passport.js
- **Gerenciamento de Estado**: React Query (TanStack Query)

## Estrutura do Projeto

```
CondoGuide/
├── client/          # Código do frontend React
├── server/          # Código do backend Express
├── shared/          # Código compartilhado entre client e server
├── package.json     # Dependências e scripts
├── vite.config.ts   # Configuração do Vite
├── drizzle.config.ts # Configuração do Drizzle ORM
└── tsconfig.json    # Configuração do TypeScript
```

## Licença

MIT