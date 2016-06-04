---
title: Basic Customer Iterators
tags: javascript, es6
template: /base.jade
category: snippet
---

While ES6 provides a number of built-in iterators, it's also possible and quite easy to write your own custom iterators. An object is iterable if:

1. It exposes a zero-arg function under the property key `Symbol.iterator` (which must be dynamically evaluated, so you'll always see it written `[Symbol.iterator]`).
2. The function at `Symbol.iterator` returns an object with a no-arg method `next()`.
3. The `next()` implementation returns an iteration value object. This iteration value object has a boolean flag named `done` to indicate if more values are present, and if the call retrieved a value, then it returns that value under `value`.

In this example, we'll build a simple extension to the String class that changes the default iterable behavior of String. Without modification, a String instance is iterable and iterates over the characters in the string. We can see that behavior here:

```javascript
const string = "Letters";

for (const char of string) {
  console.log(char);
}
// => L, e, t, t, e, r, s
```

By overriding the function String normally contains at `Symbol.iterator`, we can provide our own custom implementation. The full class looks like this:

```javascript
class WordTokenString extends String {
  [Symbol.iterator]() {
    const words = this.toString().match(/(\w+)+/g);

    return {
      next() {
        const value = words.shift();

        return {
          value,
          done: (value === undefined)
        };
      }
    }
  }
}
```

The class has no defining characteristics beyond declaring the iterator override. That iterator function begins by splitting the string contents into an array of words. It then returns a new object, defined by an object literal. The new object has a single property added to it, the `next()` implementation. So any iteration invocations (for-of, spread operator) of our iterable WordTokenString class will create a new iteration object, defined as an anonymous object here.

Within the `next()` implementation, we simply grab the next value from the array. If the array is empty that value will be `undefined`, which conforms to the iteration protocol. If that's the case, we set the `done` flag to `true` (`value === undefine`); otherwise the `done` value will be `false` indicating that more values are available from the iteration.

```javascript
const testWordTokenString = new WordTokenString("All your base are belong to us");
console.log(testWordTokenString.toString());
// => All your base are belong to us

// Iterates over words in a for-of loop
for (const word of testWordTokenString) {
  console.log(word);
}
// => All, your, base, are, belong, to, us

// Creates an array of the string's words using the spread operator
const asArray = [...testWordTokenString];
console.log(asArray);
// => ["All", "your", "base", "are", "belong", "to", "us"]
```
