---
title: Basic Classical Prototypal Inheritance
tags: javascript
template: /base.jade
category: snippet
---

The most common type of inheritance in JavaScript is prototypal inheritance. It can be used to model the type of classical inheritance employed in common OOP languages like Java and C#. It allows for the creation of types that behave similarly to classes in those traditional languages. While JavaScript doesn't contain true classes, we'll use the term in this article as a shortcut to refer to the types we're building.

Prototypal inheritance starts with standard JS constructors, like this one for Person:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

When it comes to building the extending/child class, two statements are key:

* Calling the parent class' constructor from within the child class' constructor, but calling it in the context of the child class instance.
* Establishing the parent class' prototype as the base for the prototype of the child class.

The extending class therefore looks like this:

```
function Employee(name, age, position) {
  Person.call(this, name, age);

  this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
```

If the child class overrides a method on the parent class but still wants to call that method, the child class will need to explicitly reference the parent class prototype in order to retrieve that method, like so:

```
Person.prototype.sayHi = function() {
  return 'Hello, my name is ' + this.name + '.';
}
Employee.prototype.sayHi = function() {
  return Person.prototype.sayHi.call(this) + ' I\'m a ' + this.position;
}
```

Here is the full test script:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function() {
  return 'Hello, my name is ' + this.name + '.';
}

function Employee(name, age, position) {
  Person.call(this, name, age);

  this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.sayHi = function() {
  return Person.prototype.sayHi.call(this) + ' I\'m a ' + this.position;
}

var johnDoe = new Person('John Doe', 30);
console.log(johnDoe.sayHi());

var jimHalpert = new Employee('Jim Halpert', 30, 'Salesman');
console.log(jimHalpert.sayHi());
```
