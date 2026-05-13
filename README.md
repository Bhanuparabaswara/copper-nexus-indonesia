# Copper Nexus Indonesia

Interactive industrial-intelligence platform about Indonesia's copper value chain, Grasberg, Gresik smelter, anode slime opportunity, downstream gaps, and copper geopolitics.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Build

```bash
npm run build
```

This build is configured for full Next.js hosting on Vercel or Netlify. Interactive calculators run in the browser and are also exposed through mock API route handlers for future integration.

## Deploy

### Netlify

1. Push this project to GitHub.
2. Import the repository in Netlify.
3. Use build command `npm run build`.
4. Use publish directory `.next`.

Netlify supports modern Next.js through its OpenNext adapter, so no pinned runtime plugin is required.

### Vercel

Import the GitHub repository and deploy with the default Next.js settings.
