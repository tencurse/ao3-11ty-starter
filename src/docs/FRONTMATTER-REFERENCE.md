---
title: Frontmatter Reference
layout: base.njk
---

This is a comprehensive reference for all frontmatter fields used in work and chapter files.

### What is frontmatter?

Frontmatter is the metadata at the top of each file that looks like this:

```yml
---
title: Starter Guide
layout: base.njk
---
```

The frontmatter is where metadata of the file/page are stored. For works and chapters, the frontmatter is structured to mirror AO3’s metadata fields.

### Work frontmatter

This applies to files in `src/works/` (both one-shots and multi-chapter works).

#### Complete example

```yml
---
ao3_link: https://archiveofourown.org/works/48665221
title: A Gentleman Strikes in Broad Daylight
fandom: [Genshin Impact]
characters: [Lumine, Childe]
relationships: [Childe/Lumine]
category: F/M
other_tags: [Fluff, Canon Divergence]
summary: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  
  A multi-paragraph summary with **Markdown** formatting.
start_note: |
  Author's note at the beginning.
  
  Can include [links](https://example.com) and other Markdown.
end_note: Author's note at the end. Pipe symbol is optional.
content_rating: Teen and Up
content_warning: ["No Archive Warnings Apply"]
status: Completed
date_published: 2023-07-18
date: 2023-07-18
word_count: 2665
chapters: 1
current_chapter_count: 1
---
```

#### Field reference

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `ao3_link` | **Yes** | String | The full AO3 URL for the work. Used to extract the work ID for permalinks. |
| `title` | **Yes** | String | The work title. Must match exactly across chapter files. |
| `fandom` | **Yes** | Array | List of fandom name(s), comma-separated. Example: `[Baldur's Gate, Baldur's Gate 3]` |
| `characters` | No | Array | List of character name(s), comma-separated. |
| `relationships` | No | Array | List of relationship(s), comma-separated. Example: `[Childe/Lumine]` |
| `category` | No | String | Relationship category. Common values: `F/M`, `M/M`, `F/F`, `Gen`, `Multi`, `Other` |
| `other_tags` | No | Array | List of additional tag(s), comma-separated. |
| `summary` | No | String | Summary of the work. Use `\|` for multi-line with Markdown support (recommended), or wrap in quotes for single-line with HTML. |
| `start_note` | No | String | Author’s notes at the beginning of the work. Use `\|` for multi-line with Markdown support (recommended), or wrap in quotes for HTML. |
| `end_note` | No | String | Author’s notes at the end of the work. Use `\|` for multi-line with Markdown support (recommended), or wrap in quotes for HTML. |
| `content_rating` | **Yes** | String | Content rating. Must be one of: `Explicit`, `Mature`, `Teen and Up`, `Gen` |
| `content_warning` | **Yes** | Array | List of warning(s). Can use AO3's archive warnings or custom ones. Example: `["No Archive Warnings Apply"]`, `["Graphic Depictions Of Violence", "Major Character Death"]` |
| `status` | **Yes** | String | Work status. Must be one of: `In Progress`, `Completed` |
| `date_published` | **Yes** | String | Date when the work was first published. Format: `YYYY-MM-DD` |
| `date` | **Yes** | String | Date when the work was last updated or completed. Format: `YYYY-MM-DD`. For one-shots, usually the same as `date_published`. |
| `word_count` | **Yes** | Number | Total word count. Number values only, **no commas**. Example: `51435` not `51,435` |
| `chapters` | **Yes*** | Number | Total number of chapters. For one-shots, must be `1`. For multi-chapter works, can be omitted if unknown (see below). |
| `current_chapter_count` | No** | Number | Number of currently available chapters. Only needed for multi-chapter works. |

\* Required for one-shots. Optional for multi-chapter works if `current_chapter_count` is provided.

\** Required for multi-chapter works. Not needed for one-shots.

#### One-shots

For one-shot works, `chapters` must be `1` and `current_chapter_count` is not needed:

```yml
chapters: 1
```

#### Multi-chapter works

For multi-chapter works, you must include `current_chapter_count`:

```yml
# Completed work
chapters: 28
current_chapter_count: 28

# WIP with known total
chapters: 50
current_chapter_count: 12

# WIP with unknown total
current_chapter_count: 12
```

