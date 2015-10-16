---
title: The HTML5 ul Element
tags: html5
template: /base.jade
category: snippet
---

The `ul` does yeoman's work in most HTML documents, serving as a unordered list representation. The unordered list differs from the ordered list in semantics: while the order of an ordered list's items has meaning, an unordered list is intended to represent a group of items "[where changing the order would not materially change the meaning of the document.](http://www.w3.org/TR/html5/grouping-content.html#the-ul-element)".

The `ul` doesn't have a whole lot of options. Global attributes apply, but beyond that there are no other special attributes. What is worth noting is that unordered lists can contain other unordered lists as well as ordered lists. For instance, this list of bands and albums. The bands are presented in no particular order, while the albums are presented as ordered lists, because they're in order of their release date.

```
<ul>
  <li>CHVRCHES
    <li>The Bones of What You Believe</li>
    <li>Every Open Eye</li>
  </li>
  <li>JR JR
    <li>It's A Corporate World</li>
    <li>The Speed of Things</li>
    <li>JR JR</li>
  </li>
```
