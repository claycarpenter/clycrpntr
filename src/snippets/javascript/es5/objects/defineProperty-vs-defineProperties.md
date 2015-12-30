---
title: Differences Between defineProperty and defineProperties
tags: javascript
template: /base.jade
category: snippet
---

Quick reminder on the syntax difference between `Object.defineProperty` and `Object.defineProperties`.

`defineProperty` takes three arguments: the target object, the property name, and the property descriptor.

It looks like this:

```
Object.defineProperty(car, 'passengers', {
  value: 0,
  writable: true,
  configurable: false,
  enumerable: true
});
```

By contrast, `defineProperties` takes two arguments: the target object, and a map of property descriptors. Within that map, the keys are the property names, the values are the property descriptors for the property.

For instance:

```
Object.defineProperties(car, {
  passengers: {
    value: 0,
    writable: true,
    configurable: false,
    enumerable: true
  },
  startEngine: {
    value: function() { /* Impl... */ },
    writable: false,
    configurable: false,
    enumerable: true
  }
});
```
