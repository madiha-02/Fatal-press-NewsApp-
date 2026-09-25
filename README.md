# Fatal Press

A news reader built with React and [NewsAPI.org](https://newsapi.org/), with category tabs (business, entertainment, health, science, sports, technology), infinite scroll, and a top loading bar.

Originally built with Create React App; now on Vite.

## Setup

```bash
npm install
```

Get a free API key from [newsapi.org](https://newsapi.org/register), then create a `.env` file in the project root:

```bash
cp .env.example .env
```

and set your key:

```
VITE_NEWS_API=your_newsapi_org_key_here
```

## Scripts

- `npm run dev` — start the dev server at http://localhost:5173
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm test` — run tests with Vitest
- `npm run lint` — run ESLint

## Stack

- React 19
- React Router 7
- Vite
- Bootstrap 5
- Vitest + Testing Library
