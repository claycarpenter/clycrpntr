---
title: Working with Array#sort
tags: javascript
template: /base.jade
category: snippet
---

JS arrays can be sorted with the help of the `sort` function. This method sorts the array _in-place_, based on either the Unicode string value of the elements or a provided comparator function.

Without a comparator function provided, `sort` computes the string value of each element and begins to compare strings based on their Unicode values. Elements are sorted in order of increasing Unicode value. This can lead to some surprising sort results, as shown here:

```
['apples', 'Oranges'].sort()
["Oranges", "apples"]

['8', '70'].sort()
// ["70", "8"]
```

For more control over the resulting sort order, a comparator function can be provided. The comparator function should have a signature of `function(a, b)` and return a number value. The number value determines the relative sort order of elements `a` and `b`:

* Value less than 0 - Sort `a` to a lower index (before) `b`
* Value of exactly 0 - Don't change the position of `a` and `b`, with respect to each other
* Value more than 0 - Sort `a` to a higher index (after) `b`

In this example, we sort a list of people by the lowercase value of their `name` properties:

```
var people = [
  {
    name: 'Kirk',
    position: 'designer'
  },
  {
    name: 'Clay',
    position: 'developer'
  },
  {
    name: 'Joey',
    position: 'designer'
  }
];

function comparator(personA, personB) {
  return +(personA.name.toLowerCase() > personB.name.toLowerCase()) || +(personA.name.toLowerCase() === personB.name.toLowerCase()) - 1;
}

console.log(people.sort(comparator));
```

The result looks like this:

```
[[object Object] {
  name: "Clay",
  position: "developer"
}, [object Object] {
  name: "Joey",
  position: "designer"
}, [object Object] {
  name: "Kirk",
  position: "designer"
}]
```

More details can be found in Mozilla's [excellent documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
