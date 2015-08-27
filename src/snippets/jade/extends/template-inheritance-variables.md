---
title: Jade Template Variable Sharing
tags: jade
template: /base.jade
category: snippet
---

Using typical Jade variable declarations (`- var foo = 'bar'`) won't allow variables to be defined in a child template and then used in a parent template. It appears as though Jade will ignore variables defined normally in child templates. So this simple example doesn't work as expected:

```
//- base.jade

doctype html

html
  head
    title #{title}

  body
    block content
```

```
//- example.jade

extends ./base.jade

- var title = 'Article Title'

block content
  h1 #{title}

  p Lorem ipsum...
```

Produces this output, where the `title` value isn't available in the either the parent or child template:

```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <h1></h1>
    <p>Lorem ipsum...</p>
  </body>
</html>
```

So, that's obviously no good. But there is a workaround that allows you to define variables in the child and then reference them both in the child and parent templates. This workaround relies on defining variables within a `block` section in the child template, and then including that `block` in the parent section. Rewriting our previous example to use this `block` variables technique we get this:

```
//- base.jade

//- Import any child vars
block vars

doctype html

html
  head
    title #{title}

  body
    block content

```

```
//- example.jade

extends ./base.jade

block vars
  - var title = 'Article Title'

block content
  h1 #{title}

  p Lorem ipsum...
```

Producing the output we expect:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Article Title</title>
  </head>
  <body>
    <h1>Article Title</h1>
    <p>Lorem ipsum...</p>
  </body>
</html>
```
