---
title: ES6 Map Basics
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces the new Map object. It operates like a typical associative array, mapping an arbitrary number of keys to an equal number of values. Frequently in ES5 development Objects would be used as makeshift maps. The introduction of formal Map objects provides a number of advantages over makeshift Object maps, including easily determining the map size and better defined iteration. MDN has a [short rubric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared) that helpfully describes when to use Objects or Maps; check it out for more info.

#### Map basics

Maps are created with a new operator and the Map constructor name, like so:


```javascript
let map = new Map();
```

While there is no literal form for Map definitions in ES6, maps can be created using an array of two-value sub-arrays, where each sub-array contains the key and the value of a map entry:

```javascript
let arrayMap = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);
console.log([...arrayMap.keys()]);   // ["one", "two", "three"]
console.log([...arrayMap.values()]);   // [1, 2, 3]
```

Map entries can be created with `#set(key, value)` and retrieved with `#get(key)`. If the given key isn't found, `undefined` will be returned:

```javascript
map.set('name', 'Jacob');
console.log(map.get('name'));  // "Jacob"
map.set(42, 'answer');
console.log(map.get(42));   // "answer"
```

#### Map sizing

One of the advantages Map has over makeshift Object maps is the easy ability to determine the Map's size with the `size` property:

```javascript
let map = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);
console.log(map.size);   // 3
```

#### Testing key presence

Map contains a `#has(key)` test method that will return a boolean indicating whether the map contains the specified key:

```javascript
console.log(map.has(42));   // true
console.log(map.has('not here'));   // false
console.log(map.get('not here'));   // undefined
```

#### Cleaning up maps

Maps contain two methods for cleaning out contents: the targeted `delete` and the all-encompassing `clear`. `delete` removes just a single value from the map:

```javascript
let deleteMap = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);
console.log([...deleteMap.keys()]);   // ["one", "two", "three"]
deleteMap.delete('two');
console.log([...deleteMap.keys()]);   // ["one", "three"]
```

`clear` removes every value from the map:

```javascript
let clearMap = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);
console.log([...clearMap.keys()]);   // ["one", "two", "three"]
clearMap.clear();
console.log([...clearMap.keys()]);   // []  
```

#### Key equality testing

Maps [(mostly) check keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality) using the strict equality operator (`===`), so even those two keys might have equal values, if they're not the same object then the two keys won't match. See how this affects the behavior of a key that's simply an empty object:

```javascript
let empty = {};
map.set(empty, 'empty');
console.log(map.get(empty));  // "empty"
console.log(map.get({}));     // undefined
```
