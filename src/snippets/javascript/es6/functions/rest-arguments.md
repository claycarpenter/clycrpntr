---
title: Function Rest Arguments in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

The ES6 spread operator can also be used to define "rest" arguments in functions. These serve to collect up many arguments into a single array. For instance, this `capitalize` function converts to uppercase all strings passed in. It uses the spread operator to collect enumerated arguments into a single `words` array parameter, and then uses Array#map to convert that array into another array of uppercase strings.

```javascript
function capitalize(...words) {
  return words.map(function(word) { return word.toUpperCase(); });
}
console.log(capitalize('obvious', 'bicycle'));
```

Rest arguments can also work in conjunction with "normal" arguments. In this example, we rewrite the above capitalize function to be more generic. It takes a function as the first concrete argument, and then iterates over the provided rest arguments and calls that function for each item in the arguments:

```javascript
function transform(transformFunction, ...items) {
  return items.map(function(item) { return transformFunction.call(item) });
}
console.log(transform(String.prototype.toLowerCase, 'Vampire', 'Weekend'));   // ['vampire', 'weekend']
console.log(transform(String.prototype.toLowerCase));   // []
```

Note that when no rest arguments are provided, `items` is simply a blank array.

Unlike Ruby, rest arguments can't be defined within the middle of the function signature. This example causes a syntax error:

```javascript
// Doesn't work - SyntaxError
function restArgs(first, ...middle, last) {
  console.log(`first: ${first}`);
  console.log(`middle: ${middle}`);
  console.log(`last: ${last}`);
}
```
