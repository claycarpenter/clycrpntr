---
title: ES6 Iterator Basics
tags: javascript, es6
template: /base.jade
category: snippet
---

ES6 introduces iterators. It's a concept that will be familiar to programmers who come from backgrounds in C# and Java (and I'm sure other languages). The concept is basic: an iterator lets you iterate over a collection of values, getting each value in turn. You can also test whether you've iterated over the full collection.

Iterators expose a pretty concise API. With a tip of the hat to Luke Hoban's [example](https://github.com/lukehoban/es6features#iterators--forof), here's what the iterators would look like decorated with the type definitions provided by TypeScript:

```javascript
interface IteratorResult {
  done: boolean;
  value: any;
}
interface Iterator {
  next(): IteratorResult;
}
```

The IteratorResult returned by each call to `next()` will provide the next value in the collection and a boolean value in `done` that indicates whether there are any more values. If you call `next()` again when the collection is "done", the `done` flag will again be `true` but the `value` will be `undefined`.

You can see this at work in this example:

```javascript
let mySet = new Set(['a', 'b']),
    valuesIterator = mySet.values(),
    iteration;

iteration = valuesIterator.next();  // Get 'a' value
console.log(JSON.stringify(iteration)); // {"value":"a","done":false}

valuesIterator.next(); // Skip 'b'

iteration = valuesIterator.next(); // End of iterator set
console.log(JSON.stringify(iteration)); // {"done":true}
```

Iterators are implemented by the built-in classes Array, Map, and Set, and that's the most common way to access them. Each of those implements iterator-generating methods under the names `keys`, `values`, and `entries`. We can use a Set's `values()` iterator to print out each value within the set:

```javascript
let mySet = new Set(['a', 'b']),
    valuesIterator = mySet.values();

for (let next = valuesIterator.next(); !next.done; next = valuesIterator.next()) {
  console.log(JSON.stringify(next));
}
```

Note that the `for` loop captures the iterator result return by `next()`, and _doesn't_ call `next()` multiple times for a single for loop iteration. This ensures that each for loop pass corresponds with exactly one value from the iterator. The for loop is done when the iterator returns a `true` value for `done`.

The for loop that we've constructed is basically a longhand version of a for-of loop. For most production uses, a for-of loop would be a better choice. 
