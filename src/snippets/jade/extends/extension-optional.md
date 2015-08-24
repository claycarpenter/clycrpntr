---
title: Jade Extends Filename Extension Optional
tags: jade
template: /base.jade
category: snippet
---

When writing Jade `extends` statements, the `.jade` extension of the referenced template is optional.

So this:

```
extends ./base
```

Is equivalent to this:

```
extends ./base.jade
```

Considering Jade doesn't seem to allow for loading any files that don't have a `.jade` extension, it seems like actually writing the extension into the `extends` statement is never necessary.
