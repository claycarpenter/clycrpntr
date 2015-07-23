---
title: For Loops in Unbuffered Code in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade's support for unbuffered code--code that doesn't directly contribute output--can be used to construct `for` loops. Before I get into this explanation, I want to note that for general case iteration, the Jade `each` statement is probably your best choice.

Unbuffered code is just JavaScript, so a `for` loop in Jade should look familiar:

```
ul
  - for (var i = 0; i < 3; i++)
    li= i
```

`for` loops don't require curly brackets, much like regular JavaScript. However, Jade is smart enough to include any statements that are indented below the `for` loop line within the `for` loop block. For instance, this Jade snippet will produce two list items for each pass through the loop:

```
ul
  - for (var x = 0; x < 3; x++)
    li= x
    li= x
```

Results in:

```
<ul>
  <li>0</li>
  <li>0</li>
  <li>1</li>
  <li>1</li>
  <li>2</li>
  <li>2</li>
</ul>
```

While a similar piece of JavaScript that also doesn't explicitly declare the `for` loop block will not produce two `console.log` writes for each loop pass:

```
for (var i = 0; i < 3; i++)
	console.log(i);
	console.log(i);
```

Produces:

```
0
1
2
3
```

To avoid any confusion, it is possible to add curly brackets around the `for` loop block. Updating the previous Jade snippet with curly brackets looks like this:

```
ul
  - for (var x = 0; x < 3; x++) {
    li= x
    li= x
  - }
```

Note that the closing curly bracket is also preceded by a `-` and has the same indention level as the `for` loop.
