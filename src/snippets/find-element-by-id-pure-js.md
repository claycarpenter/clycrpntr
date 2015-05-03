---
title: Finding an Element by ID in Pure JS
tags: javascript
template: /base.jade
---


## Finding an element using getElementById


```
var element = document.getElementById('warning');
```

Because search is run from the document, the `getElementById` method can also locate elements located in the document `head`. Given this HTML:

```
<html>
    <head>
        <title id="title">Page Title</title>
    </head>
</html>
```

The title element can be retrieved like so: 

```
var titleElement = document.getElementById('title');
console.log(titleElement.innerText); //> "Page Title"
```

## Finding an element using querySelector

Elements can also be retrieved by ID by using `querySelector`. Available on all element nodes, the `querySelector` method finds all elements that match the CSS selector provided as the sole argument. The syntax for a CSS identity selector is `#id`, so the selector that matches an element with an id of "title" would be `#title`.

Given that same basic HTML structure shown above, the title element can be found via `querySelector` like so:

```
var title = document.querySelector('#title');
console.log(titleElement.innerText); //> "Page Title"
```

Note that `querySelector` also has a more powerful brother called `querySelectorAll`. `querySelectorAll` works similarly to `querySelector`, but returns every matching element. However, because `querySelector` returns only the first matching element and element IDs should always be unique on a page, `querySelector` is a more efficient method for retrieving elements by their ID.
