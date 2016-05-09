---
title: Mapping a Map
tags: javascript, es6
template: /base.jade
category: snippet
---

ES6 Maps don't come with a built-in map function like arrays do. However, with a small amount of work, map functionality can easily be applied to Maps. To avoid confusion in this article, we'll refer to the Map object with a uppercase "Map", and the map function in all lowercase.

The general technique for mapping a Map is:

1. Enumerate the entries in the source Map, converting them into an array
2. Perform a map operation on the entries array, changing the entries as needed. The easiest way to accomplish this is by using the spread operator to convert the `entries()` iterable to an array: `entriesArray = [...sourceMap.entries()]`
3. Rebuild a new Map from the result of the array.map operation

In this example, we transform a map by converting each of the map's values (all of which are strings) to uppercase:

```javascript
const sourceMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

// Convert source Map to entries array
const entries = [...sourceMap.entries()];

// Transform each entry
const transformedEntries = entries.map(([key, value]) => [key, value.toUpperCase()]);

// Build a new Map from the transformed entries
const transformedMap = new Map(transformedEntries);

console.log(transformedMap);
// Map {1 => "ONE", 2 => "TWO", 3 => "THREE"}
```

This could also be done in one statement:

```javascript
const sourceMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

// Build a new Map from the transformed entries
const transformedMap = new Map(
  [...sourceMap.entries()].map(([key, value]) => [key, value.toUpperCase()])
);

console.log(transformedMap);
// Map {1 => "ONE", 2 => "TWO", 3 => "THREE"}
```

Thanks to Axel Rauschmayer for pointing this out in his book [Exploring ES6](http://exploringjs.com/es6/ch_parameter-handling.html#_transforming-maps).
