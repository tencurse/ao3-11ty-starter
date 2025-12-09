# AO3 11ty Starter

An Eleventy (11ty) static site generator for creating personal fanfiction archives. This template mirrors AO3's metadata structure and generates browsable HTML pages from markdown files with frontmatter.

## Features

- 📚 **AO3-style metadata** - Supports fandoms, tags, relationships, characters, ratings, and warnings
- 📖 **Multi-chapter support** - Create chapter indexes with individual chapter pages
- 🏷️ **Auto-generated indexes** - Automatic tag and fandom pages from your work metadata
- ✍️ **Markdown or HTML** - Write your works in Markdown or paste HTML directly from AO3
- 🎨 **Clean, minimal design** - Focused on readability and easy navigation
- 🚀 **Static site** - Fast, secure, and easy to deploy anywhere

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- A text editor (VS Code recommended for snippet support)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/tencurse/ao3-11ty-starter.git
   cd ao3-11ty-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:8080`

For detailed setup instructions, see [SETUP.md](src/docs/SETUP.md).

## Getting Started

1. **Configure your site** - Edit `src/_data/metadata.json` with your information
2. **Explore the archive** - Browse `/works` to see example work pages
3. **Add your works** - Follow the guide in [ADDING-WORKS.md](src/docs/ADDING-WORKS.md)
4. **Customize** - Edit `src/index.md` with your intro
5. **Hide documentation** - Add `permalink: false` to all files in `src/docs/` before deploying (or delete the folder)
6. **Deploy** - See [DEPLOYMENT.md](src/docs/DEPLOYMENT.md) when you're ready to publish

## Documentation

- **[Setup Guide](src/docs/SETUP.md)** - Installation and configuration
- **[Adding Works](src/docs/ADDING-WORKS.md)** - How to add one-shot works
- **[Multi-Chapter Works](src/docs/MULTI-CHAPTER-WORKS.md)** - Creating multi-chapter fics
- **[Frontmatter Reference](src/docs/FRONTMATTER-REFERENCE.md)** - Complete metadata field documentation
- **[Deployment](src/docs/DEPLOYMENT.md)** - Publishing your archive
- **[Troubleshooting](src/docs/TROUBLESHOOTING.md)** - Common issues and solutions

## Project Structure

```
src/
├── works/              # Your work files (.md or .html)
│   └── work-chapters/  # Individual chapter files
├── _data/
│   └── metadata.json   # Site configuration
├── _includes/          # Layout templates
├── assets/             # CSS and static files
└── templates/          # Frontmatter templates
```

## Commands

```bash
npm start       # Start development server with live reload
npm run build   # Build production site to public/
```

## VS Code Snippets

This project includes snippets for quickly inserting frontmatter:

1. Press `Ctrl` + `Shift` + `P` (or `Cmd` + `Shift` + `P` on Mac)
2. Type "Insert snippet"
3. Choose:
   - `fic-oneshot` - One-shot work template
   - `fic-multi` - Multi-chapter work template
   - `fic-chapter` - Individual chapter template

## Contributing

Found a bug? Have a suggestion? Open an issue on the [repository](https://github.com/tencurse/ao3-11ty-starter/issues).

## Support

Need help? Read the [Troubleshooting guide](docs/TROUBLESHOOTING.md) or send an email to [hi@karma.computer](mailto:hi@karma.computer) with a link to your repository.

Please read [How To Ask Questions The Smart Way](http://www.catb.org/esr/faqs/smart-questions.html#before) before sending an email.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

Created by [Ten](https://karma.computer)

---

**Note:** This is a starter template. The example works included are for demonstration purposes only.
