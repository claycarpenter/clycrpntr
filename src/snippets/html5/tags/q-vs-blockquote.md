---
title: Differences Between the q and blockquote Elements
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `q` and `blockquote` elements are ostensibly very similar, with both representing content quoted from another source. While the semantics of the tags are similar, they differ in how they relate to the document flow as well as how they handle quotation marks.

The difference between `q` and `blockquote` elements is somewhat similar to the difference between `span` and `div` elements, respectively. `q` elements are meant to be used inline within paragraph ([phrasing](http://www.w3.org/TR/2013/CR-html5-20130806/dom.html#phrasing-content-1)) content, and can only contain paragraph content. Conversely, `blockquote` elements are block-level sectioning content. They can contain a much broader array of content, including other sectioning content like headings and `footer` elements. `blockquote` elements are also rather unique in that they form a sectioning root. Any sectioning content within the `blockquote` won't be reflected in the document outline established by the `blockquote`'s ancestors. For instance, an `h1` element within a `blockquote` wouldn't show up in the parent document's table of contents.

The difference in handling quotation marks is the more minor of the differences between `q` and `blockquote`. While quotation marks are allowed within `blockquote` content, they are [expressly forbidden](http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element) from occurring within or around `q` elements. The quotation marks surrounding `q` element content is expected to be handled by the user agent, rather than being embedded in the source.

Many thanks to user _unor_ on Stack Overflow for helping to clarify this topic in [this answer](http://stackoverflow.com/a/21885256/1148628) they posted.
