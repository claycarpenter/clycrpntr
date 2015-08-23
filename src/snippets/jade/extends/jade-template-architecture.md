---
title: Jade Template Architecture
tags: jade
template: /base.jade
category: snippet
---

When using template inheritance in Jade (with `extends` and `block` keywords), the output controlled by the child template is limited to only the `block` overrides. Nothing else in the child template file will be included in the final output.

For instance, in this example, the `p` elements outside of the `content` block won't be included in the final output:

```
//- base.jade

doctype html

html
  head
    title Another Extends Example

  body
    block content
```

```
//- example.jade

extends ./base.jade

p Excluded

block content
  p Lorem ipsum...

p Also excluded
```

Produces:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Another Extends Example</title>
  </head>
  <body>
    <p>Lorem ipsum...</p>
  </body>
</html>
```

Perhaps a better way to think of template inheritance is that it acts like the parent template is being compiled, but only pulling selective chunks (defined in the child `block` sections) from the child template. That seems more accurate than thinking of it like the child template is augmenting its own output with that of the inherited parent template.
