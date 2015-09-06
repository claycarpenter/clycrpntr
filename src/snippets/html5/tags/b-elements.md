---
title: The HTML5 b Element
tags: html5
template: /base.jade
category: snippet
---

The `b` element indicates that text should be presented differently without any connotations for the meaning of the content it contains. Unlike the similar `strong` tag, `b` elements don't indicate importance. In effect, `b` tags should be used for presentation purposes only.

One possible use of a `b` tag is to indicate a label that can then be styled with stylesheets:

```
<p><b>First Name:</b> Johnny</p>
```

Because the `b` element is not semantic, the [HTML5 spec recommends](http://www.w3.org/TR/html5/text-level-semantics.html#the-b-element) looking to other tags first before implementing a `b` tag:

> The b element should be used as a last resort when no other element is more appropriate. In particular, headings should use the h1 to h6 elements, stress emphasis should use the em element, importance should be denoted with the strong element, and text marked or highlighted should use the mark element.
