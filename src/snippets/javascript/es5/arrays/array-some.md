---
title: Working with Array#some
tags: javascript
template: /base.jade
category: snippet
---

The `some` method available on ES5 and later arrays tests whether _any_ element in the array satisfies some condition. That test is performed by the provided callback function, which is expected to return a truthy or falsy value.

The general syntax is `array.some(callback, thisArg)`. The callback function takes three arguments:

* currentValue - the value of the current array element.
* index - the index of the current value within the array.
* array - the array being iterated over.

If provided, the `thisArg` provides the `this` value for the callback function.

Note that unlike many other array methods, `some` will only continue until it finds its first truthy value.

In this example, we'll use `some` to determine if anyone in our office is hungry:

```
var people = [
  {
    name: 'Kirk',
    isHungry: false
  },
  {
    name: 'Clay',
    isHungry: true
  },
  {
    name: 'Joey',
    isHungry: true
  }
];

function isHungry(person) {
  console.log('Evaluating: ' + person.name);
  return person.isHungry;
}

console.log('Is anyone ready for lunch? ' + people.some(isHungry));
```

The output looks like this:

```
Evaluating: Kirk
Evaluating: Clay
Is anyone ready for lunch? true
```

Note that Joey is never evaluated because `some` stops as soon as it finds out that Clay is hungry.

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
