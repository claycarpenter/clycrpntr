---
title: ES6 Class Basics
tags: javascript, es6
template: /base.jade
category: snippet
---

ES6 introduces support for classes in Javascript. More accurately, it adds syntactic sugar around constructor function definition to make it a bit easier to define classes using Javascript's functions and prototypes. We're going to look at the basics here: defining a new class with a constructor and instance method. We'll then check out how we would've implemented that same functionality using ES5-level language support.

In ES6, classes are defined simply with the `class` keyword:

```javascript
class MyClass {}
```

Constructors--which create constructor functions behind the scenes--are defined with the special method name `constructor`:

```javascript
class MyClass {
  constructor() {
    // Under construction...
  }
}
```

Note that a constructor function is optional--if one isn't defined, an empty constructor (like `constructor() {}`) will be silently substituted.

Prototype methods, or instance methods, are defined with the same shorthand now available to object literals:

```javascript
class MyClass {
  myMethod() {
    return 'hello!';
  }
}
```

In this short example, we'll put together a simple Person class. The class will take a name and age as constructor arguments, saving those values to instance properties. It will also provide a very simple instance method that returns a greeting from the person.

```javascript
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    return `Hello, my name is ${this.name}`;
  }
}

const jimHalpert = new PersonClass('Jim Halpert', 30);
console.log(jimHalpert.sayName());    // "Jim Halpert"
```

Behind the scenes, ES6 is really doing two key things here:

* Creating a constructor function named PersonClass
* Adding a new method `sayName` to the prototype of the PersonClass function

You can see how these work in this ES5 equivalent of the above class:

```javascript
function PersonFunc(name, age) {
  this.name = name;
  this.age = age;
}
PersonFunc.prototype.sayName = function() {
  return `Hello, my name is ${this.name}`;
}

const michaelScott = new PersonFunc('Michael Scott', 45);
console.log(michaelScott.sayName());      // "Michael Scott"
```
