---
title: the archive
layout: base.njk
---

{% for work in collections.works %}
<section>

### [{{ work.data.title }}]({{ work.page.url }})

{% if work.data.chapters or work.data.current_chapter_count %}
<p><b class="text-small text-uppercase">CONTENT RATING</b> {{ work.data.content_rating }}</p>
<p><b class="text-small text-uppercase">CONTENT WARNING</b> {% for w in work.data.content_warning %}{{ w }}{% if w != work.data.content_warning.last%}, {% endif %}{%endfor%}</p>
<p><b class="text-small text-uppercase">FANDOM</b> {{ work.data.fandom }}</p>
<p><b class="text-small text-uppercase">CATEGORY</b> {{ work.data.category }}</p>
{% if work.data.relationships and work.data.relationships.size >= 1 %}<p><b class="text-small text-uppercase">RELATIONSHIPS</b>  {% for s in work.data.relationships %}{{ s }}{% if s != work.data.relationships.last%}, {% endif %}{%endfor%}</p>{% endif %}
{% if work.data.characters and work.data.characters.size >= 1 %}<p><b class="text-small text-uppercase">CHARACTERS</b>  {% for c in work.data.characters %}{{ c }}{% if c != work.data.characters.last%}, {% endif %}{%endfor%}</p>{% endif %}
{% if work.data.tags and work.data.tags.size >= 2 %}<p><b class="text-small text-uppercase">TAGS</b>  {% for t in work.data.tags %}{% if t != 'works' %}{{ t }}{% if t != work.data.tags.last%}, {% endif %}{% endif %}{%endfor%}</p>{% endif %}
{% endif %}
<p><b class="text-small text-uppercase">WORD COUNT</b> {{ work.data.word_count | formatNum }}</p>
<p><b class="text-small text-uppercase">PUBLISHED</b> {{ work.data.date_published | toUTC }}</p>
<p><b class="text-small text-uppercase">{% if work.data.status == 'Completed' %}COMPLETED{% elsif work.data.status == 'In Progress' %}UPDATED{% endif %}</b> {{ work.data.date | toUTC }}</p>
{% if work.data.summary and work.data.summary != "" %}
<p><b class="text-small text-uppercase">SUMMARY</b></p>
<blockquote>{{ work.data.summary }}</blockquote>

{% endif %}
</section>
{% endfor %}
