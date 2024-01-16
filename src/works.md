---
title: the archive
layout: base.njk
---

{% for work in collections.works %}
{% include 'partials/worklist.liquid' %}
{% endfor %}
