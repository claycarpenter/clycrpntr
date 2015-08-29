---
title: The HTML5 figure Element
tags: html5
template: /base.jade
category: snippet
---

The `figure` element represents content that is self-contained but included in and referenced from the main document flow. `figure` elements can be given a caption with an optional child `figcaption` element. 

Unlike an `aside`, a `figure`'s contents are included in the document or section. Like an `aside`, the `figure` is expected to be wholly self-contained. By being self-contained, the `figure` can be floated to different areas of the document. From the [spec](http://www.w3.org/TR/html5/grouping-content.html#the-figure-element): 

> When a figure is referred to from the main content of the document by identifying it by its caption (e.g. by figure number), it enables such content to be easily moved away from that primary content, e.g. to the side of the page, to dedicated pages, or to an appendix, without affecting the flow of the document.

Because a `figure` is contained within the document, those contents shouldn't be able to be removed without negatively affecting the document's meaning. That contrasts with an `aside` element, whose content is meant to be entirely optional.

If a `figure` element contains multiple `figcaption` children, then only the first has semantic meaning as the caption for the figure.

`figure` elements can also be nested, of the inner `figure`s would benefit from being grouped and presented with a more general caption.

Some examples of good candidates for a `figure` tag:

* Illustrations and diagrams.
* Photos.
* Code samples.
* Videos.
* Example text that is referred to from within the document.
