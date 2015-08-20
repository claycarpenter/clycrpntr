---
title: Jade Template Variable Sharing
tags: jade
template: /base.jade
category: snippet
---

Jade template inheritance allows for multiple blocks to be declared in the parent template and overridden by child templates.

In this example, we'll construct a basic layout parent template with three blocks: `title`, `main`, and `footer`. The child template will override each block.

The base layout:

```
//- base.jade

doctype html

html
  head
    title
      block title

  body
    main
      block main

    footer  
      block footer
```

The child template:

```
//- example.jade

extends ./base.jade

block title
  | Multiple Extends Example

block main
  h1 Article Title

  p Lorem ipsum...

block footer
  p Copyright Example.com, Inc.
```

Note that the child template uses a piped text construction to include plain text for the `title` element contents. This allows the layout to define the `title` element (avoiding each child template re-defining that element) while also avoiding introducing child elements to the `title` element, such as a superfluous `p`.

The result:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple Extends Example</title>
  </head>
  <body>
    <main>
      <h1>Article Title</h1>
      <p>Lorem ipsum...</p>
    </main>
    <footer>
      <p>Copyright Example.com, Inc.</p>
    </footer>
  </body>
</html>
```
