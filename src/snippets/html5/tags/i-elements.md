---
title: The HTML5 i Element
tags: html5
template: /base.jade
category: snippet
---

The `i` element represents text that is "[offset from normal prose](http://www.w3.org/TR/html5/text-level-semantics.html#the-i-element)". The `i` tag carries no specific meaning, and should therefore be avoided when more specific and meaningful tags could be used in its place. Some alternate tags [suggested by MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i#Notes) are `em`, `strong`, `mark`, `cite`, and `dfn`.

Candidates for `i` content include:

* Technical terms
* A phrase from another language
* A thought or dream

In this example, a technical term (Homo erectus) is wrapped in `i` tags:

```
<p>
  According to <cite><a href="https://en.wikipedia.org/wiki/Homo_erectus">Wikipedia</a></cite>, <i>Homo erectus</i> skeletons date to as old as 1.9 million years.
</p>
```

Here, `i` is used to indicate a thought that a character has:

```
<p><i>I wonder if we have any ice cream left</i>, he thought to himself as he walked to the freezer.</p>
```

While `i` elements are commonly presented as italicized text, that presentation can be altered by stylesheets and therefore it shouldn't be assumed that content within an `i` element will be italicized.

It's a best practice to add a `class` attribute value that indicates the type of alternate voice being used, so that those instances can be selectively styled later using stylesheets.
