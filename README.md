## Development

⚙️ Setup (Windows / macOS / Linux):

1. Install Node.js LTS (v18+ recommended): https://nodejs.org/
2. Install dependencies: `npm install` (or `pnpm install` / `yarn install` if you prefer)
3. Start dev server: `npm run dev`

Notes:
- This project uses React + TypeScript + Tailwind CSS. The `SybellaAboutPage` component includes `framer-motion`; it is listed in `package.json` so install dependencies before running the dev server.
- If you see missing type errors for `react` or `framer-motion`, run:

```bash
npm install
npm install -D @types/react @types/react-dom
```


## Deploying to Vercel

You can deploy this repository to Vercel in two ways:

1) Recommended — Vercel Git integration (web):
   - Go to https://vercel.com/new and import the GitHub repo `Goallison123/ilabs`.
   - Configure the project (Framework: `Vite` / `React`) and set the root to `/` if asked.
   - For production deployments, Vercel will automatically build and deploy on push to `main`.

2) CI-based deploy (GitHub Actions): this repo includes `.github/workflows/deploy-to-vercel.yml` which will run on push to `main` and deploy using the Vercel Action.
   - Add the following **Repository Secrets** in GitHub (Settings → Secrets → Actions):
     - `VERCEL_TOKEN` — a Personal Token from your Vercel account
     - `VERCEL_ORG_ID` — your Vercel Organization ID
     - `VERCEL_PROJECT_ID` — your Vercel Project ID
   - Once the secrets are set, pushing to `main` will trigger the workflow and create a production deployment.

Notes & help:
- I can create the token and show you steps in Vercel's UI if you want, or attempt to run a local deploy from this machine (requires Node/npm & Vercel CLI).
- If you'd like, I can also open a PR to add more deployment checks or preview deploy behavior on branches.

