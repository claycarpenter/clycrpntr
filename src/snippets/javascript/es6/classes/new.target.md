---
title: ES6 new.target
tags: javascript, es6
template: /base.jade
category: snippet
---

Along with classes, ES6 introduced a new property called `new.target` that lets functions determine whether they've been called as constructors (i.e., with the `new` keyword). This property is a reference to the function itself if the function is being called with `new`, and `undefined` if the function is being called just like a regular function.

We can use this property to guard against non-constructor usage of constructor functions:

```javascript
function Person(name) {
  if (new.target === undefined) {
    throw `Person() must be called as a constructor`;
  }

  this.name = name;
}

try {
  console.log(Person('Jimmy'));
} catch (error) {
  console.error(error);
}
// => Person() must be called as a constructor

console.log(new Person('Jimmy'));
// => Person {name: "Jimmy"}
```

And we can also go the other way, guarding against constructor usages of non-constructor functions:

```javascript
function greet(name) {
  if (new.target !== undefined) {
    throw `greet cannot be called as a constructor`;
  }

  return `Hello ${name}!`
}

try {
  console.log(new greet('Jimmy'));
} catch (error) {
  console.error(error);
}
// => greet cannot be called as a constructor

console.log(greet('Jimmy'));
// => Hello Jimmy!
```

`new.target` will only point to the _first_ constructor in the chain of constructors typically involved in creating objects. This can be seen in this example:

```javascript
class Person {
  constructor() {
    console.log(new.target.name);
  }
}

class Employee extends Person { }

new Person();     // => Person
new Employee();   // => Employee
```
