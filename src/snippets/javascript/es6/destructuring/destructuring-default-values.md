---
title: ES6 Destructuring Default Values
tags: javascript, es6
template: /base.jade
category: snippet
---

Similar to function arguments both in concept and syntax, destructuring also supports default values for the variables it is making assignments to.

Here, both array and object destructuring take advantage of default values. Note that in the first example, `y` doesn't pick up a default value, but instead receives the `undefined` value given to destructuring targets without matching property values or defined default values.

```javascript
// Simple array assignment
let [x = 3, y] = [];
console.log(x, y);    // 3 undefined

// Simple object prop assignment
let {a = 'alpha', b = 'beta'} = {};
console.log(a, b);    // 'alpha beta'
```

Like function argument default values, a default value is assigned if the property match can be found but the value is undefined:

```javascript
let [x=1] = [];
console.log(x);   // 1

let {a = 'alpha', b = 'beta'} = {a: undefined};
console.log(a, b);    // 'alpha beta'
```

Default values can also be defined as the results of functions. When this is the case, the function is only call when a default value is needed ("on-demand"). In this example, a simple lookup finds the next model ID when the target model doesn't have a defined ID:

```javascript
function getNextId() {
  return 42;
}

let personModel = {firstName: 'Pam', lastName: 'Beasly'};
let {id: id=getNextId()} = personModel;
console.log(id);
```

Default values can also be used within the destructuring constructs created in for-of loops. This can be especially handy when dealing with maps that might have `undefined` values for some of their keys:

```javascript
const map = new Map([
  ['key1', 'value1'],
  ['key2', ],
  ['key3', ],
]);

for (let [key, value='unknown'] of map.entries()) {
  console.log(`${key}: ${value}`);
}
```

That snippet presents this console output:

```
key1: value1
key2: unknown
key3: unknown
```
