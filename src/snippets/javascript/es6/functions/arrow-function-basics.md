---
title: ES6 Arrow Function Basics
tags: javascript, es6
template: /base.jade
category: snippet
---

ES6 adds arrow functions, a new shorthand for creating anonymous functions. These have two advantages over normal function expressions: they're much shorter, and they support lexical `this`. We'll cover the basics of writing arrow functions in this snippet.

#### Basics

At the most basic implementation, arrow functions let you replace the `function` keyword with a "fat arrow" (`=>`). Here, a simple square function written as an arrow function, and the longhand version for comparison:

```javascript
var square = (param) => {
  return param * param;
};
var squareLonghand = function(param) {
  return param * param;
};
console.log(square(2));   // 4
```

When only one parameter is present, the parenthesis can be omitted:

```javascript
var square = param => {
  return param * param;
}
```

Multiple parameters must always be surrounded by parenthesis:

```javascript
var add = (a, b) => { return a + b; };
```

#### Expressions as Arrow Function Bodies

If the body of the arrow function is an expression (that is, it returns a value), then a couple more shortcuts are enabled:

* the value of the expression will automatically be returned as the value of the function (i.e., no `return` statement is required)
* no brackets are required around the function body

That `add` method shown above could be rewritten as:

```javascript
var add = (a, b) => a + b;
```

This is especially useful in functions like `Array.map`:

```javascript
[1,2,3].map(x => x * x);    // [1,4,9]
```

Note that function calls are expressions, so even if the function call "doesn't return anything" (i.e., it returns a default `undefined`), that function call can still be used as an expression-type arrow function body:

```javascript
[1,2,3].forEach(x => console.log(x))
```

#### Statements as Arrow Function Bodies

If statements are the body of an arrow function, then they must be surrounded with brackets. For instance, this implementation of the `add` arrow function _is not legal_:

```javascript
// Not legal, must have brackets around return statement
var add = (a, b) => return a + b;
```

#### Returning object literals

Object literals, when used as arrow function expression bodies, can be confused for a block. In order to return an object literal, parenthesis must be added around the object literal:

```javascript
const square = x => ({input: x, output: x * x})
```
