---
title: Working with Array#reduce
tags: javascript
template: /base.jade
category: snippet
---

The `map` method available on ES5 and later arrays creates a new array out of the results of a function called on every element in the array. The general syntax is `array.map(callback, thisArg)`. The callback function takes three arguments:

* currentValue - the value of the current array element.
* index - the index of the current value within the array.
* array - the array being iterated over.

If provided, the `thisArg` provides the `this` value for the callback function.

The `map` function creates a new array to store the results, it doesn't modify the target array in-place. While the `map` function doesn't itself modify the array it's called on, the callback function may.

One common use of `map` is to "pluck" a value from each element in the array. Underscore, a popular utility library, has [just such a function](http://underscorejs.org/#pluck).

In this example, we'll use a pluck-like technique to create a new array containing all of the ages of the pets in our array:

```
var pets = [
  {
    name: 'Fluffy',
    age: 3
  },
  {
    name: 'Spot',
    age: 11
  },
  {
    name: 'Mr Tails',
    age: 6
  }
];

function ageGetter(pet) {
  return pet.age;
}

console.log(pets.map(ageGetter));
// [3, 11, 6]
```

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
