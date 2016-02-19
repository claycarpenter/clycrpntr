---
title: Iterating Over Arrays with Array#forEach
tags: javascript
template: /base.jade
category: snippet
---

ES5 Arrays have an in-built `forEach` method that makes it easy to perform a function for each element in the array. Functionally, this is pretty similar to a typical `for` loop, though there are a couple differences. For starters, I find the basic syntax of `array.forEach(function(item) { ... })` easier to write and more expressive than a comparable `for` loop. It also doesn't require declaring a counter variable, which can cause unintended consequences if you're not accommodating for variable hoisting.

`forEach` is less flexible than a `for` loop: there's no way to change which elements are included in the iteration (you can't just increment the index by 2 to skip every odd-indexed element, like you could in a `for` loop), and there's no way to break out of a `forEach` loop early.

Because of these constraints, `forEach` works best when you really need to visit every element in the array. For instance, this basic sample visits every model in the collection, persisting each in turn:

```
// Get array of items
var items = Repository.getItems();

// ... Do some work ...

// Persist
items.forEach(function(item) {
  Repository.update(item);
});
```

The function provided to `forEach` is invoked with three arguments, in this order:

1. `element` - The current element being considered.
2. `index` - The index of the current element within the source array.
3. `array` - The source array.

An optional `thisArg` can be provided alongside the callback function. This sets the value of `this` when executing the callback. We can use that technique to rewrite our previous example to be a bit shorter:

```
// Get array of items
var items = Repository.getItems();

// ... Do some work ...

// Persist
items.forEach(Repository.update, Repository);
```

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
