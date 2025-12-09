---
title: Multi-Chapter Works
layout: base.njk
---

# Multi-Chapter Works

This guide will walk you through adding multi-chapter works to your archive. Multi-chapter works require two types of files: a chapter index page and individual chapter pages.

## Overview

For a multi-chapter work, you’ll create:

1. **Chapter index page** - Lives in `src/works/`, shows metadata and lists all chapters
2. **Individual chapter pages** - Live in `src/works/work-chapters/`, one file per chapter

## Quick example

For a work titled “Hello World” with 3 chapters:

```
src/works/
  - Hello World.md          # Chapter index page
  - work-chapters/
    - Hello World - Chapter 1.md
    - Hello World - Chapter 2.md
    - Hello World - Chapter 3.md
```

## Step-by-step guide

### 1. Create the chapter index page

This page will display the work's metadata (fandom, tags, summary, etc.) and a list of chapters.

1. **Create a file** in `src/works/` named `{title}.md` (or `.html`)
2. **Insert frontmatter** using the `fic-multi` snippet or template
3. **Fill out the frontmatter values**
4. **Add any content** you want to appear on the index page (optional)

### 2. Create individual chapter pages

Each chapter needs its own file in the `src/works/work-chapters/` folder.

1. **Create a file** following the naming convention: `{Work Title} - Chapter {N}.md`
2. **Insert frontmatter** using the `fic-chapter` snippet or template
3. **Fill out the frontmatter values**
4. **Add the chapter content** below the frontmatter

**Important:** The work title in the chapter filename must match the parent work’s title **exactly** for the linking to work.

## Frontmatter for multi-chapter works

Multi-chapter works have the same frontmatter as one-shots, with one additional property:

```yml
---
ao3_link: https://archiveofourown.org/works/39908016
title: Collusion
fandom: [Genshin Impact]
characters: [Lumine, Childe]
relationships: [Childe/Lumine]
category: F/M
other_tags: [Enemies to Lovers, Slow Burn]
summary: "A multi-chapter work about..."
start_note: ""
end_note: ""
content_rating: Explicit
content_warning: ["No Archive Warnings Apply"]
status: Completed
date_published: 2020-08-15
date: 2022-06-04
word_count: 51435
chapters: 28
current_chapter_count: 28
---
```

### The `current_chapter_count` property

This value needs to be updated every time you add new chapters. Otherwise, the new chapter won’t be linked in the index.

### The `chapters` property

The `chapters` property becomes **optional** as long as `current_chapter_count` has a value.

- **If the work is complete:** Set both `chapters` and `current_chapter_count` to the total number of chapters
- **If the work is in progress and you know the total:** Set `chapters` to the planned total, `current_chapter_count` to how many are available
- **If the work is in progress and you don't know the total:** Leave `chapters` blank or delete it, set `current_chapter_count` to how many chapters are currently available

### Examples

**Completed work:**
```yml
chapters: 28
current_chapter_count: 28
```

**WIP with known total:**
```yml
chapters: 50
current_chapter_count: 12
```

**WIP with unknown total:**
```yml
current_chapter_count: 12
```

## Frontmatter for individual chapters

Here’s what the frontmatter looks like for individual chapter pages:

```yml
---
ao3_link: https://archiveofourown.org/works/39908016
title: Collusion
date: 2022-06-04
word_count: 1835
chapter_no: 1
chapter_title: "The Beginning"
summary: ""
start_note: ""
end_note: ""
---
```

### Important fields

- **`title`** - Must match the parent work's title **exactly**
- **`chapter_no`** - The chapter number (used for URL generation)
- **`chapter_title`** - Optional title for this specific chapter
- **`ao3_link`** - Should be the same as the parent work's link

When using VS Code snippets, the `title` and `chapter_no` will be automatically filled in from the filename pattern `{title} - Chapter {chapter_no}`.

## File naming convention

Chapter files **must** follow this pattern:

```
{Work Title} - Chapter {Number}.md
```

### Examples

```
Collusion - Chapter 1.md
Collusion - Chapter 2.md
Gods & Monsters - Chapter 1.md
Gods & Monsters - Chapter 2.md
Hello World - Chapter 1.md
Hello World - Chapter 2.md
```

The system uses the filename to extract the work title and chapter number. If the naming doesn’t match the pattern, the automatic linking won't work.

## How the chapter index works

The chapter index page (at `/works/{workId}/`) will automatically:

1. Display the work's metadata (fandom, tags, summary, etc.)
2. List all chapters with links to available chapter pages

### For completed works

If `chapters` is provided and matches `current_chapter_count`, all chapters will be listed and linked.

### For works in progress

**If total chapter count is provided:**
- The index will list all planned chapters
- Only available chapters (up to `current_chapter_count`) will be linked
- Future chapters will be listed but not linked

**If total chapter count is not provided:**
- The index will list only available chapters (up to `current_chapter_count`)
- All listed chapters will be linked

## Examples

### Example 1: Completed work

**Chapter index:** `src/works/Collusion.md`

An example chapter index page can be seen at [/works/39908016/](/works/39908016/).

**Chapters:** `src/works/work-chapters/Collusion - Chapter 1.md`, etc.

An example chapter page can be seen at [/works/39908016/chapter-1/](/works/39908016/chapter-1/).

### Example 2: Work in progress

**Chapter index frontmatter:**
```yml
chapters: 50
current_chapter_count: 12
```

Result: The index will show chapters 1-50, but only chapters 1-12 will be clickable links.

**Chapter index frontmatter:**
```yml
current_chapter_count: 12
```

Result: The index will show only chapters 1-12, all clickable.

## Adding new chapters to a WIP

When you add a new chapter to a work in progress:

1. **Create the chapter file** in `src/works/work-chapters/`
2. **Update `current_chapter_count`** in the parent work's frontmatter
3. **Update `date`** in the parent work's frontmatter to the date the chapter was added

For example, if you’re adding chapter 13:

```yml
# In src/works/Your Work.md
date: 2025-12-08
current_chapter_count: 13
```

## Troubleshooting

### Chapters aren't showing up in the index

- Check that `current_chapter_count` is set correctly in the parent work
- Verify the chapter files are in `src/works/work-chapters/`
- Make sure the chapter filenames follow the pattern exactly

### Chapter links are broken

- Verify the `title` in the chapter frontmatter matches the parent work's title exactly
- Check that `chapter_no` is set correctly
- Make sure the `ao3_link` in the chapter matches the parent work

### Chapters appear in the works list

- Check that `src/works/work-chapters/work-chapters.json` exists and contains:
  ```json
  {
    "permalink": false,
    "eleventyExcludeFromCollections": true
  }
  ```

## Next steps

- **[Frontmatter Reference](/docs/FRONTMATTER-REFERENCE/)** - Complete field documentation
- **[Deployment](/docs/DEPLOYMENT/)** - Ready to publish? Learn how to deploy your archive
- **[Troubleshooting](/docs/TROUBLESHOOTING/)** - More troubleshooting tips
