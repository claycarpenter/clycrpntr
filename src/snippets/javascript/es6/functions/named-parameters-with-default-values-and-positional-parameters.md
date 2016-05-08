---
title: Named Parameters with Default Values and Positional Arguments
tags: javascript, es6
template: /base.jade
category: snippet
---

Because simulated named parameters in Javascript use destructuring, they also support the default values allowed in destructuring operations.

In this example, we build a simple console log wrapper named `logger`. It takes three values through its arguments object: the message to write, the level of the log output, and the source of the log output. Bot the level and the source of the output have defaults (`info` and `Logger`, respectively).

```javascript
function logger({message, level = 'info', source = 'Logger'} = {}) {
  console[level](`[${source}] ${message}`);
}

logger({message: 'All defaults'});    // [Logger] All defaults
logger({message: 'Login succeeded', source: 'Auth'});   // [Auth] Login succeeded
logger({message: 'Initializing', level: 'debug', source: 'FooWidget'});    // [FooWidget] Initializing
```

Named parameters can also happily coexist with positional parameters. By convention, named parameters are usually at the tail of the list of positional parameters, and we'll follow that convention here as well. In this example, we'll build a simple function to print out elements from an array. The array is passed in as the first (positional) argument. A second argument consisting of options can also be passed in, but isn't required. Each value in the options map gets a default value through the destructuring definition. Note that the default value for the `end` argument is able to be dynamically set based on the value of the `array` argument that comes before it.

```javascript
function printArray(array, {start = 0, end = array.length, step = 1} = {}) {
  for (let i = start; i < end; i = i + step) {
    console.log(array[i]);
  }
}

printArray(
  [1,2,3,4]
);    // 1, 2, 3, 4

printArray(
  [1,2,3,4],
  {start: 1, step: 2}
);    // 2, 4
```
