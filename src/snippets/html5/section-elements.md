---
title: The HTML5 section Element
tags: html5
template: /base.jade
category: snippet
---

The `section` element is generic container intended to represent a section of a web page. Unlike a `div`, a `section` carries semantic meaning that denotes a "thematic grouping of content" (per the [spec](http://www.w3.org/TR/html5/sections.html#the-section-element)). That in turn sounds similar to an `article` element, but an `article` indicates content that can be syndicated; that is, it retains usefulness outside of the application. `section` elements aren't intended to stand alone, and if viewed independently of the application they belong would considered incomplete or even useless.

The spec provides a very useful hint for determining what content makes for a good candidate for the `section` element when it notes that sections will often have a header element (`h1`, `h2`, etc.) as a direct child element. It's worth quoting the spec here: 

> A general rule is that the section element is appropriate only if the element's contents would be listed explicitly in the document's outline.

Some examples of good candidates for `section` markup:

* Chapters within a book.
* Sections within a wiki page.
* Individual items in a gallery.
* Tabs within a tabbed interface.

Note that the `section` element *should not* be used as a generic container devoid of semantic meaning, employed to group styles. For the purpose of styling or scripting, the `div` element is still the recommended tool to deploy.
