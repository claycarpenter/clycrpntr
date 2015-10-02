---
title: The HTML5 i Element
tags: html5
template: /base.jade
category: snippet
---

`u` elements denote text accompanied by an "unarticulated, though explicitly rendered, non-textual annotation" ([HTML5 Spec](http://www.w3.org/TR/html5/text-level-semantics.html#the-u-element)). Effectively, this creates an annotation for text that isn't explicitly described but is presented to the user. The best use case for this seems to be highlighting spelling errors, such as in the following example:

```
<p>
  i can has <u class="spelling-error">cheezeburger</u>?
</p>
```

`u` elements shouldn't be used to underline text. Underlined text can confuse users if that text is not a link. If the text does need to be underlined, the effect can be achieved through CSS, rather than relying on the default styles browsers bestow on `u` elements.

There seem to be very few appropriate use cases for `u` elements, and the spec goes on at length to make this clear:

> In most cases, another element is likely to be more appropriate: for marking stress emphasis, the em element should be used; for marking key words or phrases either the b element or the mark element should be used, depending on the context; for marking book titles, the cite element should be used; for labeling text with explicit textual annotations, the ruby element should be used; for labeling ship names in Western texts, the i element should be used.

Many thanks to Oli Studholme at HTML5 Doctor for his [excellent article](http://html5doctor.com/u-element/) on the `u` element in HTML5.
 
