---
title: Starter Guide
layout: base.njk
---

This guide will walk you through the essentials of setting up an archive from your works in AO3. Any file or folder not mentioned in this guide should be **ignored** unless you know what you’re doing.

For best results, the manual process is recommended. If you’d like automation, see this [project](https://github.com/thedeadparrot/ao3backup) instead.

### Folder structure

There is a folder named `works` which contains a number of Markdown (`.md`) files. Each Markdown file is named after the title of the work.

```
folder: works/
  - file: Collusion.md
  - file: A Gentleman Strikes in Broad Daylight.md
```

Inside, there’s also another folder named `work-chapters`. This contains a file for each individual chapter of multi-chapter works.

Each file has the naming convention `{ title } - Chapter { number }`. For example: the fifth chapter of a work titled “Hello World,” should have the file name `Hello World - Chapter 5.md`.

```
folder: works/
  - file: Collusion.md
  - file: A Gentleman Strikes in Broad Daylight.md
  - file: Gods & Monsters.md
  - folder: work-chapters/
    - file: Collusion - Chapter 1.md
    - file: Collusion - Chapter 2.md
    - file: Gods & Monsters - Chapter 1.md
    - file: Gods & Monsters - Chapter 1.md (and so on...)
```

You might have also noticed there are JSON files inside: `works.json` and `work-chapters.json`. Feel free to ignore these files.

### Frontmatter data

Each Markdown file has something called “frontmatter data,” which is the thing at the top that looks like this:

```
---
title: Starter Guide
layout: base.njk
---
```

The frontmatter is where properties of the file/page are stored. In the example above, it has `title` for the page title, and `layout` for whichever layout template it should use.

The files inside the `works` and `work-chapters` folder have frontmatter too, but they’re structured in a different way. Here is a sample frontmatter for a **one-shot work**:

```
ao3_link: https://archiveofourown.org/works/48665221
title: A Gentleman Strikes in Broad Daylight
fandom: [Genshin Impact]
characters: [""]
relationships: [""]
category: F/M
other_tags: [""]
summary: ""
start_note: ""
end_note: ""
content_rating: Teen and Up
content_warning: [""] # archive warnings
status: Completed
date_published: 2023-07-18
date: 2023-07-18 # date completed
word_count: 2665
chapters: 1
```

1. `ao3_link` (required): the URL for the work
2. `title` (required): the work title
3. `fandom` (required): list of fandom name/s, comma-separated
 (example: `[Baldur's Gate, Baldur's Gate 3]`)
4. `characters`: list of character name/s, comma-separated
 Follows same principle as #3.
5. `relationships`: list of relationship/s, comma-separated
 Follows same principle as #3.
6. `other_tags`: list of tag/s, comma-separated
 Follows same principle as #3.
7. `summary`: summary of the work, supports HTML formatting
8. `start_note`: notes at the beginning of the work, supports HTML formatting
9. `end_note`: notes at the end of the work, supports HTML formatting
10. `content_rating` (required): follows AO3 values: `Explicit`, `Mature`, `Teen and Up`, `Gen`
11. `content_warning` (required): list of warning/s, comma-separated. You can use AO3’s archive warnings, or make up your own.
 Follows same principle as #3.
12. `status` (required): status of the work: `In Progress`, `Completed`, `Abandoned`
13. `date_published` (required): date when the work was first published/uploaded
14. `date` (required): date when the work was updated/completed (usually would have the same value as `date_published` if it is a one-shot)
15. `word_count` (required): number of words in the work (number values only, **no** commas)
16. `chapters` (required): total number of chapters in the work, value should be `1` if it is a one-shot

For text with special characters, wrap the text with quotation marks "" (**not** these: “”), like so: `fandom: ["Genshin Impact (Video Game)"]`.

Make sure the values in these properties are consistent throughout: `fandom`, `characters`, `relationships`, `tags`. That means the values should have the same formatting and spelling so that the index pages will work. A character tagged `Tartaglia | Childe` in one work and `Childe` in another will list the works in different character pages. (No AO3 tag wrangling magic here, sorry!)

### Snippets

If you’re using [VS Code](https://code.visualstudio.com/), then you’re in luck! You don’t need to memorize all the frontmatter data above when adding your own fics.

1. Create the work file: `{title}.md` inside the `works` folder
2. Press `Ctrl` + `Shift` + `P`. A dialog box will appear.
3. Type: `Insert snippet`. An option “Snippets: Insert snippet” should be highlighted
4. Choose the template you want to insert: `fic-oneshot` for one-shots, `fic-multi` for multi-chapter works, `fic-chapter` for individual chapter pages.
5. Press `Tab` after entering the value you want to go to the next property, or press `Esc` to manually enter the data.

Otherwise, I’ve added a `templates` folder with the frontmatter data so you can simply copy-paste it if that suits you better.

### Adding your own works

There’s two ways you can go about this: the Markdown way or the HTML way. This project was created with Markdown support first, but if you’re not familiar with Markdown formatting, HTML is fine too.

**the HTML way**
1. Download the HTML file on the AO3 work page
2. `Ctrl` + `F` and search `<div class="userstuff">`
3. Copy all the content in between
4. Paste in a new HTML file in the `works` folder: `{title}.html`
5. At the very top of the page, insert frontmatter data (using snippets or copy-pasting it)

Note that if your work has double paragraph spacing, then it’ll show up that way in the static files too. This is why I recommend using Markdown, so you don’t have to worry about deleting the extra `<p>` tags and other extraneous whitespace.

**the Markdown way**
1. Follow steps #1 to #3 of the HTML way
2. Paste the HTML code in this [converter](https://codebeautify.org/html-to-markdown)
3. Copy the converted Markdown code 
4. Paste it in a new Markdown file in the `works` folder: `{title}.md`
5. At the very top of the page, insert frontmatter data (using snippets or copy-pasting it)

You can also copy-paste straight from the AO3 web page into Typora or any Markdown editor you have.

### Adding multi-chapter works

Multi-chapter works have the same frontmatter as one-shots, with an additional property:

```
current_chapter_count: 12
```

This value needs to be updated every time you add new chapters. Otherwise, the new chapter won’t be linked in the index.

The `chapters` property also becomes optional **as long as** `current_chapter_count` has a value. If the multi-chapter work is in progress and you don’t know how many more chapters until it’s completed, leave `chapters` blank or delete the property, then put the current number of chapters in `current_chapter_count`.

1. To add a multi-chapter work, create a file inside the `works` folder. For this example, the title is “Hello World” so the file name must be `Hello World.md` (or `.html`). This will be the chapter index page.
2. Insert the frontmatter data via snippets or copy-pasting.
3. For individual chapter pages, you need to create the file inside the `work-chapters` folder. For the first chapter, the file name must follow the naming convention: `Hello World - Chapter 1.md`.
4. Insert the frontmatter data in the individual chapter page via snippets or copy-pasting.
5. Follow the steps in adding one-shots, creating a new file for each chapter.

If you’ve done it correctly, the page `/works/{workId}` should contain the work metadata (fandom, tags, etc.) with a chapter index—a list of chapters linked to the individual pages.

If the work is in progress and the total chapter count is provided, the chapter index will list all chapters, only linking up to the available chapter.

If the work is in progress and the total chapter count is not provided, the chapter index will list up to the available chapter.

<!-- ### Works that are part of a series -->

### Deployment

- Github pages
- Neocities

### Troubleshooting

- **Restart NPM:** Press `Ctrl` + `C` in the terminal to stop the live update, then enter `npm start` to start it up again.
- **Regenerate the static files:** Delete the `public` folder. Make any change in any file (or simply `Ctrl` + `S`) to re-generate the files.

Need more help? Feel free to send me an [email](mailto:10kph@proton.me) with your question and include a link to your Github (or other remote) repository in the e-mail. Please also read [this](http://www.catb.org/esr/faqs/smart-questions.html#before) before sending an e-mail.

Got feedback on how to improve this project? Found a bug? Open an issue on the [repository](https://github.com/tencurse/ao3-11ty-starter/issues).