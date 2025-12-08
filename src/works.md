---
title: the archive
layout: base.njk
pagination:
  data: collections.works
  size: 10
  alias: pagedWorks
permalink: "/works/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber | plus: 1 }}/{% endif %}"
---

{% for work in pagedWorks %}
{% include 'partials/worklist.liquid' %}
{% endfor %}

<ul class="pagination text-center">{% if pagination.href.previous %}<li><b><a href="{{ pagination.href.previous }}" class="text-small button">← Previous page</a></b></li>{% endif %}{% if pagination.href.next %}<li><b><a href="{{ pagination.href.next }}" class="text-small button">Next page →</a></b></li>{% endif %}</ul>