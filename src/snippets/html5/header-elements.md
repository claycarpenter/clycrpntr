---
title: The HTML5 header Element
tags: html5
template: /base.jade
category: snippet
---

`header` elements are designed to designate a section's introductory content. Introductory content includes content like titles, tables of contents, navigation, and document metadata like publish date and author byline. To which section a `header` provides introductory content for is determined by that `header`s' ancestry. `header` elements are related to their nearest sectioning ancestor (such as an `article` or `aside`) or sectioning root (e.g., `body`). Because the `header` relates to the nearest sectioning parent, it can be used multiple times in a single document.

The [HTML5 spec](http://www.w3.org/TR/html5/sections.html#the-header-element) definition of a `header` is broader than what many would consider for a header. They're not limited to a simple logo and site nav links, though those are valid examples of `header` content. Though the spec notes that the primary intention of the `header` element was to contain section heading text (in the form of `h1`-`h6` tags), 

Some examples of good candidates for a `header` tag:

* Intra-document navigation (moving between various sections within an article).
* Inter-document navigation (moving between various pages/articles within a site).
* The title of an article, section, aside, or document.
* To provide introductory text for a document. Details such as the publis date, author information and bio, and others.

The `header` is not part of the document outline, and therefore it shouldn't appear as a section in the document navigation.
