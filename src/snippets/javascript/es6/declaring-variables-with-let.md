---
title: Declaring Variables with let in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

`let` is a new way to define variables in ES6. `let` creates block scope variables. This contrasts with the function-scoped variables created by `var`. A great example of the block scope is using `let` to declare a for loop tracking variable. Using `let`, the counter variable will be available within the for loop, but not outside of it. The for loop pushes values into the collection array `numbers`, which is also declared with `let`. Because it's declared outside of the for loop, it's still available when we try to print it out. Here's the code:

```javascript
let numbers = [];
for (let x = 0; x < 10; x += 1) {
  numbers.push(x);
}

try {
  console.log('numbers:', numbers);   // prints array of numbers
  console.log('x:', x);    // raises ReferenceError
} catch (error) {
  console.error('Caught:', error);
}
```

Unlike `var`, variables declared with `let` aren't hoisted, so they can't be referenced before they're "defined" in the code:

```javascript
try {
  console.log(foo);   // undefined
  console.log(bar);   // raises ReferenceError
} catch (error) { /* Ignore ReferenceError */ }

var foo = 'foo';
let bar = 'bar';
```
