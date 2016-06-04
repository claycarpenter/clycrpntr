---
title: ES6 Arrow Function Lexical Variables
tags: javascript, es6
template: /base.jade
category: snippet
---

One of the most common examples of using arrow functions (and perhaps the most cited benefit) is the lexical this feature. This lets the arrow function reference the `this` provided by the function that encloses the arrow function, rather than the arrow function being assigned its own function.

ES6 arrow functions actually have four lexical variables:

* `arguments`
* `new.target`
* `super`
* `this`

The [ES6 spec](http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions-runtime-semantics-evaluation) describes this pretty well:

> An ArrowFunction does not define local bindings for arguments, super, this, or new.target. Any reference to arguments, super, this, or new.target within an ArrowFunction must resolve to a binding in a lexically enclosing environment. Typically this will be the Function Environment of an immediately enclosing function.

Here's a simple example of using lexical this. The Greeter class takes a name value as its sole constructor argument, storing the name as an instance property. The `greet` method can then be called with a list of names, and the Greeter will return a greeting for each name provided:

```javascript
class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet(...people) {
    return people.map(person => {
      return `${this.name} says hello to ${person}`;
    });
  }
}

const greeter = new Greeter('George');
console.log(
  greeter.greet('Ozzie', 'Harriet', 'Thorny')
);
// => ["George says hello to Ozzie", "George says hello to Harriet", "George says hello to Thorny"]
```

Within the arrow function in the greet method, we reference the Greeter's name with `this.name`. That references the `this` within the wrapping `greet` function, rather than from within the arrow function itself.

We can also see this in action when we manually specify the `this` value using a Function.call execution:

```javascript
const greeterLiteral = {name: 'George'};
console.log(
  Greeter.prototype.greet.call(greeterLiteral, 'Ozzie', 'Harriet', 'Thorny')
);
// => ["George says hello to Ozzie", "George says hello to Harriet", "George says hello to Thorny"]
```
