---
title: The HTML5 q Element
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `q` element denotes content quoted from another source. The `q` element can seem a bit quirky at first, considering the limitations imposed by [the specification](http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element):

* No quotation marks may either surround or be contained within a `q` element.
* The quote contained with a `q` element must be from another source.
* `q` elements should not be used in place of quotation marks.

`q` elements work well for wrapping an inline quotation, such as this simple example:

```
<p>
  <cite>Abraham Lincoln</cite> once wrote <q>whatever you are, be a good one</q>.
</p>
```

`q` elements shouldn't be used in place of quotation marks when the content isn't actually a quote, such as when quotes are used for sarcasm:

```
<!-- This usage is wrong; don't copy! -->
<p>
  This is not exactly what I'd call <q>food</q>.
</p>
```

That snippet should be written with regular quotation marks instead of employing the `q` tag.

When adding citations to `q` elements, there are two options: either use a `cite` tag as a sibling element, or use the optional `cite` attribute of the `q` element. Here are two alternatives showing the same quote:

```
<!-- Using sibling cite element -->
<p>
  The <cite><a href="http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element">W3C specifications</a></cite> state that q elements <q>must not be used in place of quotation marks that do not represent quotes</q>.
</p>
```

```
<!-- Using the cite attribute -->
<p>
  The W3C specifications state that q elements <q cite="http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element">must not be used in place of quotation marks that do not represent quotes</q>.
</p>
```

`q` element content is limited to phrasing content, so only the types of tags that you'd typically use within a paragraph are suitable for `q` content.
