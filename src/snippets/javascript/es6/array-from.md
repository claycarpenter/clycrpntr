---
title: Array.from
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

The new Array.from method added in ES6 provides some new options for creating arrays from existing collections of values. Array.from will create an array from anything that:

* conforms to the array-like interface of having both a `length` property and indexed values.
* is an iterable

For starters, Array.from can create a clone of an existing array:

```javascript
// Array from another array
let sourceArray = [1,2,3];
let cloneArray = Array.from(sourceArray);
console.log(cloneArray);
```

An array can be created by the default values iterable provided by a Set:

```javascript
// Array from a set
let sourceSet = new Set([1,2,3]);
let cloneArray = Array.from(sourceSet);
console.log(cloneArray);
```

Converting from the iterables provided by Map `keys` and `values` methods:

```javascript
// Array from a Map
let source = new Map([
  ['one', 'uno'],
  ['two', 'dos'],
  ['three', 'tres']
]);
let keysArray = Array.from(source.keys()),
    valuesArray = Array.from(source.values());

console.log(keysArray);     // ["one", "two", "three"]
console.log(valuesArray);   // ["uno", "dos", "tres"]
```

Additionally, Array.from works with array-like objects, like this basic custom object:

```javascript
// Array from a custom array-like object
let arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
};
let array = Array.from(arrayLike);
console.log(array);     // ["a", "b", "c"]
```

Array.from takes a map function as a second argument. Using this function, we can transform the contents of the source collection as we build the new array. In this example, we take advantage of a string's array-like properties to split the string into letters and then capitalize them:

```javascript
// Array from a custom array-like object
let arrayLike = 'abc';
let array = Array.from(arrayLike, letter => letter.toUpperCase());
console.log(array);     // ["A", "B", "C"]
```
