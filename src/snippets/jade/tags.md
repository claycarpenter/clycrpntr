---
title: Jade Tag Basics
tags: jade
template: /base.jade
category: snippet
---

The most basic Jade statements are tags and the doctype. Tags are simple: in general, any word that begins a line (ignoring preceding whitespace) is interpreted as an HTML tag. This is a simple `hr` element:

```
hr
```

Tags are nested using indentation:

```
ul
  li
  li
```

Compiles to:

```
<ul>
  <li></li>
  <li></li>
</ul>
```

Simple nesting can also be accomplished with the block expansion shorthand. Here is an `li` tag that wraps around a nested `img` tag:

```
li: img
```

Tags can be given basic plaintext content by adding that content after the tag declaration. For instance:

```
h1 Header
```

Becomes:

```
<h1>Header</h1>
```

Jade will also intelligently render self-closing tags where appropriate:

```
hr    //- <hr>
img   //- <img>
li    //- <li></li>
```
