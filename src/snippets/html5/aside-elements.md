---
title: The HTML5 aside Element
tags: html5
template: /base.jade
category: snippet
---

The `aside` element contains information that is tangentially related to its containing element. An `aside` is always related to its nearest sectioning parent. Sectioning elements in HTML5 are the `body`, `article`, and `section` tags ([MDN] [1]). If an `aside` is a child of an `article` or `section` tag, then it is related to those specific pieces of content. If the `aside` has no `article` or `section` ancestors, then it is considered related to the document/page as a whole. It is in this capacity that the `aside` element makes for a very good fit for the traditional sidebars common in web design.

`aside` elements embellish the content they're related to. You should be able to strip out the `aside` from any document without affecting the document's meaning. Think of removing the advertisements from an article, or the table of contents from a Wiki page. In both cases the removed content is important to the site mission. But the core documents (the article and Wiki page) still retain usefulness without the advertisements or table of content.

Because `aside` elements are meant to embellish their surrounding content, they should not be used for paranthenticals. Removing those parantheticals would alter the meaning of the document.

Some examples of good candidates for the `aside` tag:

* Links related to an `article` (the `aside` would be a child of the `article`)
* Links to recent posts on a blog
* A sidebar containing information that helps explain or expand upon a topic from the main article.
* A sidebar containing navigation options for a site or article.
* Advertisements that relate to the parent article.

[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Defining_Sections_in_HTML5        "MDN - Sections and Outlines of an HTML5 Document"
