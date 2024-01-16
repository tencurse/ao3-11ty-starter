const markdownIt = require("markdown-it");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function (eleventyConfig) {
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  // PLUGINS

  eleventyConfig.addPlugin(lucideIcons, {
    "width": 16,
    "height": 16
  });

  // FILTERS

  eleventyConfig.addFilter("toUTC", function (value) {
    return new Date(value).toLocaleDateString("en-CA", {
      timeZone: "UTC",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("formatNum", function (value) {
    return new Intl.NumberFormat("en-CA").format(value);
  });

  eleventyConfig.addCollection("works", function (collection) {
    return collection.getFilteredByTag("works").reverse();
  });

  eleventyConfig.addFilter("find", function find(collection = [], slug = "") {
    return collection.filter(work => work.data.title === slug);
  });

  // PASSTHROUGH

  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};