---
title: ES6 Map Iteration
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

The new ES6 Map present more options for iteration than their Array or Set counterparts. This is because the map can be iterated over either its entries, or just its keys or values. This snippet covers these alternatives:

* for-of loop
* for-of loop, explicitly using entries
* for-of loop over map keys
* for-of loop over map values
* forEach with key, value pairs

##### Simple for-of loop

The default behavior of a map inside of a for-of loop is to iterate over the entries in the map. We can capture the key and value of each entry using destructuring:

```javascript
// Prints out every entry in map
for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}
```

##### for-of loop with explicit entries call

By default, the for-of loop iterates over map entries. This implicit choice can be made explicit by calling the `map.entries()` method:

```javascript
// Iterating specifically by entries. Identical in behavior to regular
// for-of loop construction.
for (let [key, value] of map.entries()) {
  console.log(`${key} = ${value}`);
}
```

##### for-of loop over map keys

We can iterate over only the map's keys using the iterator returned by `map.keys()`:

```javascript
// Iterating over keys only.
for (let key of map.keys()) {
  // Manually look up value
  console.log(`${key} - ${map.get(key)}`);
}
```

We can also print an array of all keys:

```javascript
// Just print array of all keys
let keys = [...map.keys()];
console.log(keys);
```

##### for-of loop over map values

We can iterate over only the map's values using the iterator returned by `map.values()`. Note that unlike `#keys`, the values iterator could contain duplicates, as a Map can contain duplicate values (while keys must be unique). In this example, we'll iterate over each value in the map and locate each key that has that same exact value. Note that this implementation makes no attempt to remove duplicate values, so the same keys will be shown twice for the two `true` values.

```javascript
let configMap = new Map();
configMap.set('html5Mode', true);
configMap.set('debugLogging', false);
configMap.set('lazyLoading', true);

for (let value of configMap.values()) {
  // Print all keys with value
  let matchingKeys = Array.from(configMap.keys()).filter(key => configMap.get(key) === value);

  console.log(`Keys with value ${value}: ${matchingKeys.join(', ')}`);
}
```

We can also print out an array of all values:

```javascript
// Just print array of all values
let values = [...map.values()];
console.log(values);
```

##### forEach iteration

Finally, we can iterate over the entries of a map using `map.forEach`. Like an array's `forEach` signature is `fn(element, index)`, the signature of a map's `forEach` function also begins with the value followed by the key: `fn(value, key)`.

```javascript
// Iterating with forEach
// consistent method signature with Array#forEach(element, index)
configMap.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});
```
