---
title: Jade Template Inheritance Chains
tags: jade
template: /base.jade
category: snippet
---

Jade template inheritance supports a long chain of ancestors, and also provides the ability for intermediate templates to define new `block` sections to be overridden by their own descendant templates.

We can use this feature to create a more complex template architecture. A base template, `layout.jade`, provides the basic HTML5 skeleton. The `article-base.jade` template sets up basic semantic markup scaffolding for an article (`header`, `article`, and `footer` sections). Finally, the actual article is represented by `example.jade`, which fills in the final details for the example article.

The layout template:

```
//- layout.jade

doctype html

html
  head
    title
      block title

  body
    block content
```

The article scaffolding template:

```
//- article-base.jade

extends ./layout.jade

block content
  main
    header
      block header

    article
      block article

    footer
      block footer
```

The article scaffolding replaces the `content` block with three new blocks: `header`, `article`, and `footer`. Those new blocks will in turn be overridden by the article templates.

The article template:

```
//- example.jade

extends ./article-base.jade

block title
  | Article Title

block header
  h1 Article Title

block article
  section
    p Lorem ipsum

    p Lorem ipsum

block footer
  p Posted 2 days ago
```

The article template overrides the new blocks introduced by the article scaffolding parent template, as well as the `title` block defined by the grandparent `layout.jade` template.

All of that produces this result:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Article Title</title>
  </head>
  <body>
    <main>
      <header>
        <h1>Article Title</h1>
      </header>
      <article>
        <section>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </section>
      </article>
      <footer>
        <p>Posted 2 days ago</p>
      </footer>
    </main>
  </body>
</html>
```
