---
title: Array Contents in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Arrays gain some new methods to fill out the array contents, including dedicated methods like Array#fill.

#### Filling with static values with Array#fill

Array.fill provides the most basic array content filling solution. Given an array and a value, it will fill every index in that array with the same value. Note that the array is filled in-place; that is the array's contents are modified, rather than just returning a cloned array with the filled values.

```javascript
// Array#fill to fill with a fixed value
console.log(new Array(3).fill('a'));    // ["a", "a", "a"]
console.log([,,,].fill('a'));           // ["a", "a", "a"]

// Modifying array in-place
let fillArray = [1, 2, 3];
fillArray.fill('a');
console.log(fillArray);                 // ["a", "a", "a"]
```

#### Filling with ascending numbers with Array#keys

The new method Array#keys produces an iterator over the "keys" of the collection. In the case of an array, those keys are the array's indices. This can be used to create a simple one-liner to fill out an array of incrementing values:

```javascript
// Filling an array with ascending numbers
console.log([...new Array(5).keys()]);  // [0, 1, 2, 3, 4]
```

Thanks for Alex Rauschmayer for pointing out this tip in his book [Exploring ES6](http://exploringjs.com/es6/ch_arrays.html).

#### Filling an array with Array#from

The second argument of Array#from takes a `map` function, which will be called for each element in the newly created array. This allows for more complex array filling algorithms than are possible with #fill or the simple ascending keys trick. Here, we'll use it to produce the squares of each array index:

```javascript
// Filling an array using Array#from
let fromArray = Array.from(new Array(5), (x, index) => index * index);
console.log(fromArray);     // [0, 1, 4, 9, 16]
```