See [Multi-Chapter Works](/docs/MULTI-CHAPTER-WORKS/) for more details.

#### Text with special characters

For text with special characters, wrap the text with quotation marks `""` (**not** these: `“”`):

```yml
fandom: ["Genshin Impact (Video Game)"]
summary: "She said, \"Hello, world!\""
title: "A Work: With Colons"
```

#### Arrays vs. strings

Some fields accept arrays (lists), others accept single strings:

**Arrays** (use square brackets and commas):
```yml
fandom: [Genshin Impact, Honkai Star Rail]
characters: [Lumine, Childe, Zhongli]
other_tags: [Fluff, Angst, Hurt/Comfort]
```

**Strings** (single value):
```yml
title: My Work Title
category: F/M
status: Completed
```

#### Multi-line text with Markdown

For multi-line text fields, use the pipe symbol `|` after the property name. This allows you to write multiple paragraphs and use Markdown formatting without needing HTML:

```yml
summary: |
  Childe gets lost in the Chasm and makes an unlikely friend.

  Written for [Tartaglia TM: A +18 Transmasc Childe Zine](https://tartagliatm.carrd.co/).
```

This is the **recommended approach** for `summary`, `start_note`, and `end_note` fields as it’s cleaner and supports Markdown links, emphasis, and other formatting.

#### HTML in text fields (alternative)

You can also use HTML formatting directly if you prefer:

```yml
summary: "A story about <em>love</em> and <strong>loss</strong>."
start_note: "Written for <a href='https://example.com'>Fic Fest 2023</a>."
```

However, using the pipe symbol with Markdown is generally easier to read and write.

### Chapter frontmatter

This applies to files in `src/works/work-chapters/`.

#### Complete example

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

#### Field reference

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `ao3_link` | **Yes** | String | The full AO3 URL for the work. Should match the parent work’s link. |
| `title` | **Yes** | String | The work title. Must match the parent work’s title **exactly**. |
| `date` | **Yes** | String | Date when this chapter was published. Format: `YYYY-MM-DD` |
| `word_count` | **Yes** | Number | Word count for this chapter only. Number values only, no commas. |
| `chapter_no` | **Yes** | Number | The chapter number. Used for URL generation (`/works/{id}/chapter-{n}/`). |
| `chapter_title` | No | String | Optional title for this specific chapter. |
| `summary` | No | String | Chapter-specific summary. Use `\|` for multi-line with Markdown support (recommended). |
| `start_note` | No | String | Chapter-specific notes at the beginning. Use `\|` for multi-line with Markdown support (recommended). |
| `end_note` | No | String | Chapter-specific notes at the end. Use `\|` for multi-line with Markdown support (recommended). |

### Important notes

#### The `title` field

The `title` must match the parent work's title **exactly** for the chapter linking to work. This is how the system finds the parent work.

**Parent work:**
```yml
title: Collusion
```

**Chapter files:**
```yml
title: Collusion  # Must match exactly!
```

#### File naming

Chapter files must follow the naming convention:

```
{Work Title} - Chapter {Number}.md
```

When using VS Code snippets, the `title` and `chapter_no` are automatically extracted from the filename.

### Consistency guidelines

Make sure the values in these properties are consistent throughout all your works:

- `fandom`
- `characters`
- `relationships`
- `other_tags`

That means the values should have the same formatting and spelling so that the index pages will work correctly.

#### Examples of inconsistency

**Bad** (will create separate index pages):
```yml
# Work 1
characters: [Tartaglia | Childe]

# Work 2
characters: [Childe]
```

**Good** (will group together):
```yml
# Work 1
characters: [Childe]

# Work 2
characters: [Childe]
```

The system generates index pages based on these values. If you tag a character as `Tartaglia | Childe` in one work and `Childe` in another, they'll appear on different character index pages. There’s no AO3 tag wrangling magic here—the system treats them as different values.

### Next steps

- **[Adding Works](/docs/ADDING-WORKS/)** - Learn how to add works
- **[Multi-Chapter Works](/docs/MULTI-CHAPTER-WORKS/)** - Learn about multi-chapter works
- **[Troubleshooting](/docs/TROUBLESHOOTING/)** - Common issues and solutions
