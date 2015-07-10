---
title: Comments In Jade
tags: jade
template: /base.jade
category: snippet
---

For comments, Jade supports a shorthand similar to the JavaScript syntax. Single-line comments begin with a `//` and continue to the end of the line, much like their JavaScript counterparts:

```
// A short comment
```

Comments are transpiled into the corresponding HTML comment tag:

```
<!-- A short comment -->
```

Multi-line or block comments are achieved by indenting the lines following a comment statement:

```
//
  This is a much longer comment
  that spans two lines.
```

Multi-line comments can also have text on the first line:

```
// This poorly written
  haiku does not belong here.
  But at least it fits
```

In the case of multi-line comments, any line breaks will be preserved in the generated HTML:

```
<!-- This poorly written
haiku does not belong here.
But at least it fits
-->
```

Comments can also be marked so that they aren't included in the HTML output. Using the `//-` statement to introduce a comment leaves that comment in the source Jade file but not in the generated HTML. This works equally well for single- and multi-line comments:

```
//- This comment will be excluded.
//-
  This longer comment will also
  be excluded from the output.
```
