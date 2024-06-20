# abelcastro.dev (Next.js version)

The first version of my blog was developed with Django (see more here https://github.com/abel-castro/abelcastro.dev).
In this repository I re-imagined it using [Next.js](https://nextjs.org/).

In this first version, it fetches the posts from the REST-API described in https://github.com/abel-castro/abelcastro.dev?tab=readme-ov-file#api.

Features:

- Next.js
- [Tailwind CSS](https://tailwindcss.com)
- [dotenv](https://www.npmjs.com/package/dotenv)

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ressources

### Highlight code in markdown with prism
https://github.com/sergioramos/remark-prism/issues/457#issuecomment-1835239321

### Tailwind colors

https://tailwindcss.com/docs/background-color

## Getting Started

Provide somehow an Rest-API that returns blog posts as defined in `definitions.ts`.

Create a `.env` file based on the `.env.template`

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
