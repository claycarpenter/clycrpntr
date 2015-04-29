---
title: Finding an Element by ID in Pure JS
draft: true
tags: javascript
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

```
```
