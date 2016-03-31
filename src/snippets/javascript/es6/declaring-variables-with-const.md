---
title: Declaring Constant Variables with const in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Introduced in ES6, `const` allows for the definition of "constant" variables. These variables must be given a value when they are declared, and they can't be subsequently reassigned.

```javascript
try {
    const name = 'Robin';

    console.log(name);  // "Robin"

    name = 'Bob';   // raises TypeError
  } catch (error) { console.error(error); }
```

While the variable may not be reassigned, its internal contents aren't frozen and can still be modified. For instance:

```javascript
const employeeOfTheYear = {
  name: 'Micheal Scott'
};

employeeOfTheYear.name = 'Jim Halpert';
console.log(employeeOfTheYear); // "{name: 'Jim Halper'}"
```

Unlike `var`, variables declared with `const` aren't hoisted, so they can't be referenced before they're "defined" in the code:

```javascript
try {
  console.log(foo);   // undefined
  console.log(bar);   // raises ReferenceError
} catch (error) { console.error(error); }

var foo = 'foo';
const bar = 'bar';
```
