---
title: Converting DOM Element Lists to Arrays with Array.map
tags: javascript, dom, html, es6
template: /base.jade
category: snippet
---

Array's `map` function creates a new array out of the results of a converter function that operates on each element in the array. Using the `call` method to execute the Array's `map` function in the context of a DOM element list, you can treat that array-like element list as a temporary array and use that temporary status to convert to a real array:

The quite simple syntax looks like this:

```
[].map.call(elementList, function(element) {
  return element;
});
```

Here's a fuller example, where the elements list return by a `document.querySelectorAll` is converted into a array, which is then fed to a `forEach` loop to add a class (`query-selector-result`) to each element:

```
var querySelectorResults = [].map.call(document.querySelectorAll('p'), function(element) {
  return element;
});

querySelectorResults.forEach(function(element) {
  element.classList.add('query-selector-result');
});
```

Here's a basic HTML page to test that script out:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Paragraphs</title
  <style>
    .query-selector-result {
      color: orange;
    }
  </style>
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
