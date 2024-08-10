# blog.abelcastro.dev

The first version of my blog was developed with Django (see more here https://github.com/abel-castro/abelcastro.dev).
In this repository I re-imagined it using [Next.js](https://nextjs.org/).

In this first version, it fetches the posts from the REST-API described in https://github.com/abel-castro/abelcastro.dev?tab=readme-ov-file#api.

Features:

- Next.js
- [Tailwind CSS](https://tailwindcss.com)
- [dotenv](https://www.npmjs.com/package/dotenv)

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ressources

### Render Markdwon with MDX

https://nextjs.org/docs/pages/building-your-application/configuring/mdx#remote-mdx

### Highlight markdown content

https://gaudion.dev/blog/mdx-syntax-highlighting

### Tailwind colors

https://tailwindcss.com/docs/background-color

### Next.js metadata

https://nextjs.org/docs/app/building-your-application/optimizing/metadata

### Run playwright on Gitlab

https://playwright.dev/docs/ci-intro#on-deployment
https://cushionapp.com/journal/how-to-use-playwright-with-github-actions-for-e2e-testing-of-vercel-preview

## Getting Started

Provide somehow an Rest-API that returns blog posts as defined in `definitions.ts`.

Create a `.env` file based on the `.env.template`

Install dependencies:

```bash
pnpm i
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

### Unit tests
This project provides unit tests with vitest.

Run:

```sh
pnpm test
```

With coverage:

```sh
pnpm test:coverage
```

### End to end tests
This project provides e2e test with playwright.

Headless run:

```sh
pnpm exec playwright test
```

Run with UI:

```sh
pnpm exec playwright test --ui
```

