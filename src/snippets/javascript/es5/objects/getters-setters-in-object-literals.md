---
title: Getters and Setters in Object Literals
tags: javascript
template: /base.jade
category: snippet
---

Along with defining getter/setter methods for properties on objects with Object.defineProperty (and its bulk-mode sibling, Object.defineProperties), getters and setters can also be defined in object literals with the special `get` and `set` keywords.

Unlike defining a function on a object literal, defining getters and setters doesn't require the `methodName: function () { ... }`. Instead, the signature skips the `function` keyword completely:

```javascript`
var example = {
  get propName() {
    return value;
  },
  set propName(newValue) {
    this.value = newValue;
  }
}
```

These getter/setters can be really handy for transparently sanitizing input values coming in through the setters. In this example, we use the setter to silently run the incoming value through `parseInt` to convert either numbers or strings to integer values. The value is then stored in a "private" property `_int` that's accessed through the getter.

```javascript
var integerConverter = {
  _int: 0,
  get value() {
    return this._int;
  },
  set value(newValue) {
    this._int = parseInt(newValue);
  }
};

console.log(integerConverter.value);  // 0
integerConverter.value = '33';
console.log(integerConverter.value);  // 33 (as number, not string)
```
