---
layout: base.njk
pagination:
  data: collections.postsByFandom
  size: 1
  alias: fandom
  addAllPagesToCollections: true
eleventyComputed:
  title: "works in: {{ fandom }}"
permalink: "/fandoms/{{ fandom | slugify }}/"
---

{% assign fandomlist = collections.works | filterByFandom: fandom %}

<ul>
{% for work in fandomlist %}
{% include 'partials/worklist.liquid' %}
{% endfor %}
</ul>