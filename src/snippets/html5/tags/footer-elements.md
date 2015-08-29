---
title: The HTML5 footer Element
tags: html5
template: /base.jade
category: snippet
---

`footer` elements are designed to contain additional content that is related to, but also included in, its parent. It's a great place for appendices, glossaries, links to related documents, and author bylines. This sounds very similar to an `aside`, but with a key difference: `footer` elements contain content that is a part of the section they're included in, while `aside` elements contain content that is related to the section they're included in.

`footer` elements relate to the nearest sectioning parent, and can therefore be used multiple times in a single document. A common example of this would be a single page that includes a `footer` belonging to its `body` that represents the site-wide footer, while the article shown on the page also has its own `footer` showing the date of publication and the author's name.

A `footer` can contain nearly any child element, other than `footer`, `header`, or `main`. The [spec notes](http://www.w3.org/TR/html5/sections.html#the-footer-element) that this broad range of content is intentional:

> The primary purpose of these elements is merely to help the author write self-explanatory markup that is easy to maintain and style; they are not intended to impose specific structures on authors.

Some examples of good candidates for a `footer` tag:

* Intra-document navigation (moving between various sections within an article).
* Inter-document navigation (moving between various pages/articles within a site).
* Footnotes for an article or section.
* List document or article metadata. Details such as the publish date, author information and bio, and others.
* Feedback or comment forms.
* Appendices.
* Glossaries.
