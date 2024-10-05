---
layout: default
title: Home
---

## Mário Rodrigues
Software Engineering Student


<ul id="post-list">
{% for post in site.posts %}
    <li id="post">
        <a href="{{ post.url }}">{{ post.title }}</a>
        <br>
        <small>Published at: {{ post.date | date: '%d/%m/%Y' }}</small>
    </li>
{% endfor %}
</ul>
