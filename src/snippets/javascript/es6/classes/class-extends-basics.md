---
title: ES6 Class Inheritance Basics
tags: javascript, es6
template: /base.jade
category: snippet
---

Along with the newly introduced class support in ES6, inheritance is also supported through the extends and super keywords. Much like the class support, `extends` and `super` are just syntactic sugar over prototypal inheritance. Nonetheless, like `class`, these two keywords make it easy for users coming from traditional OOP languages (like Java, C#, Ruby) to build classes using a syntax they're familiar with.

`extends` and `super` work much like their counterparts in traditional OOP languages. `extends` declares that a (derived) class inherits from another (source) class. Within the derived class, `super` allows access to pieces of the source class.

Here is a basic example. Two classes are created, Employee and Manager. They share a common name property and a reportWork method. In the Manager implementation of reportWork, we defer to the Employee implementation via super. That allows Manager to reuse the output of the Employee reportWork implementation, while still allowing the Manager implementation to customize the output (adding a very-necessary "like a boss!" exclamation) before returning a final result.

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }

  reportWork(task) {
    return `My name is ${this.name} and I'm working on ${task}`
  }
}

class Manager extends Employee {
  reportWork(task) {
    return `${super.reportWork(task)}--like a boss!`;
  }
}

const jim = new Employee('Jim'),
      michael = new Manager('Michael');

console.log(jim.reportWork('spreadsheets'));
// => My name is Jim and I'm working on spreadsheets
console.log(michael.reportWork('monthly reports'));
// => My name is Michael and I'm working on monthly reports--like a boss!
```

`super` can also be used in the derived class' constructor. There are a couple of caveats, though, to consider when creating a derived constructor. First, `this` cannot be referenced in the derived constructor _before_ `super()` is called. So this example doesn't work:

```javascript
class Original { }

class DerivedBroken extends Original {
  constructor(name) {
    // This causes a ReferenceError ("this is not defined")
    this.name = name;

    super();
  }
}
```

Second, the derived constructor _must_ call `super()` before exiting. So this example also doesn't work:

```javascript
class Original {}

class DerivedBroken extends Original {
  constructor() {
    // Doesn't call super(); throws ReferenceError
  }
}
```

A working example can be seen if we were to rewrite our first example (Employee and Manager) with an explicit derived constructor:

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }

  reportWork(task) {
    return `My name is ${this.name} and I'm working on ${task}`
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name);
  }

  reportWork(task) {
    return `${super.reportWork(task)}--like a boss!`;
  }
}
```

As you can see, that doesn't add much value. Instead, we could just rely on the implicit derived constructor that's added for us if none is declared in the derived class. It's a pretty simple implementation, using rest args and the spread operator to pass any number of arguments on to the source class' constructor:

```javascript
class Original {}

class Derived extends Original {
  constructor(...args) {
    super(...args);
  }
}
```

Finally, ES6 allows for extending any built-in class. This is especially helpful for building custom errors, which can now have full stack traces, or extending Array to build your own array-like data structures.

Here, we produce a very simple required field validation error. It does little more than make it easy to capture required field errors by providing a template for the error message that only requires the field name.

```javascript
class RequiredFieldError extends Error {
  constructor(fieldName) {
    super(`'${fieldName}' requires a value but none was provided`);
  }
}

try {
  throw new RequiredFieldError('lastName');
} catch (error) {
  console.error(error); // RequiredFieldError: 'lastName' requires a value but none was provided
}
```
