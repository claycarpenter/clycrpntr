---
title: Declaring Basic Object Data Properties and the Writable Configuration
tags: javascript
template: /base.jade
category: snippet
---

The optional second argument of `Object.create` is a map of properties (or property descriptors, to be more precise) for the new object. This allows you to create the object instance and define the properties in a single statement, like so:

```
var car = Object.create({}, {
  make: {
    value: 'honda'
  },
  model: {
    value: 'accord'
  },
  honk: {
    value: function() {
      return 'honk!';
    }
  }  
});

console.log(car.honk());    //=> honk!
```
