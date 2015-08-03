---
title: Jade Case Statements
tags: jade
template: /base.jade
category: snippet
---

The Jade `case` statement provides an efficient stand-in for the JS `switch` statement. The structure of a `case` statement is similar to a JS `switch` statement, but the actual keywords vary. Here's how they map:

JS keyword | Jade keyword
--- | ---
switch | case
case | when
default | default

Here is a simple `case` statement that provides a human-friendly readout for the search results count:

```
- var resultsCount = 5
case resultsCount
  when 0
    p No results were found.
  when 1
    p One result was found.
  default
    p #{resultsCount} results were found.
```

```
<p>5 results were found.</p>
```

Note that no `break` statements are needed. Each `when` keyword automatically creates it's own new block. In order to provide fall-through support, list the `when` statements on subsequent lines:

```
// Fall-through
- var resultsCount = 0
case resultsCount
  when 0
  when 1
    p Few results were found.
  default
    p #{resultsCount} results were found.
```

```
<p>Few results were found.</p>
```

Block expansion can also be used to write more precise `when` blocks. The first example, rewritten with block expansion:

```
- var resultsCount = 5
case resultsCount
  when 0: p No results were found.
  when 1: p One result was found.
  default: p #{resultsCount} results were found.
```

```
<p>5 results were found.</p>
```
