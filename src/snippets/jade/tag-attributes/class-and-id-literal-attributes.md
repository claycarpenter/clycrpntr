---
title: Class and ID Literal Attributes in Jade
tags: jade
template: /base.jade
category: snippet
---

The two most common attribute types in Jade are the class and ID literals. Respectively, these provide shorthand formats for declaring an element's class (or classes) and ID. Both literal attributes use a syntax that's identical to the associated CSS selector: class literals use a `.classname` syntax, while ID literals use a `#id` syntax.

Here, a `p` element is given a class of `warning`:

```
p.warning Don't swim after eating.
```

Compiles to:

```
<p class="warning">Don't swim after eating.</p>
```

That same `p` tag, this time given an ID of `warning`:

```
p#warning Don't swim after eating.
```

Compiles to:

```
<p id="warning">Don't swim after eating.</p>
```

Class literals can also be listed out in sequence, similar to their CSS selector equivalents. Here is a is a link that has three classes: `button`, `large`, and `success`:

```
a.button.large.success Submit
```

Compiles to:

```
<a class="button large success">Submit</a>
```

For both class and ID literals, omitting the tag name will result in a default tag of `div`. Here, are two warnings again using the default `div` tag:

```
.warning Don't swim after eating.
#warning Don't swim after eating.
```

```
<div class="warning">Don't swim after eating.</div>
<div id="warning">Don't swim after eating.</div>
```

Note that these are literal values, and therefore don't support dynamic content. If dynamic class or ID values are needed, that can be accomplished using the long form of attributes declaration.
