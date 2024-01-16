---
title: Starter Guide
layout: base.njk
---

This guide will walk you through the essentials of setting up your own fic archive. Any file or folder not mentioned in this guide should be **ignored** unless you know what you’re doing.

For best results, the manual process is recommended. If you’d like automation, see this [project](https://github.com/thedeadparrot/ao3backup) instead.

### Folder structure

There is a folder named `works` which contains a number of Markdown (`.md`) files. Each Markdown file is named after the title of the work.

```
folder: works/
  - file: Collusion.md
  - file: A Gentleman Strikes in Broad Daylight.md
```

Inside, there’s also another folder named `work-chapters`. This contains a file for each individual chapter of your multi-chapter works.

Each file has the naming convention `{ title } - Chapter { number }`. For example: the fifth chapter of a work titled “Hello World,” the resulting file name would be `Hello World - Chapter 5.md`.

```
folder: works/
  - file: Collusion.md
  - file: A Gentleman Strikes in Broad Daylight.md
  - folder: work-chapters/
    - file: Collusion - Chapter 1.md
    - file: Collusion - Chapter 2.md (and so on...)
```

You might have also noticed there are JSON files inside: `works.json` and `work-chapters.json`. Feel free to ignore these files.

### Frontmatter data

Each markdown file has something called “frontmatter data,” which is the thing at the top that looks like this:

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
7. `summary`: summary of the work, supports HTML formatting. You can see an example of that implementation [here](/works/39908016/)
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

For **multi-chapter works**, there is one additional property:

```
current_chapter_count: 12
```

This value needs to be updated every time you add new chapters. Otherwise, the new chapter won’t be linked in the index.

### Snippets

If you’re using [VS Code](https://code.visualstudio.com/), then you’re in luck! You don’t need to memorize all the frontmatter data above when adding your own fics.

1. Create the work file: `{title}.md` inside the `works` folder
2. Press `Ctrl` + `Shift` + `P`. A dialog box will appear.
3. Type: `Insert snippet`. An option "Snippets: Insert snippet" should be highlighted
4. Choose the template you want to insert: `fic-oneshot` for one-shots, `fic-multi` for multi-chapter works, `fic-chapter` for individual chapter pages.
5. Press `Tab` after entering the value you want to go to the next property, or press `Esc` to manually enter the data.

Otherwise, I’ve added a `templates` folder with the frontmatter data so you can simply copy-paste it if that suits you better.

### Adding one-shot works

### Adding multi-chapter works

### Works that are part of a series

### Troubleshooting

- **Restart NPM:** Press `Ctrl` + `C` in the terminal to stop the live update, then enter `npm start` to start it up again.
- **Regenerate the static files:** Delete the `public` folder. Make any change in any file (or simply `Ctrl` + `S`) to re-generate the files.

Need more help? Feel free to send me an [email](mailto:10kph@proton.me) with your question. Before you do, please read [this](http://www.catb.org/esr/faqs/smart-questions.html#before).

Got feedback on how to improve this project? Found a bug? Open an issue on the [repository](https://github.com/tencurse/ao3-11ty-starter/issues).