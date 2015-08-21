---
title: Jade Template Block Default Values
tags: jade
template: /base.jade
category: snippet
---

In Jade's template inheritance, a `block` can be given a default value to handle the case that a child template doesn't override that `block` with its own value.

Default block values are provided simply by defining the value under the `block` section of the parent template. Here, we'll expand a basic example to give default title to an article if the child template doesn't define a title on its own.

The base layout:

```
//- base.jade

doctype html

html
  head
    title
      block title
        | Article

  body
    block content
```

The base layout will use the title defined in a child template; if no such definition is made then a default title of "Article" will be used.

A child template that doesn't define a title:

```
//- empty.jade

extends ./base.jade

block content
  h1 Anonymous Article

  p Lorem ipsum...
```

Produces:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Article</title>
  </head>
  <body>
    <h1>Anonymous Article</h1>
    <p>Lorem ipsum...</p>
  </body>
</html>
```

But if the child template does define the title, that supplied value is used in place of the default:

```
//- example.jade

extends ./base.jade

block title
  | A Great Article

block content
  h1 A Great Article

  p Lorem ipsum...
```

Produces:

```
<!DOCTYPE html>
<html>
  <head>
    <title>A Great Article</title>
  </head>
  <body>
    <h1>A Great Article</h1>
    <p>Lorem ipsum...</p>
  </body>
</html>
```
