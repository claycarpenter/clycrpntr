---
title: The HTML5 abbr Element
tags: html5
template: /base.jade
category: snippet
---

An `abbr` element is used to mark an abbreviation, initialism or acronym. It can optionally be augmented with an expansion of that abbreviation, held in the `title` attribute.

It's not necessary to wrap every abbreviation in an `abbr` tag. The technique is meant to be employed in a few situations where it can have value:

* For abbreviations where an expansion would be helpful. This is commonly the case when introducing abbreviations that the expected readers are unlikely to be familiar with.
* For abbreviations where an expansion might be helpful, but doesn't need to be provided inline (it will be available through the `title` attribute behavior of the user agent).
* For abbreviations that don't need an expansion, but do need certain styles applied.

`abbr` elements remain independent, even if they wrap identical abbreviations. This means that if an abbreviation is expanded (with a `title` value) in an initial `abbr` declaration, that same expansion *will not* be used for any subsequent `abbr` elements containing the same abbreviation. For instance, in the following example, only the first HTML abbreviation will have a title/expansion:

```
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> is the language of the web.<abbr>HTML</abbr> was originally introduced by Tim Berners-Lee.
</p>
```
