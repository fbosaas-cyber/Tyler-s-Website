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

## Deployment Workflow

This repository has two deployment options configured via GitHub Actions:

### GitHub Pages Deployment (`.github/workflows/deploy.yml`)
- Triggers automatically on push to `main` or `master` branch
- Builds the Next.js app and exports static files to `out/` directory
- Deploys to GitHub Pages at `https://fbosaas-cyber.github.io/Tyler-s-Website/`
- No additional secrets required (uses `GITHUB_TOKEN`)

### Vercel Deployment (`.github/workflows/vercel-deploy.yml`)
- Triggers automatically on push to `main` branch or manual workflow dispatch
- Deploys directly to Vercel
- Requires repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

### How to Push Changes

1. Make your changes in VS Code or any editor
2. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
3. Push to your branch:
   ```bash
   git push origin your-branch-name
   ```
4. If on `main` branch, GitHub Actions will automatically deploy to both GitHub Pages and Vercel (if secrets are configured)
5. For feature branches, create a Pull Request and merge to `main` to trigger deployment

