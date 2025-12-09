---
title: Deployment
layout: base.njk
---

Once you’ve added your works and customized your archive, you’re ready to deploy it to the web. This guide covers two popular free hosting options: GitHub Pages and Neocities.

### Before you deploy

#### 1. Build your site

Run the build command to generate the production-ready static files:

```bash
npm run build
```

This creates a `public/` folder with all your HTML, CSS, and assets.

#### 2. Test locally

Before deploying, make sure everything looks good:

```bash
npm start
```

Browse through your archive and check:
- All works are displaying correctly
- Chapter links work properly
- Tag and fandom indexes are complete
- No broken links or missing images

#### 3. Clean up

If you want to remove the example works and guide:

1. Delete the dummy work files in `src/works/`
2. Either delete `src/guide.md` or add `permalink: false` to its frontmatter to keep a local copy without publishing it
3. **Hide the documentation from your public site** by adding `permalink: false` to the frontmatter of all files in `src/docs/` (or delete the entire `src/docs/` folder if you don't need local copies)
4. Update `src/index.md` with your own introduction and remove links to `/docs/` pages

**Note:** The documentation files are included in the site by default so you can browse them locally while setting up. Once you’re comfortable with the workflow, you should hide or remove them before deploying your public archive.

### Option 1: GitHub Pages

GitHub Pages is a free hosting service that works great with static sites.

#### Prerequisites

- A GitHub account
- Your project in a GitHub repository

#### Deployment steps

Create a file `.github/workflows/deploy.yml`:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

Now every time you push to the `main` branch, your site will automatically rebuild and deploy.

### Option 2: Neocities

Neocities is a free web hosting service with a nostalgic, indie web vibe.

#### Prerequisites

- A Neocities account (free at [neocities.org](https://neocities.org))

#### Method A: Web interface

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Log in to Neocities** and go to your site's dashboard

3. **Upload files:**
   - Click “Upload” or drag and drop files
   - Upload all files from the `public/` folder
   - Maintain the folder structure

#### Method B: GitHub Actions (recommended)

You can set up automatic deployment to Neocities using GitHub Actions, so your site updates every time you push to your repository.

1. **Get your Neocities API token:**
   - Log in to [Neocities](https://neocities.org)
   - Go to **Settings** → **Site Settings** → **API**
   - Click **Generate API Key** if you don’t have one already. Otherwise, copy the API key displayed on the page.

2. **Add the API token to GitHub:**
   - Go to your repository on GitHub
   - Click **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `NEOCITIES_API_TOKEN`
   - Value: Paste your Neocities API key
   - Click **Add secret**

3. **Create the workflow file:**

   Create a file `.github/workflows/deploy-neocities.yml`:

   ```yml
   name: Deploy to neocities

   # only run on changes to main
   on:
     push:
       branches:
         - main
         
   concurrency: # prevent concurrent deploys doing strange things
     group: deploy-to-neocities
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         # Set up any tools and build steps here
         # This example uses a Node.js toolchain to build a site
         - name: Use Node.js
           uses: actions/setup-node@v4
           with:
             cache: 'npm'
             node-version: lts/*
         - name: Install deps and build
           run: |
             npm ci
             npm run build
         # Create a zipped copy of the generated site
         - name: Create artifact
           uses: actions/upload-artifact@v4
           with:
             name: static-site
             path: public
         # When the dist_dir is ready, deploy it to neocities
         - name: Deploy to neocities
           uses: bcomnes/deploy-to-neocities@v1
           with:
             api_token: ${{ secrets.NEOCITIES_API_TOKEN }}
             cleanup: false
             dist_dir: public
   ```

4. **Commit and push:**
   ```bash
   git add .github/workflows/deploy-neocities.yml
   git commit -m "Add Neocities deployment workflow"
   git push
   ```

Now every time you push to the `main` branch, your site will automatically rebuild and deploy to Neocities!

### Other hosting options

This is a static site, so you can host it anywhere that serves HTML files:

- **Netlify** - Free tier with automatic deployments from Git
- **Vercel** - Free tier with excellent performance
- **Cloudflare Pages** - Free tier with global CDN
- **Your own server** - Just upload the `public/` folder

### Next steps

- **[Troubleshooting](/docs/TROUBLESHOOTING/)** - More troubleshooting info
