---
title: Jade Template Inheritance Basics
tags: jade
template: /base.jade
category: snippet
---

Jade supports template inheritance. The `extends` keyword allows a Jade template to point to another Jade template as its parent. Child templates can then selectively override their parents using `block` blocks. Jade templates are not limited to a single parent; they can have a full chain of ancestors. We'll focus on a single parent for this example.

In this example, we'll have a base layout template and an article template. The base layout template will define a very simple layout and provide a hook (a `block`) where an inheriting template can inject its own content. The article template will extend (inherit from) the base layout template and provide the content.

Here is the base layout template (`base.jade`), defining a simple layout and a `block` named `content`:

```
//- base.jade

doctype html

html
  head
    title Extends Example

  body
    block content
```

And here is the child article element:

```
//- example.jade

extends ./base.jade

block content
  h1 Article Title

  p Lorem ipsum...
```

Compiling the `example.jade` template will automatically cause Jade to find and include any parent templates (assuming file paths are accurate in the `extends` statement). The result of compiling `exmaple.jade` will look like this:

```
<!DOCTYPE html>
<html>
  <head>
    <title>
      <Extends>Example</Extends>
    </title>
  </head>
  <body>
    <h1>Article Title</h1>
    <p>Lorem ipsum...</p>
  </body>
</html>
```
