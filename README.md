# 🕵️‍♀️😷 COVID-19 Brazil Tracker

Uma aplicação web para visualizar e interagir com dados da COVID-19 no Brasil e no mundo, utilizando a [COVID-19 Brazil API](https://github.com/wcota/covid19br). Este projeto foi construído com **Next.js**, **React**, e **Tailwind CSS**, oferecendo uma interface moderna e responsiva para explorar estatísticas por estado, data, país e até enviar dados via formulário.

---

## 📋 Visão Geral

O **COVID-19 Brazil Tracker** permite aos usuários:

- Visualizar um balanço geral dos casos, óbitos e recuperados no Brasil.
- Explorar dados detalhados por estados brasileiros ou por datas específicas.
- Pesquisar estatísticas de COVID-19 em outros países.
- Preencher e enviar formulários com dados personalizados sobre a pandemia.

A aplicação é otimizada para desktop e mobile, com animações suaves e gráficos interativos, utilizando bibliotecas como **Recharts** para visualização de dados e **React Query** para gerenciamento de estado assíncrono.

---

## ✨ Funcionalidades

- **Dashboard**: Exibe um resumo nacional com gráficos dos 10 estados mais afetados.
- **Dados por Estado**: Lista todos os estados ou detalha um estado específico selecionado.
- **Dados por Data**: Mostra estatísticas filtradas por uma data escolhida.
- **Dados por Países**: Permite buscar e visualizar dados de países ao redor do mundo.
- **Formulário**: Interface para envio de dados personalizados com validação via **Zod**.
- **Testes Automatizados**: Inclui testes E2E com **Playwright** para garantir a funcionalidade.

---

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Mirian97/covid19-brazil-tracker.git
   cd covid19-brazil-tracker
   ```

2. Instale as dependências:

   ```bash
   npm i
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione:

   ```env
   NEXT_PUBLIC_BASE_URL=https://covid19-brazil-api.now.sh/api/report/v1
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:3000`.
   <br/>
   **OBSERVAÇÃO:** Caso queira acessar sem configurações extras, entre neste link <a href="https://covid19-brazil-tracker.vercel.app/dashboard">ao vivo e em cores</a>

---

## 🛠️ Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento com Turbopack.
- `npm run build`: Gera a versão de produção.
- `npm run start`: Inicia a aplicação em modo produção.
- `npm run lint`: Executa o linter para verificar o código.
- `npx playwright test`: Executa os testes automatizados com Playwright.

---

## 📂 Estrutura do Projeto

```
covid19-brazil-tracker/
├── app/                  # Páginas e componentes da aplicação
│   ├── dashboard/        # Página de balanço geral
│   ├── data/            # Página de dados por data
│   ├── estados/         # Página de dados por estado
│   ├── formulario/      # Página de formulário
│   ├── paises/          # Página de dados por países
│   ├── globals.css      # Estilos globais com Tailwind
│   └── layout.tsx       # Layout raiz com cabeçalho e sidebar
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes de UI personalizados
│   ├── header.tsx       # Cabeçalho da aplicação
│   ├── sidebar.tsx      # Barra lateral de navegação
│   └── status-card.tsx  # Cartão de status para exibir dados
├── config/              # Configurações da aplicação
│   ├── api.ts           # Configuração do Axios
│   └── query-client.ts  # Configuração do React Query
├── constants/           # Constantes como lista de estados e menu
├── hooks/               # Hooks personalizados para busca de dados
├── lib/                # Utilitários gerais
├── providers/          # Provedores de contexto (ex.: React Query)
├── services/           # Serviços para chamadas à API
├── tests/              # Testes automatizados com Playwright
├── types/             # Definições de tipos TypeScript
├── public/            # Arquivos estáticos
├── package.json       # Dependências e scripts
├── tsconfig.json      # Configuração do TypeScript
├── playwright.config.ts # Configuração do Playwright
├── postcss.config.mjs  # Configuração do PostCSS com Tailwind
└── README.md          # Este arquivo
```

---

## 🧪 Testes

O projeto inclui testes end-to-end com **Playwright** para verificar a funcionalidade das páginas principais. Exemplos de testes:

- **Dashboard**: Verifica se o título e os gráficos são renderizados.
- **Dados por Data**: Testa a busca por data e exibição de cartões de estado.
- **Formulário**: Simula o envio de dados e verifica o log de saída.

Execute os testes com:

```bash
npx playwright test
```

---

## 🌐 Tecnologias Utilizadas

### Dependências Principais

- **[Next.js](https://nextjs.org/)**: Framework React com suporte a SSR e SSG.
- **[React](https://reactjs.org/)**: Biblioteca para construção de interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização utilitário.
- **[React Query](https://tanstack.com/query)**: Gerenciamento de dados assíncronos.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para chamadas à API.
- **[Recharts](https://recharts.org/)**: Biblioteca de gráficos.
- **[Zod](https://zod.dev/)**: Validação de esquemas.
- **[Playwright](https://playwright.dev/)**: Ferramenta de testes E2E.

### DevDependencies

- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática.
- **[ESLint](https://eslint.org/)**: Linting para qualidade de código.
- **[Prettier](https://prettier.io/)**: Formatação de código.
- **[TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)**: Animações com Tailwind.

Veja todas as dependências em [`package.json`](./package.json).

---

## 🎨 Estilização

O projeto utiliza **Tailwind CSS** com um tema personalizado definido em `app/globals.css`. Variáveis CSS são usadas para cores, animações e fontes, garantindo consistência e facilidade de manutenção.

Exemplo de animações:

- `fade-in`: Transição de opacidade.
- `scale-in`: Escala suave para entrada de elementos.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m "Adiciona minha feature"`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## 📜 Licença

Este projeto é licenciado sob a [MIT License](LICENSE.md). Veja o arquivo `LICENSE` para mais detalhes.

---

## 📧 Contato

Desenvolvido por [Mirian97](https://github.com/Mirian97). Para dúvidas ou sugestões, abra uma issue ou entre em contato via GitHub.
