# React website on Vercel

Minimal React starter that can be deployed to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the default settings. Vercel will use `npm run build` and publish `dist`.

You can also deploy from the terminal after installing the Vercel CLI:

```bash
npm install -g vercel
vercel
```

For a production deployment:

```bash
vercel --prod
```