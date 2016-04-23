---
title: ES6 Set Basics
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces the new Set object. It operates like an array, but with a few key differences. Values within a Set are always unique, unlike an Array. Additionally, Set has different methods to testing the quantity and composition of collection contents.

#### Set basics

Set are created with a new operator and the Set constructor name, like so:


```javascript
let set = new Set();
```

While there is no literal form for Sets in ES6, sets can be created using a simple flat array:

```javascript
let arraySet = new Set([1,2,3]);
console.log([...arraySet.values()]);   // [1, 2, 3]
```

Set entries can be added with `#add(value)`:

```javascript
set.add('John');
set.add('Barry');
set.add(42);
console.log([...set.values()]);  // ["John", "Barry", 42]
```

Unlike Maps and Arrays, there is no way to retrieve a value by a particular key--you may only test if the value is present in the set:

```javascript
let arraySet = new Set([1,2,3]);
console.log(arraySet.has(1));   // true
console.log(arraySet.has(4));   // false
```

#### Map sizing

Much like the `length` property of Arrays, you can determine a Set's size with the `size` property:

```javascript
let arraySet = new Set([1,2,3]);
console.log(arraySet.size);     // 3
```

#### Testing key presence

As shown above, the `#has(value)` test method that will return a boolean indicating whether the set contains the specified value. Note that set composition tests operate similar to the strict equality operator:

```javascript
let empty = {};
let simpleSet = new Set([empty]);
console.log(simpleSet.has(empty));  // true
console.log(simpleSet.has({}));     // false
```

#### Cleaning up maps

Sets contain two methods for cleaning out contents: the targeted `delete` and the all-encompassing `clear`. `delete` removes just a single value from the set:

```javascript
let cleanUpSet = new Set([1,2,3]);
console.log([...cleanUpSet.values()]);   // [1, 2, 3]
console.log(cleanUpSet.has(1));   // true
console.log(cleanUpSet.delete(1));   // true
console.log(cleanUpSet.size);     // 2
```

`clear` removes every value from the map:

```javascript
let clearSet = new Set([1,2,3]);
console.log([...clearSet.values()]);   // [1, 2, 3]
clearSet.clear();
console.log([...clearSet.values()]);   // []  
```

#### Converting back to an Array

There are a couple simple methods for converting the values in a Set back into an Array:

```javascript
// Converting values back to array
console.log([...set.values()]);
console.log(Array.from(set));
```
