---
title: The HTML5 blockquote Element
tags: html5
template: /base.jade
category: snippet
---

A `blockquote` element contains content that is quoted from another source. Blockquotes commonly include citations (in the form of a `cite` element) that point back to the `blockquote`'s content original source.

Because `blockquote` content should come from *another* source, they're not suitable for use to semantically wrap pull quotes. Pull quotes repeat text from the same article they're contained within, and therefore a better choice for wrapping pull quotes is the `aside` element.

Generally speaking, if the content being wrapped is originally presented on the same page, it's not suitable for a `blockquote`. There is a caveat to this rule: in the case of a single page showing sections of content contributed by multiple people, it is appropriate to use `blockquote` when referencing those contributions by other authors.

A good rule of thumb for applying the `blockquote` element is that if a citation for the content would seem out of place, then the content is probably not a good candidate for a `blockquote`.

`blockquote` content should be honest in representing its source material, but that doesn't mean that the content can't be annotated or otherwise modified. Just make sure that any changes are noted, either implicitly through commonly accepted notations or explicitly. In this example, I annotated the portion of the HTML5 spec that describes annotating `blockquote` content:

```
<blockquote>
  <p>
    The content of a blockquote may be abbreviated, may <strong>have context added</strong> or <strong>may have annotations</strong>. Any such additions or changes to quoted text must be indicated in the text (at the text level). This may mean the use of notational conventions or explicit remarks, such as "<em>emphasis mine</em>".
  </p>
  <small>(emphasis mine)</small>
  <footer><cite><a href="http://www.w3.org/TR/html5/grouping-content.html#the-blockquote-element">HTML5 Spec</a></cite></footer>
</blockquote>
```
