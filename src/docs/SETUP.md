---
title: Setup Guide
layout: base.njk
---

This guide will walk you through installing and configuring your AO3 archive.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **A text editor** - [VS Code](https://code.visualstudio.com/) is recommended for snippet support
- **Basic familiarity with the command line** - You’ll need to run a few commands

## Installation

### 1. Get the code

Clone this repository to your local machine:

```bash
git clone https://github.com/tencurse/ao3-11ty-starter.git
cd ao3-11ty-starter
```

Alternatively, you can download the ZIP file from GitHub and extract it.

### 2. Install dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This will download and install Eleventy and other required packages.

### 3. Start the development server

Run the following command:

```bash
npm start
```

You should see output indicating that Eleventy is running. Open your browser to `http://localhost:8080` to view your site.

The development server includes live reload—any changes you make to files will automatically refresh in the browser.

## Configuration

### Site metadata

Edit `src/_data/metadata.json` with your information:

```json
{
  "ao3_username": "your_username",
  "ao3_link": "https://archiveofourown.org/users/your_username",
  "site_title": "Your Archive Name",
  "site_description": "A personal archive of my fanfiction",
  "pagination": 20
}
```

| Property          | Description                                      |
| ----------------- | ------------------------------------------------ |
| `ao3_username`    | Your AO3 username                                |
| `ao3_link`        | Link to your AO3 profile                         |
| `site_title`      | The title of your archive                        |
| `site_description`| A brief description for meta tags                |
| `pagination`      | Number of items per page (currently unused)      |

### Customize the home page

Edit `src/index.md` to add your own introduction or welcome message. This file uses Markdown formatting.

### Styling

CSS files are located in `src/assets/css/`:

- `theme.css` - Color scheme and theming
- `reset.css` - CSS reset for consistent styling
- `styles.css` - Main stylesheet

Feel free to modify these to match your preferred aesthetic.

## Folder structure

Here's what you need to know about the folder structure:

```
src/
├── works/              # Your work files go here
│   ├── {title}.md      # Individual work files
│   └── work-chapters/  # Chapter files for multi-chapter works
├── _data/
│   └── metadata.json   # Site configuration (edit this!)
├── _includes/          # Layout templates (ignore unless customizing)
├── assets/
│   └── css/            # Stylesheets (edit to customize appearance)
└── templates/          # Frontmatter templates for copy-pasting
```

The `public/` folder is auto-generated and should be ignored. It contains the built static site.

## File naming conventions

### Works

Files in `src/works/` should be named after the work title:

```
src/works/
  - A Gentleman Strikes in Broad Daylight.md
  - Collusion.md
  - if he had a hundred years.html
```

You can use either `.md` (Markdown) or `.html` files.

### Chapters

Files in `src/works/work-chapters/` must follow this pattern:

```
{Work Title} - Chapter {Number}.md
```

Examples:
```
src/works/work-chapters/
  - Collusion - Chapter 1.md
  - Collusion - Chapter 2.md
  - Gods & Monsters - Chapter 1.md
  - Gods & Monsters - Chapter 2.md
```

The work title must match **exactly** with the parent work’s title for the chapter linking to work properly.

## Next steps

Now that you’ve got everything set up, you’re ready to start adding your works!

- **[Adding Works](/docs/ADDING-WORKS/)** - Learn how to add one-shot works
- **[Multi-Chapter Works](/docs/MULTI-CHAPTER-WORKS/)** - Learn how to add multi-chapter fics
- **[Frontmatter Reference](/docs/FRONTMATTER-REFERENCE/)** - Complete field documentation

## Troubleshooting

If something isn’t working, check the [Troubleshooting guide](/docs/TROUBLESHOOTING/).
