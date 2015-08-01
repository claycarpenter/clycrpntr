---
title: Jade Block Expansion
tags: jade
template: /base.jade
category: snippet
---

Jade supports a shorthand syntax for nested tags called block expansion. The syntax allows you to write multiple nested tags on a single line when they're separated by a colon. The general syntax looks like this:

```
tag: nestedTag
```

The most common use I find for this is a simple single nesting construct. Compare these two lists of links:

```
// Using long hand form
ul
  li
    a(href="/1") One
  li
    a(href="/2") Two
  li
    a(href="/3") Three

// Using block expansion
ul
  li: a(href="/1") One
  li: a(href="/2") Two
  li: a(href="/3") Three
```

Both of those examples produce identical lists:

```
<ul>
  <li><a href="/1">One</a></li>
  <li><a href="/2">Two</a></li>
  <li><a href="/3">Three</a></li>
</ul>
```

However, block expansion can also be used to nest more than a single level deep:

```
div: header: h1 Lorem Ipsum
```

```
<div>
  <header>
    <h1>Lorem Ipsum</h1>
  </header>
</div>
```

Block expansion also supports the same tag options available in normal tag constructions, such as class and ID literal attributes:

```
.outer#highlight: .inner: h1 Lorem Ipsum
```

```
<div id="highlight" class="outer">
  <div class="inner">
    <h1>Lorem Ipsum</h1>
  </div>
</div>
```
