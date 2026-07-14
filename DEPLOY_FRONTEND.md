# Deploy Frontend to Vercel (only `frontend` folder)

This file describes two simple ways to deploy the `frontend` app to Vercel: (A) Import via the Vercel web UI, or (B) Deploy with the Vercel CLI. Both approaches will build `frontend` using `npm run build` and publish the `dist` output.

1) Web UI (recommended)
- Sign in to https://vercel.com and click **New Project → Import Git Repository**.
- Select your Git provider (GitHub / GitLab / Bitbucket) and pick this repository.
- IMPORTANT: Set **Project Root** to `frontend` so Vercel builds the correct package.
- If prompted, set:
  - **Framework Preset:** Vite (or Other)
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
- Deploy. The site will be available at `https://<project>.vercel.app`.

2) Vercel CLI (quick preview)
- Install and login:
```bash
npm i -g vercel
vercel login
```
- From the repository root run:
```bash
cd "C:\Users\Rama Roshinee S V\Desktop\neutral-advisory-demo"
vercel --prod
```
- When asked for the project settings choose `Create a new project` and set the Project Root to `frontend` if prompted. The `vercel.json` in the repo will also guide the platform.

3) Environment variables
- Add production keys in the Vercel Dashboard → Project → Settings → Environment Variables.

4) Notes
- The included `vercel.json` instructs Vercel to build `frontend/package.json` and publish `dist`.
- If you want server endpoints on Vercel, convert backend routes into serverless functions under `frontend/api/`.

If you want, I can: (A) run the `vercel` CLI here (you'll need to `vercel login`), or (B) prepare a sample serverless endpoint converting `backend/server.js` into one function.
