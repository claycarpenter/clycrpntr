---
title: Iterating and Empty Lists in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade provides excellent support for iterating over lists with the `each` statement. There isn't, however, built-in support for an empty list case. There are a couple of options to handle an empty list: make the `each` statement iterate over the value returned from a ternary `if`, or wrap the `each` loop in an `if`.

First, the ternary `if` method. The generic syntax for the Jade `each` command is `each value in listExpression`, where `listExpression` is any expression that evaluates to either an array or object. We can take advantage of that expression evaluation to use a ternary `if` to provide a default value in the case that the list is empty, and use the list otherwise.

Here, we provide a default "no results matched" message if the results array is empty:

```
- var results = [];
ul
  each result in results.length ? results : ['No results matched your search']
    li= result
```

If the results array contained values, as it does in the following snippet, then the `results` array's contents would be presented instead of the default value:

```
- var results = ['Floorinator', 'Sweeter Sweeper'];
ul
  each result in results.length ? results : ['No results matched your search']
    li= result
```

That method works well if you want the default/fallback value to be displayed in the same manner as the regular values (as an `li` item, in the above examples). If you would rather have an entirely different presentation in the case of an empty state, then wrapping the entire `each` loop in an `if` allows you to provide an alternative when the list is empty. Here's an example that presents the empty state as a message inside of a `p` tag, instead of using the same `li` used in the results display:

```
- var results = ['Alpha', 'Beta'];
if results.length
  ul
    each result in results
      li= result
else
  p No results matched your search!
```
