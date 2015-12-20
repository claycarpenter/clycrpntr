---
title: Around Logic With Apply
tags: javascript
template: /base.jade
category: snippet
---

Because `apply` allows for calling the applied function with a variable number of arguments, it makes a good candidate for situations where the number of arguments aren't known ahead of time. In this example, we'll use it to provide a simple around logic wrapper. This wrapper will capture the object and method being caller, and write out (console) log statements before and after the method's execution.

Here is the logging function:

```
function logFuncName(obj, method, args) {
  console.log('[', obj.toString(), '#', method.name, '] Start');
  method.apply(obj, args);
  console.log('[', obj.toString(), '#', method.name, '] Finish');
}
```

The logging function takes an object (which will become the `this` object for the target method), the method to execute, and an optional set of arguments as an array. It logs the object and function name, then uses `apply` to call the method with the `obj` as the `this` context and providing the `args` arguments array. Afterwards, it prints out a quick log message noting the function call has finished.

The logging function works with and without arguments, and works well with functions that are already attached to objects:

```
var jen = {
  name: 'Jen',
  sayHello: function sayHello() {
    console.log('Hello, my name is', this.name);
  },
  exercise: function exercise(exerciseType, mileage) {
    console.log(this.name, 'is going for a', exerciseType, 'for', mileage, 'miles');
  },
  toString: function() {
    return this.name;
  }
}

logFuncName(jen, jen.sayHello);
logFuncName(jen, jen.exercise, ['jog', 6.5]);
```


The combined source:

```
function logFuncName(obj, method, args) {
  console.log('[', obj.toString(), '#', method.name, '] Start');
  method.apply(obj, args);
  console.log('[', obj.toString(), '#', method.name, '] Finish');
}

var jen = {
  name: 'Jen',
  sayHello: function sayHello() {
    console.log('Hello, my name is', this.name);
  },
  exercise: function exercise(exerciseType, mileage) {
    console.log(this.name, 'is going for a', exerciseType, 'for', mileage, 'miles');
  },
  toString: function() {
    return this.name;
  }
}

logFuncName(jen, jen.sayHello);
logFuncName(jen, jen.exercise, ['jog', 6.5]);
```