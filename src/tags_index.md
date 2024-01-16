---
layout: base.njk
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - works
  addAllPagesToCollections: true
eleventyComputed:
  title: "works tagged: {{ tag }}"
permalink: "/tags/{{ tag | slugify }}/"
---

{% assign taglist = collections[tag] %}

<ul>
{% for work in taglist %}
{% include 'partials/worklist.liquid' %}
{% endfor %}
</ul>