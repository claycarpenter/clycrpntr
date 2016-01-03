---
title: Array Indexes
tags: ruby
template: /base.jade
category: snippet
---

Accessing array elements by index.

### Positive indexes

The most basic way to access array elements, targeting an element by its position in the array. The array indexes start at 0.

```
# positive index
puts 'positive indexes'
letters = ['a','b','c','d','e']
puts "@[4]: #{letters[4]}"

# => @[4]: e
```

### Negative indexes

Negative indexes count backwards from the end of the array. The last element in the array will have an index of -1.

```
# negative index
puts 'negative indexes'
letters = ['a','b','c','d','e']
puts "@[-1]: #{letters[-1]}"

# => @[-1]: e
```
