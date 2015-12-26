---
title: Parasitic Inheritance
tags: javascript
template: /base.jade
category: snippet
---

Parasitic inheritance is, at its simplest, taking an existing object and augmenting (or otherwise modifying) that object with new properties. This is simple to achieve in JavaScript, as objects are by default open to extension. A basic implementation looks like this:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, position) {
  var person = new Person(name, age);
  person.position = position;

  // Must return person here, otherwise this function is returned as new Employee() result.
  return person;
}

var johnDoe = new Person('John Doe', 30);

var jimHalpert = new Employee('Jim Halpert', 30, 'Salesman');
```

Two constructors are defined: one for `Person` and the other for `Employee`. `Employee` employs parasitic inheritance to extend `Person` by adding a single property, `position`. The `Employee` constructor creates a new `Person` object, then adds a new property to that new object. Once the augmentation is complete, it returns *the Person object*. This is important--if the constructor returns `undefined` (which happens when no explicit return statement is made, or the return statement has no value--e.g., `return;`), then the value return by the Employee constructor will be the (pretty much empty) Employee object. Within the Employee constructor, the Employee object is represented by `this`--and no modifications are made to `this` in the constructor, so the result is basically an empty object.

Calling a function on the ancestor class ("super" in some languages) requires a bit more work. First, we'll add a `sayHi` function to `Person`:

```
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHi = function() {
    return 'Hello, my name is ' + this.name + '.';
  }
}
```

To call that function from the parasitic descendant, the descendant will have to capture the `Person` reference to `sayHi` and bind that to the `person` instance:

```
function Employee(name, age, position) {
  var person = new Person(name, age);
  person.position = position;

  var sayHiFunc = person.sayHi.bind(person);
  person.sayHi = function() {
    return sayHiFunc() + ' I\'m a ' + this.position;
  }

  // Must return person here, otherwise this function is returned as new Employee() result.
  return person;
}
```

Capturing the `Person` implementation of `sayHi` allows `Employee` to include that text in its own `sayHi` output. Compare the `sayHi` output of a `Person` instance (first) with that of an `Employee` instance:

```
"Hello, my name is John Doe."
"Hello, my name is Jim Halpert. I'm a Salesman"
```

The full script is here:

```
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHi = function() {
    return 'Hello, my name is ' + this.name + '.';
  }
}

function Employee(name, age, position) {
  var person = new Person(name, age);
  person.position = position;

  var sayHiFunc = person.sayHi.bind(person);
  person.sayHi = function() {
    return sayHiFunc() + ' I\'m a ' + this.position;
  }

  // Must return person here, otherwise this function is returned as new Employee() result.
  return person;
}

var johnDoe = new Person('John Doe', 30);
console.log(johnDoe.sayHi());

var jimHalpert = new Employee('Jim Halpert', 30, 'Salesman');
console.log(jimHalpert.sayHi());
```
