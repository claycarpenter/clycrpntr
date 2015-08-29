---
title: The HTML5 nav Element
tags: html5
template: /base.jade
category: snippet
---

The `nav` element is intended for a section of a page that links to other content, whether that's on the same page or in separate pages. `nav` elements aren't intended to surround any links, but instead should be used when there is a list of navigational links. 

A very common usage wraps the `nav` element around the links in a site `header` or `footer`. This is legal but [discouraged](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav#Summary), as such sections are expected to contain links and therefore the semantic meaning of the anchor tags within the `header` and `footer` elements can be derived from those parents.

This example `nav` block shows navigation links that allow a user to browse the chapters of a book:

```
<nav>
  <ul>
    <li><a href="#">Prev Chapter</a></li>
    <li><a href="#">Table of Contents</a></li>
    <li><a href="#">Next Chapter</a></li>
  </ul>
</nav>
```

Note that the [HTML5 specification recommends](http://www.w3.org/TR/html5/sections.html#the-nav-element) using semantic list items for lists of navigation links. Therefore the above example, wrapping the links in `ul` and `li` tags, is preferred to this example where the anchor tags are simply lined up as sibling elements:

```
<nav>
  <a href="#">Prev Chapter</a>
  <a href="#">Table of Contents</a>
  <a href="#">Next Chapter</a>
</nav>
```

Some good candidates for `nav` elements include:

* A table of contents within a Wiki page.
* Links of related articles within an `aside`.
* A series of links that control the tab visibility on a tab panel interface.
* Site navigation, if those links aren't contained within a `header` or `footer` parent.


