---
layout: default
title: Home
---

## Mário Rodrigues
Software Engineering Student


<ul id="post-list">
{% for post in site.posts %}
    <a href="{{ post.url }}">
        <li id="post">
            <h1>{{ post.title }}</h1>
            <br>
            <small>Published at: {{ post.date | date: '%d/%m/%Y' }}</small>
        </li>
    </a>
{% endfor %}
</ul>
