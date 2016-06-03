---
title: ES6 for-of vs for-in Loops
tags: javascript, es6
template: /base.jade
category: snippet
---

for-of looks very similar to for-in--they both have nearly identical syntax, and the both iterate over a collection of values. They differ in what values comprise that collection. A for-in iterates over all of the enumerable properties on a JS object. A for-of loop iterates over all of the values exposed by a special no-args method registered on the property under the key `Symbol.iterator`.

You can see the difference in this comparison of for-in and for-of loops over a small array:

```javascript
const array = ['a','b','c'];

for (const i in array) {
  console.log(i);
}
// 0, 1, 2

for (const i of array) {
  console.log(i);
}
// "a", "b", "c"
```

The for-in loop iterates over the enumerable properties of the array, which are the indexes for which is has values (e.g., `array[0]`). for-of loops over the values within the array itself.

Note that the `length` property of the array doesn't show up. That's because the `length` property of Array is defined as not enumerable. You can see this be investigating the object property definition with the help of Object.getOwnPropertyDescriptor:

```javascript
Object.getOwnPropertyDescriptor([0], 'length')
// => Object {value: 1, writable: true, enumerable: false, configurable: false}
Object.getOwnPropertyDescriptor([0], '0')
// => Object {value: 0, writable: true, enumerable: true, configurable: true}
```
