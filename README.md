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

If you'd like, I can try to install dependencies for you — but I couldn't find Node/npm on the current machine, so you'll need to install Node first. If you want, I can add instructions to automate a local install using `winget` on Windows.
