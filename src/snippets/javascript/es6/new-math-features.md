---
title: New Math Methods in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces a handful of new methods to the Math global object. I don't typically use many math functions, so I'll leave a full examination to Axel Rauschmayer's excellent post [New number and Math features in ES6](http://www.2ality.com/2015/04/numbers-math-es6.html). For this post, we'll look over just a couple new methods I want to highlight.

#### Math.sign

Math.sign helps to identify the sign of the provided number argument. It returns `-1` or `1` for negative and positive numbers, respectively. If the number is zero or `NaN`, it'll return the value of the number. Note that `sign` will perform implicit type coercion.

```javascript
console.log(Math.sign(-56));    // -1
console.log(Math.sign(82));     // 1
console.log(Math.sign(NaN));    // NaN
console.log(Math.sign(0));      // 0
console.log(Math.sign('82'));   // 1
console.log(Math.sign('-82'));  // -1
console.log(Math.sign('NaN'));  // NaN (the object, not as a string)
```

#### Math.trunc

Math.trunc removes the decimal portion, returning the integer from any number provided. If the number isn't a number, `NaN` will be returned. Note that `sign` will perform implicit type coercion.

```javascript
console.log(Math.trunc(3.14));    // 3
console.log(Math.trunc(-3.14));   // -3
console.log(Math.trunc('3.14'));   // 3
console.log(Math.trunc(NaN));   // NaN
console.log(Math.trunc('NaN'));   // NaN
```

