---
title: ES6 for-of and Iterators
tags: javascript, es6
template: /base.jade
category: snippet
---

The for-of loop is specially designed in ES6 to allow for looping over iterables. Iterables include familiar built-ins like String and Array, as well as new collection classes Map and Set, and even `arguments`. Custom iterators can be built by following the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable).

The for-of loop has a simple syntax, which looks a lot like the for-in loop:

```javascript
for (let i of [1,2,3]) {
  console.log(i);
}
// 1
// 2
// 3
```

Note the use of `let`, which is a much better choice than `var`. `let` will create a new variable definition scoped to that loop block, while `var` will leak the variable definition outside of the loop. You can also use `const` to declare the variable that will capture the iteration value, as long as you make sure not to redefine the variable _within_ the loop:

```javascript
for (const i of [1,2,3]) {
  console.log(i);
}
// 1
// 2
// 3
```

As mentioned above, you can iterate over strings:

```javascript
for (const char of 'hello') {
  console.log(char);
}
// 'h'
// 'e'
// 'l'
// 'l'
// 'o'
```

Most commonly you'll be iterating over the collection classes Array, Map, and Set. Each offers iterators over the collection's entries, values, and keys. We'll look at map here, because it's the most interesting.

Be default, a Map will iterate over its entries:

```javascript
const map = new Map([
  ['a', 'one'],
  ['b', 'two'],
  ['c', 'three']
]);

// default iterator is entries
for (const entry of map) {
  console.log(entry);
}
// ["a", "one"]
// ["b", "two"]
// ["c", "three"]
```

That for-of loop is the shorthand equivalent to this:

```javascript
// entries return as arrays
for (const entry of map.entries()) {
  console.log(entry);
}
```

Map entries are returned as a `[key, value]` tandem array. We can take advantage of destructuring support to pull the key and value out of that array from within the for-of loop:

```javascript
// use destructuring to pull values from entry array
for (const [key, value] of map.entries()) {
  console.log(`${key} - ${value}`);
}
// a - one
// b - two
// c - three
```
