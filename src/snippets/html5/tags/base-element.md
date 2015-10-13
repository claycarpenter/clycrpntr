---
title: The HTML5 base Element
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `base` element influences how links are interpreted and behave within the HTML document. It has two attributes, `href` and `target`, which relate to the relative links and link behavior respectively. Either attribute is optional, though a `base` element missing both the `href` and `target` attributes doesn't achieve much.

The `href` attribute defines the starting point for interpreting any relative URLs within the document. Both absolute and relative URLs are allowable values for this element. If the URL provided is relative, it appears that the relative URL will be interpreted in the context of the [fallback base URL](http://www.w3.org/TR/html5/infrastructure.html#fallback-base-url). Note that any absolute links in the document will ignore this value.

For instance, this `base` tag will cause all relative links on the page to be resolved relative to the site's `/product` directory:

```
<base href="http://www.example.com/products">
```

The `target` attribute affects the target for all links in the document that don't have their own `target` attribute defined. Allowable values are `_self` (the default), `_blank`, `_parent`, and `_top`.

This `base` tag will cause all links to default to opening in a new browsing context (typically a new tab on modern browsers):

```
<base target="_blank">
```
