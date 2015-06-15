---
title: The br Element
tags: html5
template: /base.jade
category: snippet
---

Teh `br` tag is used to indicate a line break. Line breaks separate text within a body of text (a paragraph). `br` tags help to ensure that there is a visual distinction between sections of text.

Common examples of uses for the `br` eleemnt include addresses and poetry. Here's a web-related haiku from [4syllables](http://www.4syllables.com.au/resources/web-content-haiku/):

```
<p>
    Online, less is more<br>
    Less clutter, less verbiage<br>
    Get straight to the point
</p>
```

Here is an example of an address, using the `address` tag:

```
<p>Send inquiries to:</p>
<address>
    Customer Service<br>
    3456 Glenwood Ave.<br>
    Raleigh, NC 27611
</address>
```

Although major browsers represent `br` elements as visual line breaks that move the subsequent text to the next line, this behavior is not guaranteed. [According to the HTML5 spec](http://www.w3.org/TR/2011/WD-html5-author-20110705/the-br-element.html), how line breaks are presented is up to the user agent:

> While line breaks are usually represented in visual media by physically moving subsequent text to a new line, a style sheet or user agent would be equally justified in causing line breaks to be rendered in a different manner, for instance as green dots, or as extra spacing.

Note that `br` elements should not be used for general purpose spacing. If spacing is needed between blocks of text, use a `p` tag instead. For other spacing, rely on CSS properties to help format the elements as you wish.
