---
title: The HTML5 small Element
tags: html5
template: /base.jade
category: snippet
---

The `small` tag is meant to represent "[side comments or small print](http://www.w3.org/TR/html5/text-level-semantics.html#the-small-element)". I find it most helpful to consider `small` the marker of de-emphasized text. A common example is a copyright notice. While the `small` tag used to indicate a decreased font size, it now only means "small" in the sense of "small print". Because the tag is now semantic, its contents are not required to be rendered in any specific form--how a `small` tag's content is presented is up to the stylesheets and user agent.

`small` isn't appropriate for large chunks of what is commonly colloquially called "small text". The spec specifically mentions that sections of text such as terms of use or privacy policies are not suitable content for the `small` tag:

> The text of a page listing terms of use, for instance, would not be a suitable candidate for the small element: in such a case, the text is not a side comment, it is the main content of the page.

Here is an example of a `small` tag being used to mark a licensing notice:

```
<figure>
  <img src="de-blank-painting.jpg">
  <figcaption>
    An excellent example of De Blank's pointillist work.
    <small>(reproduced here with artist's permission)</small>
</figure>
```

Some good candidates for the `small` tag are:

* Copyrights
* Short legal notices
* Attribution or licensing notices
