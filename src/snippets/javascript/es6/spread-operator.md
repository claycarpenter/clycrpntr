---
title: Spread Operator in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

The ES6 spread operator expands arrays into multiple arguments (when calling a function) or multiple elements (when working with array literals).

You can see the difference with this basic test using `console.log`:

```javascript
console.log([1]);     // "[1]"
console.log(...[1]);  // "1"
```

In the first case, the array `[1]` is passed to `log`, so the array is printed to the console. In the second case, the spread operator expands the single-element array into a single-argument function call. So `.log(...[1])` becomes equivalent to `.log(1)`. The resulting output to the console if, of course, just 1.

A more useful example is this `sum` method implementation:

```javascript
function sum(a, b, c) {
  return a + b + c;
}

let nums = [1, 2, 3];
console.log(sum(...nums));    // 6
console.log(sum(1, 2, 3));     // 6
```

Both `sum(...nums)` and `sum(1, 2, 3)` are identical. The spread operator adds flexibility to how we collect the function's arguments in preparation for calling the `sum` function.
