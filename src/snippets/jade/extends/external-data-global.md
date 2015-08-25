---
title: Jade External Data Is Global
tags: jade
template: /base.jade
category: snippet
---

One of the best ways to share data between extended Jade templates is by using an external data structure. Any data defined through an external data structure will be available to all templates in the inheritance chain, making it easy to refer to the same values in both the child and parent templates.

In this simple example, we'll define an article `title` value in an external data (JSON) file. That `title` value will be referenced by both the parent template (to fill the documents `title` element) and by the child template (to present the article title in an `h1` header).

`data.json`, the data file:

```
{
  "title": "Clever Article Title"
}
```

The base layout file:

```
//- base.jade

doctype html

html
  head
    title #{title}

  body
    block content
```

And finally, the article example template:

```
//- example.jade

extends ./base.jade

block content
  h1 #{title}

  p Lorem ipsum...
```

Compile the templates with a pointed to the external data file like so:

```
jade example.jade -O data.json
```

Produces this output:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Clever Article Title</title>
  </head>
  <body>
    <h1>Clever Article Title</h1>
    <p>Lorem ipsum...</p>
  </body>
</html>
```
