---
title: Basic HTML5 Skeleton
tags: html
template: /base.jade
category: snippet
---

Bare bones HTML5 documents. No shortcuts are employed. 

All examples include:

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
