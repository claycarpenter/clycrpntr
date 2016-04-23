---
title: New String Features in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces a handful of changes to strings. The most important by far is the new template string literal support, which is large enough to cover in its own topic. In this snippet, we'll cover the other new features added to strings in ES6.

#### Iterating over strings

A string can now be the target of a for-of loop:

```javascript
// Iterating over strings
for (let char of 'abc') {
  console.log(char);
}
```

The string 'abc' is split by characters, and each character is fed in turn to the console.log to be printed out. The resulting output:

```
a
b
c
```

#### Spread operator on strings

The spread operator can also be applied to strings. Applying the spread operator to strings converts them into an array, populated with each character in the string:

```javascript
console.log([...'abc']);
// => ["a", "b", "c"]
```

You can employ the spread operator to rewrite the string for-of loop shown above without some of its syntactic sugar like this:

```javascript
for (let char of [...'abc']) {
  console.log(char);
}
```

#### Content tests

Three new methods are added to help test a string's content:

* `#startsWith(subString, startPosition)` - Searches for `subString` within the string. Optionally considers the beginning of the string to be at `startPosition`.
* `#endsWith(subString, endPosition)` - Searches for `subString` at the end of the string. Optionally considers the end of the string to be at `endPosition`.
* `#include(subString, startPosition)` - Searches for `subString` within the string. Optionally starts at `startPosition`. Returns `true` if the `subString` is found.

Note that all of the methods employ case sensitive searches.

A quick demo of the methods in action:

```javascript
var testString = 'batman and catwoman';

console.log(testString.startsWith('bat'));  // true
console.log(testString.startsWith('Bat'));  // false
console.log(testString.endsWith('catwoman'));  // true
console.log(testString.endsWith('Catwoman'));  // false
console.log(testString.includes('two'));    // true
console.log(testString.startsWith('at', 1));  // true
console.log(testString.endsWith('man', 6));   // true
console.log(testString.endsWith('man', 5));   // false
console.log(testString.includes('two', 14));  // false
```


