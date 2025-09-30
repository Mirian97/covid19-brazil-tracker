# 🕵️‍♀️😷 COVID-19 Brazil Tracker

A web application for visualizing and interacting with COVID-19 data in Brazil and worldwide, using the [COVID-19 Brazil API](https://github.com/wcota/covid19br). This project was built with **Next.js**, **React**, and **Tailwind CSS**, offering a modern and responsive interface to explore statistics by state, date, country, and even submit data via a form.

---

## 📋 Overview

The **COVID-19 Brazil Tracker** allows users to:

- View a general overview of cases, deaths, and recoveries in Brazil.
- Explore detailed data by Brazilian states or specific dates.
- Search for COVID-19 statistics in other countries.
- Fill out and submit custom data forms related to the pandemic.

The application is optimized for desktop and mobile, with smooth animations and interactive charts, using libraries like **Recharts** for data visualization and **React Query** for asynchronous state management.

---

## ✨ Features

- **Dashboard**: Displays a national summary with charts of the 10 most affected states.
- **Data by State**: Lists all states or details a specific selected state.
- **Data by Date**: Shows statistics filtered by a chosen date.
- **Data by Country**: Allows searching and viewing data from countries around the world.
- **Form**: Interface for submitting custom data with validation via **Zod**.
- **Automated Tests**: Includes E2E tests with **Playwright** to ensure functionality.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mirian97/covid19-brazil-tracker.git
   cd covid19-brazil-tracker
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Set up environment variables:
   Create a `.env` file in the project root and add:

   ```env
   NEXT_PUBLIC_BASE_URL=https://covid19-brazil-api.now.sh/api/report/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.
   <br/>
   **NOTE:** If you want to access it without extra setup, visit this <a href="https://covid19-brazil-tracker.vercel.app/dashboard">live link</a>.

---

## 🛠️ Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Generates the production build.
- `npm run start`: Starts the application in production mode.
- `npm run lint`: Runs the linter to check code quality.
- `npx playwright test`: Runs automated tests with Playwright.

---

## 📂 Project Structure

```
covid19-brazil-tracker/
├── app/                  # Application pages and components
│   ├── dashboard/        # General overview page
│   ├── data/            # Data by date page
│   ├── estados/         # Data by state page
│   ├── formulario/      # Form page
│   ├── paises/          # Data by country page
│   ├── globals.css      # Global styles with Tailwind
│   └── layout.tsx       # Root layout with header and sidebar
├── components/           # Reusable components
│   ├── ui/              # Custom UI components
│   ├── header.tsx       # Application header
│   ├── sidebar.tsx      # Navigation sidebar
│   └── status-card.tsx  # Status card for displaying data
├── config/              # Application configurations
│   ├── api.ts           # Axios configuration
│   └── query-client.ts  # React Query configuration
├── constants/           # Constants like state list and menu
├── hooks/               # Custom hooks for data fetching
├── lib/                # General utilities
├── providers/          # Context providers (e.g., React Query)
├── services/           # Services for API calls
├── tests/              # Automated tests with Playwright
├── types/             # TypeScript type definitions
├── public/            # Static files
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── playwright.config.ts # Playwright configuration
├── postcss.config.mjs  # PostCSS configuration with Tailwind
└── README.md          # This file
```

---

## 🧪 Tests

The project includes end-to-end tests with **Playwright** to verify the functionality of the main pages. Examples of tests:

- **Dashboard**: Checks if the title and charts are rendered.
- **Data by Date**: Tests date-based search and state card display.
- **Form**: Simulates data submission and verifies output logs.

Run the tests with:

```bash
npx playwright test
```

---

## 🌐 Technologies Used

### Main Dependencies

- **[Next.js](https://nextjs.org/)**: React framework with SSR and SSG support.
- **[React](https://reactjs.org/)**: Library for building interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling framework.
- **[React Query](https://tanstack.com/query)**: Asynchronous data management.
- **[Axios](https://axios-http.com/)**: HTTP client for API calls.
- **[Recharts](https://recharts.org/)**: Charting library.
- **[Zod](https://zod.dev/)**: Schema validation.
- **[Playwright](https://playwright.dev/)**: E2E testing tool.

### DevDependencies

- **[TypeScript](https://www.typescriptlang.org/)**: Static typing.
- **[ESLint](https://eslint.org/)**: Code quality linting.
- **[Prettier](https://prettier.io/)**: Code formatting.
- **[TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)**: Tailwind animations.

See all dependencies in [`package.json`](./package.json).

---

## 🎨 Styling

The project uses **Tailwind CSS** with a custom theme defined in `app/globals.css`. CSS variables are used for colors, animations, and fonts, ensuring consistency and ease of maintenance.

Example animations:

- `fade-in`: Opacity transition.
- `scale-in`: Smooth scaling for element entry.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a branch for your feature: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m "Add my feature"`.
4. Push to the remote repository: `git push origin my-feature`.
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE.md). See the `LICENSE` file for more details.

---

## 📧 Contact

Developed by [Mirian97](https://github.com/Mirian97). For questions or suggestions, open an issue or contact via GitHub.
