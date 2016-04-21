---
title: "Extend" Functionality in ES6 with Object.assign
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Copying properties from one object to another is a common enough task that many Javascript libraries include support for the function, including Underscore, lodash, jQuery, and Angular. ES6 brings that functionality to the standard Javascript toolbox in the form of `Object.assign`.

The basic usage is simple: it will copy all properties from the second (and subsequent) arguments into the first. If there are multiple source objects, and they have identical keys, then the last object's values win. For instance:

```javascript
// Basic usage
const base = {},
      extensionA = {'new':'feature', 'foo':'bar'},
      extensionB = {'new':'value'};

Object.assign(base, extensionA, extensionB);
console.log(base);    // Object {new: "value", foo: "bar"}
```

Object.assign uses property assignment, not definition, to set values on the destination object. This means that property setters can be triggered during the assignment process. In this example, a simple object `integerConverter` uses its `value` setter to convert strings and numbers into integers:

```javascript
// Uses assignment operator.
const integerConverter = {
  _int: 0,
  get value() {
    return this._int;
  },
  set value(newValue) {
    this._int = parseInt(newValue);
  }
};

Object.assign(integerConverter, {value: '33'});
console.log(integerConverter.value);  // 33 (as number, not string)
```

Object.assign can also be used to efficiently copy constructor arguments into a new class instance.

```javascript
class Person {
  constructor(firstName, lastName) {
    Object.assign(this, {firstName, lastName});
  }
}

const michaelScott = new Person('Michael', 'Scott');
console.log(michaelScott);    // Person {firstName: "Michael", lastName: "Scott"}
```

Big thanks to Axel Rauschmayer for pointing this last tip out in his article [ECMAScript 6: merging objects via Object.assign()](http://www.2ality.com/2014/01/object-assign.html).
