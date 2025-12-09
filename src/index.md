---
title: home
layout: base.njk
---

This is an Eleventy (11ty) static site generator for creating personal fanfiction archives. This template mirrors AO3’s metadata structure and generates browsable HTML pages from markdown files with frontmatter.

## Features

- 📚 **AO3-style metadata** - Supports fandoms, tags, relationships, characters, ratings, and warnings
- 📖 **Multi-chapter support** - Create chapter indexes with individual chapter pages
- 🏷️ **Auto-generated indexes** - Automatic tag and fandom pages from your work metadata
- ✍️ **Markdown or HTML** - Write your works in Markdown or paste HTML directly from AO3
- 🎨 **Clean, minimal design** - Focused on readability and easy navigation
- 🚀 **Static site** - Fast, secure, and easy to deploy anywhere

## Getting Started

1. **Configure your site** - Edit `src/_data/metadata.json` with your information
2. **Explore the archive** - Browse [/works](/works) to see example work pages
3. **Add your works** - Follow the guide in [Adding Works](/docs/ADDING-WORKS/)
4. **Customize** - Edit this page `src/index.md` with your intro
5. **Hide documentation** - Add `permalink: false` to all files in `src/docs/` and `src/guide.md` before deploying
6. **Deploy** - See [Deployment](/docs/DEPLOYMENT/) when you’re ready to publish

## Documentation

- **[Setup Guide](/docs/SETUP/)** - Installation and configuration
- **[Adding Works](/docs/ADDING-WORKS/)** - How to add one-shot works
- **[Multi-Chapter Works](/docs/MULTI-CHAPTER-WORKS/)** - Creating multi-chapter fics
- **[Frontmatter Reference](/docs/FRONTMATTER-REFERENCE/)** - Complete metadata field documentation
- **[Deployment](/docs/DEPLOYMENT/)** - Publishing your archive
- **[Troubleshooting](/docs/TROUBLESHOOTING/)** - Common issues and solutions

## Quick Reference

### Commands

```bash
npm start       # Start development server with live reload
npm run build   # Build production site to public/
```

### VS Code Snippets

This project includes snippets for quickly inserting frontmatter:

1. Press `Ctrl` + `Shift` + `P` (or `Cmd` + `Shift` + `P` on Mac)
2. Type “Insert snippet”
3. Choose:
   - `fic-oneshot` - One-shot work template
   - `fic-multi` - Multi-chapter work template
   - `fic-chapter` - Individual chapter template

## Support

Need help? Read the [Troubleshooting guide](/docs/TROUBLESHOOTING/) or check out the [original guide](/guide/) for a quick overview.

For more detailed help, send an email to [10kph@proton.me](mailto:10kph@proton.me) with a link to your repository.

---

**Note:** This is a starter template. The example works included are for demonstration purposes only. Feel free to delete them and add your own!