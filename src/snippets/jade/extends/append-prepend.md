---
title: Jade Template Block Append and Prepend
tags: jade
template: /base.jade
category: snippet
---

Jade support three modes of operation with the content of a parent `block` when defining new content in a child template. By default, Jade operates in "replace" mode, where the child's `block` content entirely overrides the parent's `block` content. Jade also support `prepend` and `append` modes, which behave as you might expect: `prepend` adds the child's content before the parent's content, while append adds the child's content after the parent's content.

To trigger the `append` mode, write the child block statement as `block append blockName`. The same goes for prepend mode: write the block statement as `block prepend blockName`. Alternatively, you can simply use a shorthand of `append blockName` or `prepend blockName`.

In this example, we'll use the `append` operation to add an extra stylesheet reference to an article's `head` section, and a `prepend` operation to add links to the `footer` defined in the base layout.

Here is the base layout. Note the existing general stylesheet and copyright notice content defined in the `styles` and `footer` blocks, respectively.

```
//- base.jade

doctype html

html
  head
    title Append/Prepend Example

    block styles
      link(rel="stylesheet", src="/styles/base.css")

  body
    main
      block main

    footer
      block footer
        p &copy; Example.com 2015
```

Here is the article template. Note the use of `block append styles` to add the extra stylesheet and `block prepend footer` to insert the footer links.

```
//- example.jade

extends ./base.jade

block append styles
  link(rel="stylesheet", src="/styles/article.css")

block main
  h1 Article Title

  p Lorem ipsum...

block prepend footer
  ul
    li: a(href='/about') About
    li: a(href='/contact') Contact
```

And here is the result:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Append/Prepend Example</title>
    <link rel="stylesheet" src="/styles/base.css">
    <link rel="stylesheet" src="/styles/article.css">
  </head>
  <body>
    <main>
      <h1>Article Title</h1>
      <p>Lorem ipsum...</p>
    </main>
    <footer>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <p>&copy; Example.com 2015</p>
    </footer>
  </body>
</html>
```
