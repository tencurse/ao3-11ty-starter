---
title: Adding Works
layout: base.njk
---

# Adding Works

This guide will walk you through adding your own works to the archive. There are two ways you can go about this: the Markdown way or the HTML way.

## Quick overview

1. Create a file in `src/works/` named `{title}.md` or `{title}.html`
2. Add frontmatter data at the top of the file
3. Add the work content below the frontmatter
4. Save and check the result in your browser

## Using VS Code snippets

If you're using [VS Code](https://code.visualstudio.com/), you can use snippets to automatically insert the frontmatter data:

1. Create the work file: `{title}.md` inside the `src/works/` folder
2. Press `Ctrl` + `Shift` + `P` to open the command palette (or click `View` on the menu bar and choose `Command Palette...`)
3. Type: `Insert snippet`
4. Select the option *“Snippets: Insert snippet”*
5. Choose `fic-oneshot` for one-shot works
6. Enter the value for the first property and press `Tab` to go to the next property, or simply press `Esc` to manually enter the data

Certain values like `title` and `date` will be automatically filled in for you. The `date` properties will have the current date as default. You can update these values later.

## Using templates

If you're not using VS Code, there's a `src/templates/` folder with files containing the frontmatter data. Simply copy-paste from `fic-oneshot.md` into your new work file.

## Method 1: The HTML way

This method is straightforward if you want to preserve the exact formatting from AO3.

### Steps

1. **Download the HTML file** from the AO3 work page (there's a download button on every work)
2. **Open the HTML file** in a text editor
3. **Find the content**: Press `Ctrl` + `F` and search for `<div class="userstuff">`
4. **Copy the content** between `<div class="userstuff">` and `</div>`
5. **Create a new file** in `src/works/` named `{title}.html`
6. **Insert frontmatter** at the very top of the file (using snippets or copy-pasting from templates)
7. **Paste the content** below the frontmatter
8. **Fill out the frontmatter values** (see [Frontmatter Reference](FRONTMATTER-REFERENCE.md))

### Example

An example work page that uses HTML formatting can be found at [/works/51731500](/works/51731500). The source file is `src/works/if he had a hundred years.html`.

### Note about formatting

If your work has double paragraph spacing on AO3, it'll show up that way in the static files too. This is why the Markdown method is recommended—you don't have to worry about deleting extra `<p>` tags and other extraneous whitespace.

## Method 2: The Markdown way (recommended)

This method gives you cleaner, more maintainable files.

### Steps

1. **Download the HTML file** from the AO3 work page
2. **Open the HTML file** in a text editor
3. **Find the content**: Press `Ctrl` + `F` and search for `<div class="userstuff">`
4. **Copy the content** between `<div class="userstuff">` and `</div>`
5. **Convert to Markdown**: Paste the HTML code in this [converter](https://codebeautify.org/html-to-markdown)
6. **Copy the converted Markdown** code
7. **Create a new file** in `src/works/` named `{title}.md`
8. **Insert frontmatter** at the very top of the file (using snippets or copy-pasting from templates)
9. **Paste the Markdown content** below the frontmatter
10. **Fill out the frontmatter values** (see [Frontmatter Reference](FRONTMATTER-REFERENCE.md))

You can also copy-paste straight from the AO3 web page into Typora or any Markdown editor you have. Most Markdown editors will automatically convert the HTML to Markdown.

### Example

An example work page that uses Markdown formatting can be found at [/works/48665221](/works/48665221). The source file is `src/works/A Gentleman Strikes in Broad Daylight.md`.

## Mixing HTML and Markdown

You can have a mix of HTML and Markdown files in the `src/works/` folder:

```
src/works/
  - Collusion.md
  - if he had a hundred years.html
  - A Gentleman Strikes in Broad Daylight.md
```

This setup works fine, as long as the frontmatter data is present in all files.

## Sample frontmatter for one-shots

Here's what the frontmatter looks like for a one-shot work:

```yml
---
ao3_link: https://archiveofourown.org/works/48665221
title: A Gentleman Strikes in Broad Daylight
fandom: [Genshin Impact]
characters: [Lumine, Childe]
relationships: [Childe/Lumine]
category: F/M
other_tags: [Fluff, Canon Divergence]
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
start_note: "Aenean in justo et lectus accumsan mattis quis nec urna."
end_note: "Maecenas ultrices sem at orci dignissim, at ornare dolor fringilla."
content_rating: Teen and Up
content_warning: ["No Archive Warnings Apply"]
status: Completed
date_published: 2023-07-18
date: 2023-07-18
word_count: 2665
chapters: 1
---
```

For a complete explanation of each field, see the [Frontmatter Reference](/docs/FRONTMATTER-REFERENCE/).

## Important notes

### Required fields

Make sure you fill out all required fields (marked with * in the reference):
- `ao3_link`
- `title`
- `fandom`
- `content_rating`
- `content_warning`
- `status`
- `date_published`
- `date`
- `word_count`
- `chapters` (should be `1` for one-shots)

### Special characters

For text with special characters, wrap the text with quotation marks "" (**not** these: “”), like so:

```yml
fandom: ["Genshin Impact (Video Game)"]
summary: "She said, \"Hello, world!\""
```

### Consistency matters

Make sure the values in these properties are consistent throughout all your works:
- `fandom`
- `characters`
- `relationships`
- `tags`

That means the values should have the same formatting and spelling so that the index pages will work. A character tagged `Tartaglia | Childe` in one work and `Childe` in another will list the works in different character pages. (No AO3 tag wrangling magic here, sorry!)

## Next steps

- **[Multi-Chapter Works](/docs/MULTI-CHAPTER-WORKS/)** - Learn how to add multi-chapter fics
- **[Frontmatter Reference](/docs/FRONTMATTER-REFERENCE/)** - Complete field documentation
- **[Deployment](/docs/DEPLOYMENT/)** - Ready to publish? Learn how to deploy your archive
