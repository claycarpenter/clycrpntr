---
title: The mark Element
tags: html5
template: /base.jade
category: snippet
---

The `mark` element is used to denote that a particular chunk of text has been highlighted for extra attention. This includes anything that might deserve extra user attention, such as text search matches, important sections of quotations, and user-created highlights.

Some good candidates for `mark` tag content include:

* Representing highlights made by the user
* Marking errors in a document
* Highlighting search result matches
* Adding extra emphasis to certain portions of quotes

Here, the `mark` draws extra emphasis to a single word in the quote:

```
<p>
  It has been said "<q>good artists copy, great artists <mark>steal</mark></q>". The most important idea there is that great artists don't just take other's art, they make it their own.
</p>
```

Here, `mark` is used to highlight matches from a search for the work "tick":

```
<p>
  I was <mark class="match">tick</mark>led to have picked up the <mark class="match">tick</mark>ets.
</p>
```

The [spec suggests](http://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element) that `mark` is not a good choice for syntax highlighting. Instead, look to using `span` to improve the presentation of code samples.
