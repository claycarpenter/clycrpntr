---
title: Declaring Basic Object Accessor Properties
tags: javascript
template: /base.jade
category: snippet
---

Accessor properties provide syntactic sugar around getters and setters that reduces the boilerplate code needed to interact with an object's properties. Calls that used to look like this:

```
person.setFirstName('John');
console.log(person.getFirstName());
```

Can instead use this streamlined form:

```
person.firstName = 'John';
console.log(person.firstName);
```

Behind the scenes, JS delegates accessor property reads and writes to the property's `get` and `set` methods, respectively. These methods are set when the accessor property is defined:

```
Object.defineProperty(person, 'firstName', {
  get: function() {
    return this.name;
  },
  set: function(value) {
    this.name = value;
  }
});
```

Like data properties, accessor properties also support the `enumerable` and `configurable` property descriptor flags.
