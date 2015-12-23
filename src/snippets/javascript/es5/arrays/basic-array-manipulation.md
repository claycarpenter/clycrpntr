---
title: Basic Array Manipulation
tags: javascript
template: /base.jade
category: snippet
---

### Working from the front of the array

`shift` removes and returns the first item of the array:

```
var letters = ['a','b','c'];
var first = letters.shift();  // 'a'
```

`unshift` adds an item to the front of an array:

```
var letters = ['a','b','c'];
letters.unshift('d')  // ['d','a','b','c'];
```

### Working from the end of the array

`pop` removes and returns the last item of the array:

```
var letters = ['a','b','c'];
var last = letters.pop();  // 'c'
```

`push` adds an item to the end of an array:

```
var letters = ['a','b','c'];
letters.push('d')  // ['a','b','c','d'];
```

You can also add an item to the end of an array by setting the value of the array element at the index equal to the array's length:

```
var letters = ['a','b','c'];
letters[letters.length] = 'd'  // ['a','b','c','d'];
```

Thanks to [Kevin Chisholm](http://blog.kevinchisholm.com/javascript/two-ways-to-dynamically-append-an-element-to-a-javascript-array/) for reminding about that last method.

### Working from anywhere in the array

The `splice` method can alter the contents of an array at any point.

With two arguments (start and deletion count), `splice` can remove and return array items:

```
var letters = ['a','b','c','d'];
var middle = letters.splice(1, 2);   // ['b','c']
```

`splice` can also insert items into a array. Specify the start index and a deletion count of 0, and then add any items you want to insert as additional items in the array:

```
var letters = ['a','b','c','d'];
letters.splice(2, 0, '1', '2');    // ['a','b','1','2','c','d']
```
