---
title: Jade Plain Text Includes
tags: jade
template: /base.jade
category: snippet
---

In addition to include other Jade templates, the `include` directive can also include plain text files. No processing is performed on these files, they're simply insert in place of the `include` that references them. This technique is useful for including static resources like stylesheets and JS scripts.

This example will build on an existing multi-template Jade architecture. A primary Jade template will include common head and footer templates. The head template will in turn reference the static site stylesheets and main script. This demonstrates the ability to nest includes.

The files involved:

* `page.jade` - Main page template
* `head.jade` - Page `head` element, responsible for including `styles.css` and `site.js`
* `styles.css` - Site-wide stylesheet
* `site.js` - Site-wide scripting support
* `footer.jade` - Contains the page `footer` element


The `head.jade` file defines the page `head` element. It uses `include` directives to pull in the contents of the `styles.css` and `script.js` files:

```
head
  title Example Corp

  style
    include styles.css

  script
    include site.js
```

The `styles.css` stylesheet contains some basic styles:

```
body {
  font-size: 18px;
  color: white;
  background-color: black;
}
```

The `site.js` contains a basic notification that the page has loaded:

```
window.addEventListener('load', function (evt) {
    console.log('Page loaded!');
});
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

The `page.jade` file contains the actual page implementation. This file references the other two includes (`head.jade` and `footer.jade`) to build a complete page.

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
