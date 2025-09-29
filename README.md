# Tyler Robinson — Portfolio

This is a starter portfolio built with Next.js + TypeScript, Tailwind CSS, and framer-motion. It includes an internal API route that serves project data from `data/projects.json`.

Getting started

1. Install dependencies

   npm install

2. Run development server

   npm run dev

Open http://localhost:3000

Build for production

   npm run build
   npm run start

Notes & Next steps

- Replace the placeholder contact email and project entries in `data/projects.json`.
- Add images and a CMS or external data source if you want dynamic editing.
- Consider deploying to Vercel for optimal Next.js support.

Deploying to Vercel

1. Quick deploy (recommended):
   - Go to https://vercel.com/new and import your GitHub repository `fbosaas-cyber/Tyler-s-Website`.
   - Vercel detects Next.js automatically and will build and deploy on each push.

2. Using the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

3. CI deploy via GitHub Actions (already added):
   - The workflow `.github/workflows/vercel-deploy.yml` uses a Vercel action and requires the following repository secrets:
     - `VERCEL_TOKEN` (create at https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` (find these on your Vercel project settings)
   - Add those secrets in GitHub: repo Settings → Secrets → Actions.

