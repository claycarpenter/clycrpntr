---
title: Reducing Arrays with Array#reduce
tags: javascript
template: /base.jade
category: snippet
---

ES5 Arrays have an in-built `reduce` method that consolidates the elements of an array down to a single value. The canonical example is calculating the sum of an array of numbers, but `reduce` also works well for tasks like flattening arrays and finding the highest (or lowest) value in an array.

`reduce` executes a callback function for each element in the array. At a minimum, that callback function needs to accept previous value and current value arguments, though it can also accept the array and the current index as arguments. An initial value can also be provided as the second argument to `reduce`. If an initial value isn't provided, the first value in the array is used as the initial value (and reduction begins with the second element in the array). Typically, the syntax looks like this:

```
var result = array.reduce(callback, initialValue);
```

Here's a very basic example, calculating the sum of an array of numbers:

```
var numbers = [1,2,3,4,5];

function simpleAccumulator(prevValue, currValue) {
  return prevValue + currValue;
}

var sum0 = numbers.reduce(simpleAccumulator, 0);
console.log('sum0:', sum0);
var sum = numbers.reduce(simpleAccumulator);
console.log('sum:', sum);
```

In this case, providing an initial value doesn't make much of a different: both `sum` and `sum0` have identical values (15).

When reducing to a value that's a different type that the elements of the array, it's more important to use an initial value. In this example, we again calculate a sum of numbers. In this case, we're calculating the total of all of the ages of a list of pets.

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

function ageAccumulator(prevValue, currValue) {
  return prevValue + currValue.age;  
}

var petAge0 = pets.reduce(ageAccumulator, 0);
console.log('petAge0:', petAge0);
var petAge = pets.reduce(ageAccumulator);
console.log('petAge:', petAge);
```

Providing an initial value makes a big difference in this case. `petAge0` has the correct value, 20. The value of `petAge` is `[object Object]116`--the concatenation of the string representations of the first element and the later two elements' age properties. This happens because when an initial value isn't provided, the first value the array is used and iteration begins at the second value. The first execution of `ageAccumulator` receives arguments of type object and number, and implicit type coercion causes both values to be converted to a string before being concatenated together.

If the values you're reducing to are the same as the array elements, you don't necessarily have to provide an initial value, even if the array elements are complex types like objects. In this example, we use a simple comparison function to find the youngest pet from our already described `pets` array:

```
function youngest(prevValue, currValue) {
  return prevValue.age <= currValue.age ? prevValue : currValue;
}

var youngestPet = pets.reduce(youngest);
console.log('youngestPet:', youngestPet);
```

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
