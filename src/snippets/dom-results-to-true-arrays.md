---
title: Converting DOM Results To True Arrays
tags: dom, javascript
template: /base.jade
category: snippet
---

Stock DOM query methods like `querySelectorAll`, `getElementsByTagName`, and `getElementsByClassName` return array-like [HTMLCollections](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection). HTMLCollections have some of the properties of Arrays, namely a length property and index-based access (e.g., `var first = collection[0]`). They lack all other Array methods, such as `forEach`, `map`, and `every`. Converting the HTMLCollections that are returned by DOM search methods into true Arrays can help you deftly work with those results.

## Using Array.slice

Although the HTMLCollections object doesn't possess a `slice` method, you can use the Array prototype's `slice` method on the HTMLCollection by executing `slice` with the `call` method:

```
var linksCollection = document.getElementsByTagName('a');
var linksArray = Array.prototype.slice.call(linksCollection, 0);
```

That statement will execute the `slice` function using `linksCollection` as the `this` value. The second argument is the location to start the copy; 0 will copy the entire array.
