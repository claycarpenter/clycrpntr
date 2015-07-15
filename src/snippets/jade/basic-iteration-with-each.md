---
title: Basic Iteration with Each in Jade
tags: jade
template: /base.jade
category: snippet
---

Iterating over arrays and maps is easy in Jade using `each` statements. `each` looks like a typical Jade tag construction (there are no special characters preceding teh declaration), but it is followed by a configuration of the loop similar to a general for-each construct. Here, Jade builds an ordered list out of an inline array:

```
ol
  each item in ['one', 'two', 'three']
    li= item
```

This is the resulting HTML:

```
<ol>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ol>
```

The `for` keyword can be substituted for `each` if it's easier to remember. This Jade snippet produces the same output as the preceding example:

```
ol
  for item in ['one', 'two', 'three']
    li= item
```

Jade also provides access to the index of the current item:

```
ol
  each item, index in ['one', 'two', 'three']
    li= index + ":" + item
```

Results in:

```
<ol>
  <li>0:one</li>
  <li>1:two</li>
  <li>2:three</li>
</ol>
```

Using that same syntax, Jade can iterate of the keys and values of an object, treating it as a map:

```
ol
  each value, key in {'one': 1, 'two': 2}
    li #{key} -- #{value}
```

Which produces:

```
<ol>
  <li>1:one</li>
  <li>2:two</li>
  <li>3:three</li>
</ol>
```

Those two previous examples can be summarized under a common generic syntax that looks something like this:

```
each value, key in collection
```

Finally, one more example using an array of basic objects that represent products in a short product listing. A simple list is produced, with product names and links that point to the product pages (identified with the product id number).

```
-
  var products = [
    { id: 132, name: "Magic Sweeper"},
    { id: 201, name: "Dust-o-matic"},
    { id: 42, name: "The Floorinator"}
  ]
ul
  each product in products
    li
      a(href="/products/" + product.id)= product.name
```

The resulting HTML:

```
<ul>
  <li><a href="/products/132">Magic Sweeper</a></li>
  <li><a href="/products/201">Dust-o-matic</a></li>
  <li><a href="/products/42">The Floorinator</a></li>
</ul>
```
