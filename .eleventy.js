const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
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
    width: 16,
    height: 16,
  });

  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "\n",
    preAttributes: {
      tabindex: 0,

      // Added in 4.1.0 you can use callback functions too
      "data-language": function ({ language, content, options }) {
        return language;
      },
    },
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

  eleventyConfig.addCollection("postsByTag", function (collection) {
    const tagsSet = new Set();
    collection.getAll().forEach((item) => {
      if ("tags" in item.data) {
        item.data.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  });

  eleventyConfig.addCollection("postsByFandom", function (collection) {
    const tagsSet = new Set();
    collection.getAll().forEach((item) => {
      if ("fandom" in item.data) {
        item.data.fandom.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  });

  eleventyConfig.addFilter("find", function find(collection = [], slug = "") {
    return collection.filter((work) => work.data.title === slug);
  });

  eleventyConfig.addFilter(
    "filterByTag",
    function (collection = [], tag = " ") {
      return collection.filter((work) => work.data.tags.includes(tag));
    }
  );

  eleventyConfig.addFilter("filterByFandom", function (collection = [], fandom ="") {
    return collection.filter((work) => work.data.fandom.includes(fandom));
  })

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "works", "post", "posts"].indexOf(tag) === -1
    );
  });

  eleventyConfig.addFilter("getAllFandoms", (collection) => {
    let fandomSet = new Set();
    for (let item of collection) {
      (item.data.fandom || []).forEach((fandom) => fandomSet.add(fandom));
    }

    return Array.from(fandomSet);
  });

  eleventyConfig.addFilter("getWorkId", function (url) {
    const workId = url.match(/\/works\/(\d+)/);
    return workId[1];
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
