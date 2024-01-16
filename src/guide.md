---
title: Starter Guide
layout: base.njk
---

This guide will walk you through the essentials of setting up an archive from your works in AO3. Any file or folder not mentioned in this guide should be **ignored** unless you know what you’re doing.

For best results, the manual process is recommended. If you’d like automation, see this [project](https://github.com/thedeadparrot/ao3backup) instead.

As an overview, here are the contents of this guide:
- **Folder structure** - information on the folder structure and file naming conventions
- **Frontmatter data** - metadata properties and definitions for a work
- **Snippets and templates** - a shortcut to insert the frontmatter data
- **Adding your own works** - instructions on how to create a work page
- **Adding multi-chapter works** - instructions on creating multi-chapter works and the individual chapter pages
- **Deployment** - a guide on uploading your statically generated site
- **Troubleshooting** - how to troubleshoot and contact information if you need help

### Folder structure

There is a folder named `works` which contains a number of Markdown (`.md`) files. Each Markdown file represents a web page, and is named after the title of the work.

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

Each Markdown file has something called “frontmatter data,” which is the thing at the top of the file that looks like this:

```yml
---
title: Starter Guide
layout: base.njk
---
```

The frontmatter is where metadata of the file/page are stored. In the example above, it has `title` for the page title, and `layout` for whichever layout template it should use.

The files inside the `works` and `work-chapters` folder have frontmatter too, but they’re structured in a different way. Here is a sample frontmatter for a **one-shot work**:

```yml
---
ao3_link: https://archiveofourown.org/works/48665221
title: A Gentleman Strikes in Broad Daylight
fandom: [Genshin Impact]
characters: [Lumine, Childe]
relationships: [Childe/Lumine]
category: F/M
other_tags: [Fluff, Canon Divergence]
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh magna, ullamcorper mattis dignissim nec, imperdiet ut tellus."
start_note: "Aenean in justo et lectus accumsan mattis quis nec urna."
end_note: "Maecenas ultrices sem at orci dignissim, at ornare dolor fringilla."
content_rating: Teen and Up
content_warning: ["No Archive Warnings Apply"] # archive warnings
status: Completed
date_published: 2023-07-18
date: 2023-07-18 # date completed
word_count: 2665
chapters: 1
---
```

| Property<br />(\* - required) | Value                                                        |
| ----------------------------- | ------------------------------------------------------------ |
| `ao3_link`\*                  | the URL for the work                                         |
| `title`\*                     | the work title                                               |
| `fandom`\*                    | list of fandom name/s, comma-separated<br />ex: `[Baldur's Gate, Baldur's Gate 3]` |
| `characters`                  | list of character name/s, comma-separated                    |
| `relationships`               | list of relationship/s, comma-separated                      |
| `tags`                        | list of tag/s, comma-separated                               |
| `summary`                     | summary of the work, supports HTML formatting                |
| `start_note`                  | notes at the beginning of the work, supports HTML formatting |
| `end_note`                    | notes at the end of the work, supports HTML formatting       |
| `content_rating`\*            | follows AO3 values: `Explicit`, `Mature`, `Teen and Up`, `Gen`. Only choose one |
| `content_warning`\*           | list of warning/s, comma-separated. You can use AO3’s archive warnings, or make up your own |
| `status`\*                    | follows these values: `In Progress`, `Completed`. Only choose one |
| `date_published`\*            | date when the work was first published/uploaded, `YYYY-MM-DD` format |
| `date`\*                      | date when the work was updated/completed (usually would have the same value as `date_published` if it is a one-shot) |
| `word_count`\*                | number of words in the work (number values only, **no** commas) |
| `chapters`\*                  | total number of chapters in the work, value should be `1` if it is a one-shot |

For text with special characters, wrap the text with quotation marks "" (**not** these: “”), like so: `fandom: ["Genshin Impact (Video Game)"]`.

Make sure the values in these properties are consistent throughout:
- `fandom`
- `characters`
- `relationships`
- `tags` 

That means the values should have the same formatting and spelling so that the index pages will work. A character tagged `Tartaglia | Childe` in one work and `Childe` in another will list the works in different character pages. (No AO3 tag wrangling magic here, sorry!)

Multi-chapter works and individual chapter pages have slightly differing frontmatter, which will be discussed further below.

### Snippets and templates

If you’re using [VS Code](https://code.visualstudio.com/), then you’re in luck! You don’t need to manually type all the frontmatter data above when adding your own fics.

This project comes with user snippets to automatically insert the frontmatter data for the type of work (one-shot, multi, etc):

1. Create the work file: `{title}.md` inside the `works` folder.
2. Press `Ctrl` + `Shift` + `P` to open the command palette (or click `View` on the menu bar and choose `Command Palette...`).
3. Type: `Insert snippet`.
4. Select the option *“Snippets: Insert snippet”*.
5. Choose the template you want to insert: `fic-oneshot` for one-shots, `fic-multi` for multi-chapter works, `fic-chapter` for individual chapter pages.
6. Enter the value for the first property and press `Tab` to go to the next property, or simply press `Esc` to manually enter the data.

Certain values like `title` and `date` will be automatically filled in for you. The `title` and `chapter_no` comes from the file name, and the `date` properties will have the current date as default. You can update these values later.

Otherwise, I’ve added a `templates` folder with files containing the frontmatter data so you can simply copy-paste it if that suits you better.

### Adding your own works

There’s two ways you can go about this: the Markdown way or the HTML way. This project was created with Markdown support first, but if you’re not familiar with Markdown formatting, HTML is fine too.

#### the HTML way
1. Download the HTML file on the AO3 work page
2. `Ctrl` + `F` and search `<div class="userstuff">`
3. Copy all the content in between `<div class="userstuff">` and `</div>`
4. Paste in a new HTML file in the `works` folder: `{title}.html`
5. At the very top of the page, insert frontmatter data (using snippets or copy-pasting)
6. Fill out the values for the frontmatter data

Note that if your work has double paragraph spacing, then it’ll show up that way in the static files too. This is why I recommend using Markdown, so you don’t have to worry about deleting the extra `<p>` tags and other extraneous whitespace.

An example work page that uses HTML formatting is [here](/works/51731500). (File name: `if he had a hundred years.html`)

#### the Markdown way
1. Follow steps #1 to #3 of the HTML way
2. Paste the HTML code in this [converter](https://codebeautify.org/html-to-markdown)
3. Copy the converted Markdown code 
4. Paste it in a new Markdown file in the `works` folder: `{title}.md`
5. At the very top of the page, insert frontmatter data (using snippets or copy-pasting)
6. Fill out the values for the frontmatter data

You can also copy-paste straight from the AO3 web page into Typora or any Markdown editor you have.

An example work page that uses Markdown formatting is [here](/works/48665221). (File name: `A Gentleman Strikes in Broad Daylight.md`)

You can have a mix of HTML and Markdown files as web pages in the `works` folder:

```
folder: works/
  - file: Collusion.md
  - file: if he had a hundred years.html
```

This setup works fine, as long as the frontmatter data is present in the files.

### Adding multi-chapter works

Multi-chapter works have the same frontmatter as one-shots, with an additional property:

```yml
current_chapter_count: 12
```

This value needs to be updated every time you add new chapters. Otherwise, the new chapter won’t be linked in the index.

The `chapters` property also becomes optional **as long as** `current_chapter_count` has a value. If the multi-chapter work is in progress and you don’t know how many more chapters until it’s completed, leave `chapters` blank or delete the property, then put the current number of chapters in `current_chapter_count`.

1. To add a multi-chapter work, create a file inside the `works` folder. For this example, the title is “Hello World” so the file name must be `Hello World.md` (or `.html`). This will be the chapter index page.
2. Insert the frontmatter data via snippets or copy-pasting.
3. Fill out the values for the frontmatter data.
4. For individual chapter pages, you need to create the file inside the `work-chapters` folder. For the first chapter, the file name must follow the naming convention: `Hello World - Chapter 1.md`.
5. Insert the frontmatter data from the template `fic-multi` in each individual chapter page, via snippets or copy-pasting.
6. Fill out the values for the frontmatter data.

Here’s what the frontmatter data for individual chapter pages look like:

```yml
---
ao3_link: 
title: Collusion
date: 2022-06-04
word_count: 1835
chapter_no: 1
chapter_total: 28 # change to calculate from parent
summary: ""
start_note: ""
end_note: ""
---
```

When inserting via snippets, it’ll automatically fill in the `title` and `chapter_no` properties from the file name pattern `{title} - Chapter {chapter_no}`.

If you’ve done it correctly, the page `/works/{workId}` should contain the work metadata (fandom, tags, etc.) with a chapter index—a list of chapters linked to the individual pages.

An example chapter index page can be seen [here](/works/39908016/). (File name: `Collusion.md`) An example chapter page can be seen [here](/works/39908016/chapter-1/). (File name: `work-chapters/Collusion - Chapter 1.md`)

If the work is in progress and the total chapter count is provided, the chapter index will list all chapters, only linking up to the available chapter.

If the work is in progress and the total chapter count is not provided, the chapter index will list up to the available chapter.

<!-- ### Works that are part of a series -->

### Deployment

- Github pages
- Neocities

### Troubleshooting

- **Restart NPM:** Press `Ctrl` + `C` in the terminal to stop the live update, then enter `npm start` to start it up again.
- **Regenerate the static files:** Delete the `public` folder. Make any change in any file (or simply `Ctrl` + `S`) to re-generate the files.

Need help? Feel free to send me an [email](mailto:10kph@proton.me) with your question and include a link to your Github (or other remote) repository in the e-mail. Please also read [this](http://www.catb.org/esr/faqs/smart-questions.html#before) before sending an e-mail.

Got feedback on how to improve this project? Found a bug? Open an issue on the [repository](https://github.com/tencurse/ao3-11ty-starter/issues).