---
title: Filtering Arrays with Array#filter
tags: javascript
template: /base.jade
category: snippet
---

ES5 Arrays have an in-built `filter` method that makes it easy to pick out the elements in the array that you want. The premise is simple: each element in the array will be evaluated by a predicate function that you provide. If the function returns `true`, the element is kept, if the predicate returns `false`, the element is ignored. The results are stored in a *new* array--the array that serves as the base for the filtering is not modified in the operation.

Here is a simple filter that only keeps even numbers from the source array:

```
var source = [1,2,3,4,5,6,7,8,9,10];
var evenOnly = source.filter(function(element) {
  return element % 2 === 0;
});
//=> [2,4,6,8,10]
```

The predicate callback is invoked with three arguments, in this order:

1. `element` - The current element being considered.
2. `index` - The index of the current element within the source array.
3. `array` - The source array.

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
