---
title: Block Content in Jade Mixins
tags: jade
template: /base.jade
category: snippet
---

Rest arguments syntax allows Jade mixins to receive an indeterminate number of arguments. The format looks like this:

```
mixin mixinName(arg1, arg2, ...restArg)
```

And results in any extra arguments provided through a mixin call statement to be captured in an array named `restArg`. Here is a trivial (but tasty) example:

```
mixin sandwichBuilder(...ingredients)
  ol
    each item in ingredients
      li= item

+sandwichBuilder('Bread', 'Peanut Butter', 'Banana', 'Bread')
```

Produces:

```
<ol>
  <li>Bread</li>
  <li>Peanut Butter</li>
  <li>Banana</li>
  <li>Bread</li>
</ol>
```

And here's a slightly more useful example, iterating over literal objects to build a very simple image gallery with captions:

```
mixin galleryBuilder(...items)
  ul
    each item in items
      li: figure
        img(src=item.src)
        figcaption= item.caption

+galleryBuilder(
  {src: 'http://lorempixel.com/400/200/sports', caption: 'A sports photo'},
  {src: 'http://lorempixel.com/400/200/nature', caption: 'A nature photo'}
  )
```

Produces:

```
<ul>
  <li>
    <figure><img src="http://lorempixel.com/400/200/sports"/>
      <figcaption>A sports photo</figcaption>
    </figure>
  </li>
  <li>
    <figure><img src="http://lorempixel.com/400/200/nature"/>
      <figcaption>A nature photo</figcaption>
    </figure>
  </li>
</ul>
```
