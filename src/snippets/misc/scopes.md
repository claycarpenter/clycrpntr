---
title: Programming Scopes
tags: javascript, es6
template: /base.jade
category: snippet
---

Programming scopes define the availability of properties and functions defined within other contexts (functions, objects, classes, modules, etc.). How a programming language defines its scopes can play a big part in how an author goes about designing a solution for a problem when writing in that language.

#### Block Scope

Block scope indicates that a variable will only be available within the block that it is declared within. Within Javascript, this is implemented in the ES6 version through the `let` keyword:

```javascript
if (someTest === true) {
  let message = "success";

  console.log(message); // "success"
}

console.log(message); // ReferenceError; variable is not available
```

#### Function Scope

Function scope means that a variable will be available within the entire function that it has been declared within. This is implemented within Javascript as the `var` keyword:

```javascript
function() {
  console.log(message); // undefined (but doesn't raise an error)

  var message = "success";

  console.log(message); // "success"
}
```

#### Lexical Scope

Lexical scoping means that the components that contain any given component define the full scope of the given component. That is, if component A contains component B contains component C, then the (lexical) scope of component C is C-B-A. In lexical scoping, values are found by first looking at the current context, and then walking up the chain of ancestor components, searching each context in turn.

This example demonstrates a combination of function scoping and lexical scoping. Function scoping means that the `$name` variable declared within `john` is available throughout the function. Lexical scoping makes `$name` available to the `sayName` function, which can investigate the context of its parent function (component) `john`, and use that context to look up the variable's value.

```
function john() {
  function sayName() {
    print $name
  }

  $name = 'john'

  sayName()
}
```

Lexical scoping is considered static, because it is defined by the composition of the components in the source code. The C2.com topic page on [Dynamic Scoping](http://c2.com/cgi/wiki?DynamicScoping) quite concisely and elegantly describes what is meant by lexical scoping:

> "Lexical" here refers to text, in that you can find out what variable is being referred to by looking at the nesting of scopes in the program text.

Javascript is a well-known example of lexical scoping.

#### Dynamic Scope

Dynamic scope lives up to its name--it's based not on the source code construction, but on the series of calls that brought the code to its current point. Like a lexical scope, the first place a value is searched for is in the current context. Unlike lexical scoping, in dynamic scoping the next place searched is the context of the previous function call in the current call chain (and on up to the root of the chain). Because of this, dynamic scoping can only be determined at runtime.

This simple example presents dynamic scoping with the help of a made up language:

```
function sayName() {
  print $name
}

function john() {
  $name = 'john'

  sayName()
}

function sally() {
  $name = 'sally'

  sayName()   
}

john()    // prints 'john'
sally()   // prints 'sally'
```

When `john()` is executed, it sets a var `$name` to "john" and then calls `sayName`. `sayName` tries to print the value of `$name`, but `$name` isn't defined in the current context (`sayName` itself). So it looks to the previous call's context, `john`, and there it finds the `$name` variable and is able to continue with printing.
