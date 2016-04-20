---
title: ES6 Set Iteration
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Unlike Arrays and Maps, iteration is rather simple for Sets, as they have no indexes or keys. Like Arrays and Maps, Sets have three methods that return iterators (`keys`, `values`, and `entries`), as well as a default for-of loop construction and a `forEach` method.

#### For-of loop

Printing every value in the set using a for-of loop:

```javascript
// Iteration with for-of
// Prints out every entry in map
for (let value of set) {
  console.log(`${value}`);
}
```

#### Entries

Sets don't have keys, but a decision was made to keep the entries return value of Set consistent with those of Array#entries and Map#entries. For that reason, Set's entries iterator returns the value of the current element twice (e.g., `[value, value]`):

```javascript
// Iterating specifically by entries.
for (let [valueAsKey, valueAsValue] of set.entries()) {
  console.log(valueAsKey === valueAsValue);
}
```

#### Iterating over keys

Sets don't have keys, so the `keys` method just returns an iterator over the set's values:

```javascript
// Iterating over "keys" only.
for (let value of set.keys()) {
  console.log(`${value}`);
}
```

#### Iterating over values

The `values` method will return an iterator that contains the full contents--all values--in the set:

```javascript
// Iterating over values.
for (let value of set.values()) {
  console.log(`${value}`);
}
```

#### Iterating with forEach

Like Array and Map, Set contains a `forEach` method. The argument is the value of the current element:

```javascript
// Iterating with forEach
// consistent method signature with Array#forEach(element)
set.forEach(function(value) {
  console.log(`${value}`);
});
```
