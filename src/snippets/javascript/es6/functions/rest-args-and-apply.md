---
title: Rest Args and Apply
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Rest arguments can be used in combination with Function.apply to easily build wrapped functions. Rest arguments gather an arbitrary group of function arguments into a single array argument. Function.apply calls a function, passing in all values provided in an array argument to the original functions named arguments.

In this example, we use these two features together to produce a simple generic logging wrapper. The logging wrapper can wrap any function and print out "start" and "end" log messages. The logging wrapper takes advantage of the `name` property of named functions (those declared through function statements, rather than function expressions) to identify the name of the function and include that name in the resulting log output.

Here is the code:

```javascript
function add(a, b) {
  return a + b;
}

function logWrapper(wrappedFunc) {
  return function(...args) {
    console.log(`[${wrappedFunc.name}] start`);
    const result = wrappedFunc.apply(undefined, args);
    console.log(`[${wrappedFunc.name}] end`);

    return result;
  }
}

const addWrapped = logWrapper(add);

console.log(addWrapped(2, 3));
```

The output looks like this:

```
[add] start
[add] end
5
```
