---
title: Array Contents in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

In ES6, Arrays gain three new instance methods that give access to the array's contents:

* `#values()` - Returns an iterator over the array's values.
* `#keys()` - Returns an iterator over the array's keys.
* `#entries()` - Returns an iterator over a collection of all of the arrays keys (indexes) and values in pairs.

For all three methods, indexes without values will be counted. In the cases where values are provided, `undefined` will be used.

The basics:

```javascript
let testArray = ['a', 'b', 'c'];

console.log(Array.from(testArray.values()));  // ['a', 'b', 'c']
console.log(Array.from(testArray.keys()));    // [0, 1, 2]
console.log(Array.from(testArray.entries())); // [[0,'a'], [1,'b'], [2,'c']]
```

As the returned values are iterators, they can be used with the spread operator and for-of loop constructs:

```javascript
console.log([...testArray.values()]);     // ["a", "b", "c"]

for (let key of testArray.keys()) {
  console.log(key); // prints out 0, then 1, then 2
}
```

The for-of loop can also be used along with destructuring to capture both the key and value portions of array `#entries()` iterator results:

```javascript
for (let [index, value] of testArray.entries()) {
  console.log(`${value} at index ${index}`);
}
```

Thanks for Alex Rauschmayer for pointing out this last tip in his post one [ES6 arrays](http://www.2ality.com/2014/05/es6-array-methods.html).
