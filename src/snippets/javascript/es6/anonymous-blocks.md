---
title: Anonymous Blocks in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 seems to have introduced the ability to define anonymous blocks. That is, blocks that aren't attached to any sort of statement--they're just blocks. For instance:

```javascript
if (true) {
  console.log('Inside if block');
}

{
  console.log('Inside anonymous block');
}
```

These can be used in conjunction with the new block-scoped variables provided by `let` and `const`. It's probably not a good idea to litter production code with anonymous blocks simply to restrict variable scope (restricting variable scope's a good thing, anonymous blocks just probably aren't the right solution). However, these anonymous blocks are quite useful when writing small demo scripts. Here, I use anonymous blocks to redefine the variable `cloneArray`:

```javascript
(function() {
  'use strict';

  {
    // Array from another array
    let sourceArray = [1,2,3];
    let cloneArray = Array.from(sourceArray);
    console.log(cloneArray);
  }

  {
    // Array from a set
    let sourceSet = new Set([1,2,3]);
    let cloneArray = Array.from(sourceSet);
    console.log(cloneArray);
  }
}());
```
