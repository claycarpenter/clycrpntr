---
title: Converting DOM Element Lists to Arrays in ES6
tags: javascript, dom, html, es6
template: /base.jade
category: snippet
---

Standard DOM query functions, such as `Document.querySelectorAll` and `Document.getElementsByTagName` return results lists that look and act similar to Arrays, but aren't full Array objects. ES6 introduces the `Array.from` method that converts array-list objects (those that have `length` properties and indexed elements) into true Arrays. For instance:

```
var querySelectorResults = Array.from(
  document.querySelectorAll('p')
);
```

Once the node or element list is converted into a true Array, we have access to array elements like `forEach` and `map`, as seen in this example:

```
var querySelectorResults = Array.from(
  document.querySelectorAll('p')
);

querySelectorResults.forEach(function(element) {
  element.classList.add('query-selector-result');
});

var elementByTagNameResults = Array.from(
  document.getElementsByTagName('p')
);

var paragraphTagTexts = elementByTagNameResults.map(function(element) {
  return element.innerText;
});

console.log(paragraphTagTexts);
```

Here's a basic HTML page to test that script out:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Paragraphs</title>
</head>
<body>
  <p>A</p>
  <p>B</p>
  <p>C</p>
  <p>D</p>
  <p>E</p>
</body>
</html>
```
