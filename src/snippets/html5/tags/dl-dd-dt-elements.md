---
title: The HTML5 dl, dt, and dd Elements
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `dl`, `dt`, and `dd` elements work together to create a description list--a collection of name-value or term-description groups. Within that collection, the elements have these roles:

* `dl` - The description list, this element wraps the entire list.
* `dt` - The name or term being described. Note that this is a *description*, not a *definition*. If a term is being defined, use a `dfn` element within the `dt` to semantically mark the definition.
* `dd` - The value or description.

What content fits into the "term-description" category is pretty broad, as noted by [the HTML5 spec](http://www.w3.org/TR/html5/grouping-content.html#the-dl-element):
> Name-value groups may be terms and definitions, metadata topics and values, questions and answers, or any other groups of name-value data.

Within a definition list, the association between terms and values is derived from the ordering of the `dt` and `dd` child elements. First, one or more `dt` tags should declare the term or terms. Following those, one or more `dd` tags should declare the descriptions. For instance:

```
<dl>
  <dt>Vegetables</dt>
  <dd>Cabbage</dd>
  <dt>Fruits</dt>
  <dd>Apple</dd>
  <dd>Banana</dd>
</dl>
```

In that description list, the term `Vegetables` is associated with the description `Cabbage`. The term `Fruits` is associated with both `Apple` and `Banana`.

Multiple terms can also be grouped together, such as this example where the names are listed as both `Authors` and `Editors`:

```
<dl>
  <dt>Authors</dt>
  <dt>Editors</dt>
  <dd>Ernest Hemingway</dd>
  <dd>Gertrude Stein</dd>
</dl>
```

Within a single list, the multiple `dt` elements cannot have the same contents. This variation of the above list is *not valid*:

```
<dl>
  <dt>Authors</dt>
  <dt>Editors</dt>
  <dd>Ernest Hemingway</dd>
  <dd>Gertrude Stein</dd>

  <dt>Authors</dt>
  <dd>James Joyce</dd>
</dl>
```

