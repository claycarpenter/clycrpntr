---
title: ES6 Object Literal Enhancements
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces new features for object literals that makes composing such objects just a little bit easier:

* Property value shorthands
* Function declaration shorthands
* Dynamic property names
* Setting the object literal's prototype

#### Property value shorthands

When a property on an object literal has both the name and the value of an existing variable, the variable can be listed once (`{x}`) rather than twice (`{x:x}`). That sounds unnecessarily complicated, but this example showing object literals in both longhand and shorthand forms should make it more clear:

```javascript
const x = 'test',
  y = 42;

const myObjLonghand = {
  x: x,
  y: y,
};
const myObjShorthand = {
  x,
  y,
};

console.log(myObjShorthand);    // Object {x: "test", y: 42}
console.log(myObjLonghand);     // Object {x: "test", y: 42}
```

Note that this only works for variable identifiers. Trying to use this with primitives will cause syntax errors. Object literals like this won't work:

```javascript
// WARN: This doesn't work!
const primitiveLiteralShorthand = {
  21,
  'fails'
};
```

#### Function declaration shorthands

Like the getter/setter shorthand introduced in ES5 (`get value() {}, set value(value) {}`), functions can now be declared on object literals without needing to specify the `function` keyword. The ES5 declaration `funcName: function(args) {}` becomes simply `funcName(args) {}`.

```javascript
const funcLonghand = {
  log: function(message) {
    console.log(message);
  }
};
const funcShorthand = {
  log(message) {
    console.log(message);
  }
};

funcShorthand.log('funcShorthand says hi...');
```

#### Dynamic property names

Dynamic property names were possible in ES5, but not during the creation of object literals. To create a dynamic property in ES5, you needed to first create the object, and then create the new property using bracket notation assignment (`obj[dynPropName] = propValue`). In ES6, this can all be done within the object literal definition:

```javascript
const x = 'a',
  y = 10,
  propValue = 'foo-bar';

const es5DynPropertyName = {};
es5DynPropertyName[x + y] = propValue;

const dynamicPropertyName = {
  [x + y]: propValue
};

console.log(es5DynPropertyName);
console.log(dynamicPropertyName);
```

#### Setting the object literal's prototype

ES6 makes it easy to set the prototype for a new object literal instance using the `__proto__` property:

```javascript
const personPrototype = {
  getName() {
    return this.name;
  }
};

const person = {
  __proto__: personPrototype,
  name: 'Jim Halpert',
};

console.log(person.getName());    // "Jim Halpert"
```
