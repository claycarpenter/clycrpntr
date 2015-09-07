---
title: The HTML5 em Element
tags: html5
template: /base.jade
category: snippet
---

The `em` element indicates an emphasis should be placed on the contents of the element. How that extra emphasis alters the meaning of the content is subject to the placement of the emphasis and the language of the content. For example, note how the addition of an `em` tag's emphasis changes the meaning of the following sentence:

```
<p>Snakes can make for good pets.</p>
```

```
<p>Snakes <em>can</em> make for good pets.</p>
```

In the first example, the statement is presented as a straightforward suggestion. In the second example, with an emphasis on the "can", the statement changes to an argument for the suitability of snakes as pets.

The `em` tag differs from the `i` tag in that the former has semantic significance, while the later only marks a difference in presentation. Commonly both tags are presented as italicized text. An `em` tag should only be employed when the intention is to alter the meaning of the content. Otherwise, an `i` tag should wrap the content if only a change in presentation is desired.
