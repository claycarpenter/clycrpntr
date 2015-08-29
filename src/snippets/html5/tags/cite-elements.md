---
title: The HTML5 cite Element
tags: html5
template: /base.jade
category: snippet
---

A `cite` element contains a reference to a creative work or the source of a creative work. It could be the name of a poem, but `cite` can also indicate the speaker of a quote. The spec is very broad in its [defintion of creative works](http://www.w3.org/TR/html5/text-level-semantics.html#the-cite-element):

> Creative works include a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, a web site, a web page, a blog post or comment, a forum post or comment, a tweet, a written or oral statement, etc.

The contents of the `cite` tag must include at least one of these three items:

* The title of a creative work
* The author (person, people, or organization) or a creative work
* A URL reference to a creative work

An example of using `cite` to cite the source of a quote:

```
<p>
  Whenever I'm questioning my path in life, I remember this advice from <cite>Nelson Mandela</cite>: <q>"What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead."</q>
</p>
```
