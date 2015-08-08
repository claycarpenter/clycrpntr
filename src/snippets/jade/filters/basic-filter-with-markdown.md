---
title: Jade Filter Basics
tags: jade
template: /base.jade
category: snippet
---

*Warning: the in-built `markdown` filter discussed in this article is going to be deprecated in the next version of Jade (v2.0). The examples in this article work at the time of writing, but may not work in the future.*

Jade support "filters", which allow Jade to pass off processing of a block of content to another module. This works great for transpilers, and common examples include Markdown, CoffeeScript, Less, and Sass.  The basic syntax looks like this:

```
:filterName
  filter content...
```

And here's an simple example using the in-built Markdown filter:

```
:markdown
  # Markdown Header
```

After transpilation from Markdown to HTML:

```
<h1 id="markdown-header">Markdown Header</h1>
```

Now for a slightly more complex example. Here we'll build a full page containing a blog post. The blog post content will be written entirely in Markdown, though the rest of the template will be Jade.

```
doctype html
html
  head
    title Why Markdown Is Great
  body
    :markdown
      # Why Markdown Is Great

      Here is a simple list of Markdown's benefits:

      * Simple and intuitive
      * Human-readable
      * Portable
```

Compiles to:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Why Markdown Is Great</title>
  </head>
  <body>
    <h1 id="why-markdown-is-great">Why Markdown Is Great</h1>
    <p>Here is a simple list of Markdown&#39;s benefits:</p>
    <ul>
      <li>Simple and intuitive</li>
      <li>Human-readable</li>
      <li>Portable</li>
    </ul>
  </body>
</html>
```
