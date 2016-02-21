---
title: Working with Array#every
tags: javascript
template: /base.jade
category: snippet
---

The `every` method available on ES5 and later arrays tests whether every element in the array satisfies some condition. That test is performed by the provided callback function, which is expected to return a truthy or falsy value.

The general syntax is `array.every(callback, thisArg)`. The callback function takes three arguments:

* currentValue - the value of the current array element.
* index - the index of the current value within the array.
* array - the array being iterated over.

If provided, the `thisArg` provides the `this` value for the callback function.

Note that unlike many other array methods, `every` will only continue until it finds its first falsy value. Also note that `every` will always return true for empty arrays.

In this example, we'll use `every` to determine if everyone in our group of people is old enough to vote:

```
var people = [
  {
    name: 'Quinn',
    age: 33
  },
  {
    name: 'Emma',
    age: 21
  },
  {
    name: 'Laura',
    age: 16
  },
  {
    name: 'Alexander',
    age: 26
  }
];

function canVote(person) {
  console.log('Evaluating: ' + person.name);
  return person.age >= 18;
}

console.log('Everyone can vote: ' + people.every(canVote));
```

The output looks like this:

```
Evaluating: Quinn
Evaluating: Emma
Evaluating: Laura
Everyone can vote: false
```

Note that Alexander is never evaluated; `every` stops as soon as it finds out Laura is too young to vote.d

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
