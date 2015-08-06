---
title: Jade Includes with Filters
tags: jade
template: /base.jade
category: snippet
---

*Warning: the in-built `markdown` filter discussed in this article is going to be deprecated in the next version of Jade (v2.0). The examples in this article work at the time of writing, but may not work in the future.*

Jade includes can be paired with filters. Doing so runs the contents of the included file through the filter before including the results in the Jade template. In this example, an external file containing Markdown will be included in a Jade template after running through the  `markdown` filter.

Here is the Markdown in the file `content.md`:

```
# Why Markdown Is Great

Here is a simple list of Markdown's benefits:

* Simple and intuitive
* Human-readable
* Portable
```

This is the Jade template. At the end of the template the `content.md` file is included and run through the `markdown` filter.

```
doctype html
html
  head
    title Why Markdown Is Great
  body
    //- Include the post content after filtering through markdown processor
    include:markdown content.md
```

The results:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Why Markdown Is Great</title>
  </head>
  <body><h1 id="why-markdown-is-great">Why Markdown Is Great</h1>
<p>Here is a simple list of Markdown&#39;s benefits:</p>
<ul>
<li>Simple and intuitive</li>
<li>Human-readable</li>
<li>Portable</li>
</ul>

  </body>
</html>
```
