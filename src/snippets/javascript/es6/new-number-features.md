---
title: New Number Features in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces relatively minor changes to numbers. We'll go over a few of the most useful here.

#### New methods on global object Number

A handful of methods that were previously only available as global functions now have counterparts as methods of the global Number object. These functions are:

* Number#isFinite
* Number#isNaN
* Number#parseInt
* Number#parseFloat

You can see them in action here:

```javascript
console.log(Number.isFinite(1));        // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN(Number.parseInt('nope')));         // true

console.log(Number.parseInt('1.1'));    // 1
console.log(Number.parseFloat('1.1'));  // 1.1
```

None of those examples required type coercion. Unlike their global function counterparts, the Number methods don't silently coerce the provided argument value into the expected type. This results in a stricter, and more reliable, operation, as seen in these examples:

```javascript
// Number#foo functions don't coerce their parameters to numbers
console.log(isNaN('NaN'));            // true
console.log(Number.isNaN('NaN'));     // false
console.log(Number.isFinite(1));      // true
console.log(Number.isFinite('1'));    // false
console.log(Number.isInteger(33));  // true
console.log(Number.isInteger('33'));  // false
```

#### Number#isInteger test

Number also gets a new `isInteger` test function. The method name pretty much says it all--provided a number, the function will return `true` or `false` if the argument is an integer. Like the other new Number methods, `isInteger` doesn't provide implicit type coercion.

```javascript
// New isInteger test.
console.log(Number.isInteger(1));     // true
console.log(Number.isInteger(1.1));   // false

// #isInteger also doesn't perform type coercion
console.log(Number.isInteger(33));  // true
console.log(Number.isInteger('33'));  // false
```

#### Epsilon

ES6 also introduces the constant Number.EPSILON to represent the smallest possible difference in floating point numbers. It's intended to help resolve some of the issues arising from Javascript's implementation of floating point arithmetic. It can, for instance, resolve the infamous example of `0.1 + 0.2 !=== 0.3`:

```javascript
// Number.EPSILON - smallest possible floating point value
function epsilonEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log( (0.1+0.2) === 0.3 );   // false
console.log( epsilonEqual(0.1+0.2, 0.3) );   // true
```

Thanks to Axel Rauschmayer who's post [New number and Math features in ES6](http://www.2ality.com/2015/04/numbers-math-es6.html) really helped illustrate these new methods.
