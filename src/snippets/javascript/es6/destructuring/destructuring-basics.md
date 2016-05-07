---
title: ES6 Destructuring
tags: javascript, es6
template: /base.jade
category: snippet
---

ES6 adds a convenient new mechanism for retrieving values out of data structures with the introduction of destructuring support.

#### Basics

Destructuring provides a shorthand for retrieving specific values from data structures. For ES6, the possible data structures are array and object.

The advantage is demonstrated with a simple example where the two values of an array are assigned to local variables:

```javascript
// Simple array assignment
let [x, y] = ['1', '2'];
console.log(x, y);
```

Compare that to the equivalent longhand form:

```javascript
// Longhand form
let sourceArr = ['1', '2'],
    xL = sourceArr[0],
    yL = sourceArr[1];
console.log(xL, yL);
```

This also works for object property references:

```javascript
// Simple object prop assignment
let {a, b} = {a: 'one', b: 'two'};
console.log(a, b);
```

#### Deep references

This also works for references of arbitrary depth. In this example, a nested array is accessed by using nested destructuring:

```javascript
let [[x]] = [['foo'], 1];
console.log(x);   // "foo"
```

This is especially useful for object references:

```javascript
let {firstName, lastName, employment: {status}} = {
  firstName: 'Pam',
  lastName: 'Beasly',
  employment: {
    status: 'is secretarial'
  }
}

console.log(firstName, lastName, status);   // "Pam Beasly is secretarial"
```

Note that the local variable name of the destructuring result is identical to the final key name in a nested destructuring statement. So `employment: {status}` is stored in `status`, not `employment`.

#### Fail-soft behavior

If a value for a particular destructuring target can't be found, it's assigned a default `undefined` behavior. This is helpful for skipping values you don't want:

```javascript
let [, notIgnored] = ['ignored', 'not ignored'];
console.log(notIgnored);
```

And also provides a fail-safe in case you try to access a value that's not defined, which is useful when looking deep into objects:

```javascript
let {employment: {employed, salary}} = {employment: {employed: true}}
console.log(employed, salary);    // true undefined
```

#### Destructuring in a for-of loop

Destructuring can also be used in a for-of loop to access multiple values of the current item. That's particularly useful when iterating over map entries, which are represented as individual two-value arrays like `[key, value]`:

```javascript
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

for (let [key, value] of map.entries()) {
  console.log(`${key}: ${value}`);
}
```
