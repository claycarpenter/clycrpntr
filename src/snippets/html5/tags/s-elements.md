---
title: The HTML5 s Element
tags: html5
template: /base.jade
category: snippet
---

The `s` element is used to indicate that the contained content is no longer accurate or relevant. You can think of `s` element content as representing edits to the page. At some point, the content held in an `s` element was up to date, but is no longer accurate. The content is presented for historical purposes.

Here, an `s` tag is used to update the status of a successful sale:

```
<p>
  <strong>Microwaves are on sale today!</strong>
</p>
<p>
  <s>Only $199! Limited supply available.</s>
</p>
<p>
  Sorry, we're <strong>all sold out!</strong>
</p>
```

In this example, a function's documentation is wrapped in an `s` element to indicate that the function has been deprecated and should no longer be used:

```
<p>
  <code>sayHello</code> - <strong>This function was deprecated in version 1.1.</strong><s>Says hello the the user by printing out to the console.</s>
```

The `s` tag replaces the obsolete HTML4 `strike` tag. While `s` element content may be styled as strikethrough text, that should not be assumed as the presentation can be changed via stylesheet rules.
