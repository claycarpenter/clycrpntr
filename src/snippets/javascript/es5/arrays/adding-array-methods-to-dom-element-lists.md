---
title: Adding Array Methods to DOM Element Lists
tags: javascript, dom, html
template: /base.jade
category: snippet
---

Standard DOM query functions, such as `Document.querySelectorAll` and `Document.getElementsByTagName` return results lists that look and act similar to Arrays, but aren't full Array objects. To get access to Array convenience methods such as `forEach` and `map`, use a combination of a blank array (`[]`) and the `call` method:

```
[].forEach.call(elementList, callback);
```

We can use this style to access `forEach` and `map` to on `querySelectorAll` and `getElementsByTagName` results in this example:

```
var querySelectorResults = document.querySelectorAll('p');

[].forEach.call(querySelectorResults, function(element) {
  element.classList.add('query-selector-result');
});


var elementByTagNameResults = document.getElementsByTagName ('p');

var paragraphTagTexts =[].map.call(elementByTagNameResults, function(element) {
  return element.innerText;
});

console.log(paragraphTagTexts);  //=> ["A", "B", "C", "D", "E"]
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
