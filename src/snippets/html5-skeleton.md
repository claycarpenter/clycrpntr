---
title: Basic HTML5 Skeleton
tags: html
template: /base.jade
category: snippet
---

These are a pair of bare bones HTML5 documents, meant to serve as quick starter templates. They're best suited for exercises that directly interact with stock browser components (DOM operations, XHR, localStorage, etc.). For a more full-featured template that includes fundamental libraries like jQuery and Modernizr, check out the popular [HTML5 Boilerplate](https://html5boilerplate.com/) project.

All example templates include:

* Character encoding and language declarations
* A mobile-friendly viewport configuration
* `head`, `body`, and `title` elements
* Some reference to a stylesheet and script (either inline or external)

## Inline Styles and Script

This template allows for inline styles and scripts. This is best suited for very quick prototypes.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        
        <title></title>
        
        <style>
        </style>
    </head>
    <body>
        <script>
        </script>
    </body>
</html>
```

This template is available as a Gist: [inline-template.html](https://gist.github.com/claycarpenter/36dc8f0cff41d2e4cab8#file-inline-template-html)

## External Styles and Script

This template references an external stylesheet and main app script.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        
        <title></title>
        
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <script src="app.js"></script>
    </body>
</html>
```

This template is available as a Gist: [external-template.html](https://gist.github.com/claycarpenter/36dc8f0cff41d2e4cab8#file-external-template-html)
