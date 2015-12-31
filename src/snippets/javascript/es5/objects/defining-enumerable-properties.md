---
title: Defining Enumerable Properties
tags: javascript
template: /base.jade
category: snippet
---

Objects can selectively expose properties for enumeration--allowing those properties to be discovered from `Object.keys` and `for..in` loops.

Enumerability is controlled with a flag in the property descriptor used to create (or reconfigure) an object's property. For instance, this call makes a new enumerable property named shape:

```
Object.defineProperty({}, 'shape', {
  value: 'circle',
  enumerable: true
});
```

By default, properties _aren't_ enumerable. So while the shape property defined above is discoverable via `Object.keys`, this color property isn't:

```
Object.defineProperty(blank, 'color', {
  value: 'blue'
});
```

You can see the effects in this small test script:

```
var blank = {}

// By default, properties are not enumerable
Object.defineProperty(blank, 'color', {
  value: 'blue'
});

console.log('Keys in blank: ' + Object.keys(blank));
//=> "Keys in blank: "

Object.defineProperty(blank, 'shape', {
  value: 'circle',
  enumerable: true
});

console.log('Keys in blank: ' + Object.keys(blank));
//=> "Keys in blank: shape"

for (key in blank) {
  console.log('blank[' + key + ']: ' + blank[key]);
}
//=> "blank[shape]: circle"
```
