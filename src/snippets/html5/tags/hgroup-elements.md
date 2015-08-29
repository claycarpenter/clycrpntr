---
title: The HTML5 hgroup Element
tags: html5
template: /base.jade
category: snippet
---

An `hgroup` allows a multi-element title to be applied to a section. Generically, multi-element titles can be thought of as titles with subtitles. An `hgroup` allows that full group of titles to be applied as a single title to the containing section. `hgroup` children must entirely consist of heading content elements: `h1` - `h6`. The `hgroup` will take on the rank of the highest ranked child heading content element.

The `hgroup` in this snippet will have a rank of `h1`:

```
<hgroup>
    <h1>Title</h1>
    <h2>Subtitle</h2>
</hgroup>
```

While the `hgroup` in this snippet takes the rank of it's highest ranked child, `h3`:

```
<hgroup>
    <h3>Section Title</h3>
    <h4>Subtitle</h4>
</hgroup>
```

By combining multi-level titles under a single title group and rank, `hgroup` allows document authors to add complex subtitles to titles without having those subtitles show up in the document outline. It's like saying of the subtitle "this is important enough to present as a header-level item, but it doesn't belong in the document outline".

`hgroup` works great when the subtitle is a piece of explanatory text, as in [this example from the spec](https://html.spec.whatwg.org/multipage/semantics.html#the-hgroup-element):

```
<hgroup>
  <h1>Wallet Setup</h1>
  <h2>Configure your Wallet funding source</h2>
</hgroup>
```

In that example, "Wallet Setup" would be the concise content of the section title in the document outline. The `h2` content would then help orient users by ellaborating on the terse main title text.

Some examples of subheadings where an `hgroup` wrapper would be useful:

* Subtitles or alternative titles.
* Taglines.
* High-level explanatory text.
