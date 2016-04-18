---
title: Array.of
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

The new Array.of method added in ES6 provides a more reliable alternative to the array constructor. In basic operation, it acts much like an array literal statement:

```javascript
let arrayLiteral = [1,2,3];
let arrayOf = Array.of(1,2,3);
console.log(arrayLiteral);  // [1, 2, 3]
console.log(arrayOf);       // [1, 2, 3]
```

The Array constructor has a small quirk, where passing in multiple arguments to the constructor creates an array containing all of those elements, while passing in a single number value creates an array of that length of undefined elements:

```javascript
let array12 = new Array(1, 2);
let array2 = new Array(2);
let arrayOf = Array.of(2);
console.log(array12);     // [1, 2]
console.log(array2);     // [undefined, undefined]
console.log(arrayOf);   // [2]
```

This causes a problem when creating subclasses of array. Array literals can't be used to create instances of the subclass, as they'll create normal arrays. The typical Array constructor could work, but has a quirk. So the best way to reliably create subclass arrays is with the Array.of method:

```javascript
class SubArray extends Array {
  sum() {
    return this.reduce((accumulator, currValue) => {
      return accumulator + currValue;
    }, 0);
  }
}

let subArray = SubArray.of(1,2,3,4);
console.log(subArray instanceof SubArray);  // true
console.log(subArray.sum());                // 10
```
