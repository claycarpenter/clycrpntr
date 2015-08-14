---
title: Block Content in Jade Mixins
tags: jade
template: /base.jade
category: snippet
---

Jade mixins can also accept block content. Within the mixin scope, a `block` value will be available that will represent any content indented below the mixin call statement.

Here is an example of a very simple mixin that constructs a new `section` with the given title and block content:

```
mixin sectionBuilder(title)
  section
    h1= title

    block
```

Calling the mixin:

```
+sectionBuilder('Small Section')
  p Lorem ipsum...
```

Produces:

```
<section>
  <h1>Small Section</h1>
  <p>Lorem ipsum...</p>
</section>
```

The `block` value will be undefined if no block content is provided for the mixin call statement. So you can test for block content presence and then provide a default like so:

```
mixin defaultBuilder
  if block
    // Block content present, output
    block
  else
    // Block content absent, output default
    p Default content
```

Calling that mixin like so:

```
+defaultBuilder

+defaultBuilder
  p Some awesome content
```

Produces:

```
<p>Default content</p>

<p>Some awesome content</p>
```
