---
title: ES6 Class Static Methods
tags: javascript, es6
template: /base.jade
category: snippet
---

The class support introduced in ES6 also includes syntactic sugar for defining class or static methods. These methods are available not from instances of the class, but directly from the class itself. These static methods can be useful for a variety of things, but I find them especially helpful for creating simple factory functions. These functions, attached to the class, make it easier to create a configured instance of the given class.

In this simple example, we'll use a static method named `fromJson` to take a chunk of JSON text and convert it into a configured Person instance. It will do so by parsing the JSON into a raw object, then creating a new Person instance while passing in the `name` value from the parsed object. Finally, it returns the newly created Person instance.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  static fromJson(jsonTxt) {
    const rawObj = JSON.parse(jsonTxt),
          person = new Person(rawObj.name);

    return person;
  }
}

const jim = Person.fromJson('{"name":"Jim"}');
console.log(jim.name);    // "Jim"
```
