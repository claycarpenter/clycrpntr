---
title: Basic Iteration with Each in Jade
tags: jade
template: /base.jade
category: snippet
---

In addition to the `each` operator, Jade also supports `while` loops with Jade shorthand syntax. Like the `each` operator, `while` loops allow for a simplified declaration that makes curly brackets and parenthesis optional. Here's a very simple `while` loop:

```
- var i = 0
ul
  while i < 3
    li= i++
```

That statement produces the following output:

```
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ul>
```

Much like vanilla JavaScript `while` loops, you need to take care when writing Jade `while` loops that you don't create an infinite loop. Jade will make things easier for you, but it won't protect you from every pitfall.

While loops work best when the decision on iteration details (such as which item is the "current" item and if there are more items) is encapsulated away from the loop. Here's a very basic counter object, declared in a Jade unbuffered code block:

```
-
  function Counter () {
    var count = 3;
    this.hasNext = function () {
      return count > 0;
    };

    this.getNext = function () {
      return count--;
    };
  }
```

And now a `while` loop that will defer to the logic (maybe "logic" deserves quotes here?) within Counter to determine whether the loop should continue, and what the current item is:

```
ul
  while counter.hasNext()
    li= counter.getNext()
```
