---
title: Declaring Basic Object Data Properties and the Writable Configuration
tags: javascript
template: /base.jade
category: snippet
---

The `Object.defineProperty` method allows for defining properties on an object with a greater level of control than is achieved using simpler methods of property declaration.

The most basic property type is a data property. All data properties define a `value`, but an also optionally define other attributes: configurability/extensibility, enumerability, and writability.

Typical JS property declarations create writable properties:

```
var car = {
  make: 'honda'
};
car.make = 'ford';
console.log(car.make)   //=> 'ford'
```

By contrast, properties declared with `Object.defineProperty` default to not writable:

```
var car = {};
Object.defineProperty(car, 'make', {
  value: 'honda'
});
car.make = 'ford';
console.log(car.make)   //=> 'honda'
```

Data properties can be made writable by passing a `true` value for the `writable` property of the new property descriptor:

```
var car = {};

// Create a writable property passengers
Object.defineProperty(car, 'passengers', {
  value: 0,
  writable : true
});

// Update passengers
car.passengers = 2;

console.log('Passengers: ' + car.passengers);  //=> 2
```

Note that data properties have a value, but that value doesn't have to be "data"--functions are valid values as well. For instance:

```
Object.defineProperty(car, 'honk', {
  value: function() {
    return 'honk!';
  }
});

console.log(car.honk());    //=> honk!
```
