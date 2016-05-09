---
title: Mandatory Arguments and Default Values
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

While I commonly speak of function arguments that aren't necessary to that function's operation as "optional" (especially if those arguments have default values), the reality is that all arguments are optional in Javascript. Javascript operates like every function arguments have a default value of `undefined`. These two functions are effectively identical:

```javascript
function implicit(foo) {
  return foo;
}
function explicit(foo = undefined) {
  return foo;
}
```

In ES5, enforcing mandatory arguments meant checking each argument against an undefined value:

```javascript
function pairValues(a, b) {
  if (a === undefined) {
    throw new Error('Missing required argument a');
  }
  if (b === undefined) {
    throw new Error('Missing required argument b');
  }

  return [a, b];
}

try {
  pairValues()
} catch (error) { console.error(error) }
```

Axel Rauschmayer [describes a technique](http://www.2ality.com/2014/04/required-parameters-es6.html) he picked up from Allen Wirfs-Brock to enforce mandatory arguments in a more elegant fashion. Instead of checking each value inside the function body, we can instead rely on an error being thrown by a function that's executed when a value isn't provided for a mandatory argument. Effectively, we've made the default value a raised error for those arguments. We can also add a little sugar on top, passing in the argument name so that the error can contain a more descriptive message. Here's our more concise solution to mandatory arguments using ES6 features:

```javascript
function reqdArg(name) {
  throw new Error(`Missing required argument ${name}`)
}
function pairValues(a = reqdArg('a'), b = reqdArg('b')) {
  return [a, b];
}

try {
  pairValues()
} catch (error) { console.error(error) }
```
