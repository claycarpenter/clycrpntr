---
title: Defining Enumerable Properties
tags: javascript
template: /base.jade
category: snippet
---

The property descriptor for both data and accessor-type properties include a flag called `configurable`. The `configurable` flag determines whether the property can subsequently be redefined. By default, `configurable` is `false`--properties, once defined, cannot be redefined. Attempting to redefine non-configurable properties results in a TypeError. This is in contrast to the behavior of a data property with a non-writable configuration: when an attempt is made to redefine the value of that data property, the attempt fails silently and has no effect.

This example illustrates the error raised when trying to redefine a non-configurable property:

```
// By default, properties are not enumerable
Object.defineProperty(blank, 'color', {
  value: 'blue'
});

try {
  // Redefining a non-configurable property raises
  // a TypeError.
  Object.defineProperty(blank, 'color', {
    value: 'orange'
  });  
} catch (error) {
  console.error(error.toString());
}

// Still 'blue'
console.log('color: ' + blank.color);
```

In contrast, when a property is (initially) defined as configurable, the property may be subsequently redefined (even if that redefinition includes a property descriptor that makes the property non-configurable). This example shows a "shape" property being redefined:

```
// When the property is defined as configurable,
// redefining the property works fine.
Object.defineProperty(blank, 'shape', {
  value: 'circle',
  configurable: true
});
Object.defineProperty(blank, 'shape', {
  value: 'square'
});

// Changed from 'circle' to 'square'
console.log('shape: ' + blank.shape);
```
