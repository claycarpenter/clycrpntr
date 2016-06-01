---
title: ES6 Destructuring Multiple Return Values
tags: javascript, es6
template: /base.jade
category: snippet
---

Destructuring can be used to provide a simple and concise method of returning multiple values. This can be used in situations when developing a custom result object might be too heavy. Instead, object literals can be constructed to contain the result values, and destructuring can be used by the client code to cleanly access the portions of the result that it's interested in. This solution works really well when there's a result that could be represented in different ways (say, distance in miles or kilometers) or when the result has multiple components (such as a find operation that returns the first matching element and its index).

In this example, we'll keep it simple by building a function that returns the freezing point in both celsius and farenheit:

```javascript
function getFreezingPoint() {
  return {
    celsius: 0,
    farenheit: 32
  };
}

let {celsius, farenheit} = getFreezingPoint();
console.log(`Celsius: ${celsius} -- Farenheit: ${farenheit}`);
```

Destructuring (using property names) allows the client to be selective about which property is picked from the result object. So if the client wanted only the celsius or farenheit value, that would work as well:

```javascript
let {celsius} = getFreezingPoint();
console.log(`Celsius: ${celsius}`);

let {farentheit} = getFreezingPoint();
console.log(`Farenheit: ${farenheit}`);
```
