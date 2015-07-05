---
title: Basic Jade HTML5 Document
tags: jade
template: /base.jade
category: snippet
---

This very basic Jade template produces a skeleton HTML5 document. It includes references to external stylesheet and JavaScript files.


```
doctype html

html(lang='en')
  head
    meta(name='viewport', content='width=device-width, initial-scale=1')
    meta(charset='utf-8')

    title Page Title

    link(href='styles.css', rel='stylesheet')

  body
    // Page content should precede script ref.
    script(src='app.js')
```

That template produces the following output:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>Page Title</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <!-- Page content should precede script ref.-->
    <script src="app.js"></script>
  </body>
</html>
```
