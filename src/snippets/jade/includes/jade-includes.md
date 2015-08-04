---
title: Basic Jade Includes
tags: jade
template: /base.jade
category: snippet
---

The Jade `include` directive injects another Jade file into the current Jade file. The `include` statement is useful for reusing common site components across multiple pages. In this example, we'll separate out a page's head and footer elements into separate files.

The `head.jade` file contains the site's title, and a reference to the site's main stylesheet and script:

```
head
  title Example Corp

  link(rel='stylesheet', href='/styles.css')

  script(src='/site.js')
```

The `footer.jade` file contains a simple footer, with a copyright notice and links to various pages:

```
footer
  small &copy; Example Corp
  ul
    li: a(href='/legal') Terms &amp; Conditions
    li: a(href='/privacy') Privacy
    li: a(href='/contact') Contact Us
```

The `page.jade` file contains the actual page implementation. This file references the other two includes to build a complete page.

```
doctype html
html
  include head.jade

  body
    h1 Welcome to Example Corp

    p We make the world's finest widgets. Probably.

    include footer.jade
```

The final `page.html` output looks like this:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Example Corp</title>
    <link rel="stylesheet" href="/styles.css">
    <script src="/site.js"></script>
  </head>
  <body>
    <h1>Welcome to Example Corp</h1>
    <p>We make the world's finest widgets. Probably.</p>
    <footer><small>&copy; Example Corp</small>
      <ul>
        <li><a href="/legal">Terms &amp; Conditions</a></li>
        <li><a href="/privacy">Privacy</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </footer>
  </body>
</html>
```
