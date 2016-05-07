---
title: Default Values for Function Arguments in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces formal support for default function arguments. The syntax is simple, using an assignment operator to define the default value for a particular argument:

```javascript
function log(message, logLevel = 'debug') {
  console[logLevel](message);
}

log('Defaults to debug');
log('But can also warn', 'warn');
```

Effectively, all arguments have default values, but those arguments which don't have explicit default values are assigned an implicit default value of `undefined`. For instance, these two functions are identical:

```javascript
function implicit(a, b = 'bar') {
}
function explicit(a = undefined, b = 'bar') {
}
```

Default arguments don't have to be the last arguments in the function signature, but in practice listing default arguments first isn't terribly helpful. In order to trigger the default value, `undefined` must be passed in place of the missing argument. For instance:

```javascript
function logDefFirst(logLevel = 'debug', message) {
  console[logLevel](message);
}

logDefFirst(undefined, 'debug message');
logDefFirst('warn', 'warn message');
```

That might be useful for some cases where the default value is complex and important not to repeat, but for most cases I imagine that ordering the default value arguments at the end of the arguments list will be the most practical construction.

Default values can also refer to the object context the function executes within when they use the `this` keyword. In the case of this `sayHi` function, the context's `firstName` property will be used if no value is provided for the `myName` argument:

```javascript
function sayHi(myName = this.firstName) {
  return `${myName} says hello!`;
}

let person = {
  firstName: 'Linus',
  lastName: 'Torvalds'
};

console.log(sayHi.call(person));    // Linus says hello!
console.log(sayHi.call(person, person.lastName));   // Torvalds says hello!
```
