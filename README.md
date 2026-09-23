# Adina Bolot kyzy — Personal Portfolio

This repository contains a minimalist personal portfolio built with React, Vite, TypeScript and Tailwind CSS.

Quick start

```bash
npm install
npm run dev
# build
npm run build
# preview production build
npm run preview
```

Replace placeholder links in `src/data/site.ts`.
Add the real CV file at `/Adina_Bolot_kyzy_CV.pdf` to enable the Download CV link.

Files of interest:

- `src/App.tsx` — main app
- `src/components` — reusable components (Navbar, Hero, About, Experience, Projects, Skills, Education, Contact, Footer)
- `src/data/site.ts` — social links and configuration

Deployment

- This repository includes a GitHub Actions workflow that builds the site and publishes the `dist` folder to the `gh-pages` branch on push to `main` or `master`.
- To enable deployment, create a remote GitHub repository, push your local repo, and GitHub Actions will run automatically.

Quick steps to publish:

```bash
# create a new GitHub repo and set it as remote (replace <your-repo-url>)
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

After pushing, GitHub Actions will build and deploy to the `gh-pages` branch. You can enable GitHub Pages in your repository settings (source: `gh-pages` branch). Alternatively deploy to Vercel by connecting the repo to Vercel.

Editing config

- Update social links and the CV path in `src/data/site.ts`.
- Replace `/Adina_Bolot_kyzy_CV.pdf` with your actual CV file in the project root.

License: personal use.
