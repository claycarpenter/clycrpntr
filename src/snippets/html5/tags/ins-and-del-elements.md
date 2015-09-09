---
title: The HTML5 ins and del Elements
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `ins` element is used to mark an addition or insertion to the document. The `del` element signifies a removal or deletion of content. Either tag can optionally be accompanied by a reference to a change description and a timestamp for the change event. The tags are identical apart from meaning either insertion or deletion, so while the examples in this snippet present the `ins` element they are all equally applicable to the `del` element.

A simple example, marking the insertion of a new paragraph:

```
<ins>
  <p>Lorem ipsum</p>
</ins>
```

`ins` elements should only contain whole elements; they should never cross element boundaries. In this example, the `ins` begins within the first `p` and ends inside the second `p`:

```
<!-- Incorrect usage, don't copy -->
<p>Lorem ipsum<ins>one</p>
<p>another</ins>Lorem ispum</p>
```

Instead, that example should probably be written as two sets of changes:

```
<p>Lorem ipsum <ins>one</ins></p>
<p><ins>another</ins>Lorem ipsum</p>
```

`ins` elements can carry a timestamp to reflect the time of the changes. This is held in the `datetime` attribute, and it takes the same time format as the `time` element. In the following example, the insertion is noted to have been performed on 23 May 2015:

```
<ins datetime="2015-05-23">
  <p>New text</p>
</ins>
```

`ins` elements can also point to a changelog documenting the change. The more specific and accessible this change is, the better. A best practice is to include the changelog item in a footer, like so:

```
<ins cite="#change-1">
  <p>Lorem ipsum</p>
</ins>

<footer>
  <ol>
    <li id="#change-1">Added more unimaginative lorem ipsum text.</li>
  </ol>
</footer>
```

Many thanks to the [HTML5 Doctors](http://html5doctor.com/ins-del-s/) for providing a lot of guidance on this element.
