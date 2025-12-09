---
title: Troubleshooting
layout: base.njk
---

This guide covers common issues you might encounter and how to solve them.

### General troubleshooting steps

Before diving into specific issues, try these general fixes:

#### 1. Restart the development server

Press `Ctrl` + `C` in the terminal to stop the live update, then run:

```bash
npm start
```

#### 2. Regenerate the static files

Delete the `public/` folder and let Eleventy regenerate it:

```bash
rm -rf public
```

Then make any change in any file (or simply press `Ctrl` + `S` to save) to trigger regeneration.

#### 3. Clear your browser cache

Sometimes your browser caches old versions of pages. Try:
- Hard refresh: `Ctrl` + `Shift` + `R` (or `Cmd` + `Shift` + `R` on Mac)
- Clear cache in browser settings
- Try opening in an incognito/private window

### Still having issues?

#### Check the example files

Look at the example works included in the template:
- `src/works/A Gentleman Strikes in Broad Daylight.md` - One-shot example
- `src/works/Collusion.md` - Multi-chapter index example
- `src/works/work-chapters/Collusion - Chapter 1.md` - Chapter example

Compare your files to these examples to see if you’re missing something.

#### Check the Eleventy documentation

For issues specific to Eleventy itself, check the [official documentation](https://www.11ty.dev/docs/).

### Getting help

If you’ve tried the above steps and still can’t solve the issue:

1. **Read [this](http://www.catb.org/esr/faqs/smart-questions.html#before) first**
2. **Gather information:**
   - What were you trying to do?
   - What did you expect to happen?
   - What actually happened?
   - What have you tried so far?
   - Any error messages (include the full text)
3. **Prepare your repository:**
   - Push your code to GitHub (or another Git hosting service)
   - Make sure the issue is reproducible in the repository
4. **Open an issue:**
   - Go to the [GitHub repository](https://github.com/tencurse/ao3-11ty-starter/issues)
   - Click “New Issue”
   - Provide detailed information about the problem
5. **Or contact me at:**
   - Email: [hi@karma.computer](mailto:hi@karma.computer)
   - Include a link to your repository
   - Describe the issue with the information from step 2

### Reporting bugs

Found a bug in the template itself? Please open an issue on the [repository](https://github.com/tencurse/ao3-11ty-starter/issues) with:

- A clear description of the bug
- Steps to reproduce
- Expected behavior vs. actual behavior
- Your environment (OS, Node.js version, etc.)
- Screenshots if applicable

### Contributing

Have a fix for a common issue? Consider contributing to this documentation or the project itself! Pull requests are welcome.
