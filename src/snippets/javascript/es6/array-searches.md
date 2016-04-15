---
title: Seraching Arrays in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 adds two new prototype methods to Arrays that make it much convenient to find elements: `find` and `findIndex`. Both methods work by invoking a predicate to test each element in the array in turn. The first matched element will be returned by `find`; the index of that first match will be returned by `findIndex`. For both methods, if no match is found then `undefined` will be returned.

The signature of the predicate for both `find` and `findIndex` takes three arguments:

* `element` - the current element.
* `index` - the index of the current element.
* `array` - the array being iterated over.

The ability to provide a custom predicate implementation makes these find methods much more adaptable than the existing (ES5) Array.indexOf, which only tests based on strict equality. For instance, both `indexOf` and `findIndex` can find the `2` in an array of numbers, but only `findIndex` can be configured to find the first value larger than two:

```javascript
let array = [1,2,3,4];

console.log(array.indexOf(2));                // 1
console.log(array.findIndex(x => x === 2));   // 1
console.log(array.findIndex(x => x > 2));     // 2
```

These custom predicates support by these find methods can be especially helpful when trying to perform more complex matches:

```javascript
let people = [
  {
    firstName: 'Bran',
    lastName: 'Stark'
  },
  {
    firstName: 'Arya',
    lastName: 'Stark'
  },
  {
    firstName: 'Tyrion',
    lastName: 'Lannister'
  },
];

let arya = people.find(person => {
  return person.firstName === 'Arya' && person.lastName === 'Stark';
});
console.log('Found:', arya);
// => Found: Object {firstName: "Arya", lastName: "Stark"}
```
