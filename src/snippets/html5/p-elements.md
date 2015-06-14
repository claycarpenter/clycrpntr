---
title: The p Element
tags: html5
template: /base.jade
category: snippet
---

The `p` element represents a paragraph. Most commonly this is used to wrap around a block of text. However, the HTML spec [defines a paragraph](http://www.w3.org/TR/html5/dom.html#paragraph) a bit more broadly than just collections of sentences:

> A paragraph is typically a run of phrasing content that forms a block of text with one or more sentences that discuss a particular topic, as in typography, but can also be used for more general thematic grouping. For instance, an address is also a paragraph, as is a part of a form, a byline, or a stanza in a poem.

So a `p` tag could be used to wrap a a form field and its related label:

```
<p>
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName">
</p>
```

`p` elements should be avoided when the content can be more accurately described with a more appropriate element. For instance, this markup is valid:

```
<p>
    Call in your order at 404-555-5040.
</p>
```

But this markup is more semantic, accurately identifying the meaning of the content:

```
<address>
    Call in your order at 404-555-5040.
</address>
```

The `p` element often doesn't require a closing tag. For instance, this is valid markup:

```
<article>
    <h3>Section title</h3>
    <p>This is a very, very short article.
    <footer>Last modified: 24 Aug 2014</footer>
</article>
```

There are some cases where a `p` element does require a closing tag, most notably when it's the final child of an `a` element. For full details, [refer to the spec](http://www.w3.org/TR/html5/dom.html#paragraph).


Note also that `p` elements cannot contain list elements such as `ul` and `ol`. The spec recommends a format like this:

```
<p>To begin, combine the following ingredients</p>
<ul>
    <li>butter</li>
    <li>sugar</li>
    <li>eggs</li>
</ul>
<p>in a cold metallic mixing bowl.</p>
```
