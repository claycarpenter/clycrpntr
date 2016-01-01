---
title: Declaring Basic Object Data Properties and the Writable Configuration
tags: javascript
template: /base.jade
category: snippet
---

ES5 provides at least three different methods for iterating over the properties of an object.

### For..In Loop

The for..in loop iterates over a list of all enumerable properties within an object. The values will be the names of the properties, as strings.

```
// Iterate over enumerable properties with for..in loop
console.log('for..in loop:');
for (key in testObject) {
  console.log('-- ' + key + ': ' + testObject[key]);
};
```

### Object.keys

Object.keys creates an array containing the names of all enumerable properties on the object. The values are the names of the properties, as strings.

```
// Iterate over enumerable properties with Object.keys
console.log('Object.keys:');
Object.keys(testObject).forEach(function(key) {
  console.log('-- ' + key + ': ' + testObject[key]);
});
```

### Object.getOwnPropertyNames

Unlike the for..in loop and Object.keys, Object.getOwnPropertyNames creates a list of all properties described on the object, regardless of whether they're enumerable or not. Otherwise, it operates in a very similar fashion to Object.keys:

```
// Iterate over all properties with Object.
console.log('Object.getOwnPropertyNames:');
Object.getOwnPropertyNames(testObject).forEach(function(key) {
  console.log('-- ' + key + ': ' + testObject[key]);
});
```

You can see the differences in action in this test script, and the output (below):

```
// Simple test object, with a mix of enumerable and non-enumerable properties.
var testObject = Object.create({}, {
  visibleOne: {
    value: true,
    enumerable: true
  },
  visibleTwo: {
    value: true,
    enumerable: true
  },
  hiddenOne: {
    value: false,
    enumerable: false   // Default value
  },
  hiddenTwo: {
    value: false,
    enumerable: false   // Default value
  }
});

// Add extra property; this method creates an enumerable property.
testObject.simpleProperty = true;


// Iterate over enumerable properties with for..in loop
console.log('for..in loop:');
for (key in testObject) {
  console.log('-- ' + key + ': ' + testObject[key]);
};


// Iterate over enumerable properties with Object.keys
console.log('Object.keys:');
Object.keys(testObject).forEach(function(key) {
  console.log('-- ' + key + ': ' + testObject[key]);
});

// Iterate over all properties with Object.
console.log('Object.getOwnPropertyNames:');
Object.getOwnPropertyNames(testObject).forEach(function(key) {
  console.log('-- ' + key + ': ' + testObject[key]);
});
```

Script output... note only getOwnPropertyNames shows the non-enumerable properties:

```
"for..in loop:"
"-- visibleOne: true"
"-- visibleTwo: true"
"-- simpleProperty: true"
"Object.keys:"
"-- visibleOne: true"
"-- visibleTwo: true"
"-- simpleProperty: true"
"Object.getOwnPropertyNames:"
"-- visibleOne: true"
"-- visibleTwo: true"
"-- hiddenOne: false"
"-- hiddenTwo: false"
"-- simpleProperty: true"
```
