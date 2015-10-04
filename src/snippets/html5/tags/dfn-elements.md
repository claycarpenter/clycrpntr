---
title: The dfn Element
tags: html5
template: /base.jade
category: snippet
---

The `dfn` tag indicates that its contents containing the "[defining instance](http://www.w3.org/TR/html5/text-level-semantics.html#the-dfn-element)" of a term. The actual definition is contained in the surrounding content--typically in `p`, `section`, or other textual content containers.

The actual value of the term being defined by the `dfn` markup is calculated based on one of these three options:

* If the `dfn` element has a `title` attribute, then that attribute is the value of the term being defined.
* If the `dfn` has exactly one child node (and no child text nodes), and that child node is an `abbr` element, then the `title` of that `abbr` element is the value of the `dfn` term definition.
* Otherwise, the value of the term being defined is the collected values of the text node children of the `dfn` element.

Here, the three styles are illustrated by examples:

```
<p>
  <dfn title="Federal Reserve">Fed</dfn> banks play in important role in monitoring and maintaining the American economy.
</p>
<p>
  The <dfn><abbr title="Document Object Model">DOM</abbr></dfn> provides an interface for controlling web pages via JavaScript.
</p>

<p>
  <dfn id="jquery">jQuery</dfn> is a framework for finding and manipulating DOM elements on a web page.
</p>
```

Links can also be used to point other references to the defined term back to the original definition. For instance:

```
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr></dfn> is the language of the web.
</p>
<p>
  Most web content is written in <a href="#html"><abbr title="HyperText Markup Language">HTML</abbr></a>.
</p>
```
