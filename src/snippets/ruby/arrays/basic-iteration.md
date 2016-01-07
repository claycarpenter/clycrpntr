---
title: Basic Loops
tags: ruby
template: /base.jade
category: snippet
---

A couple of ways to iterate over Ruby arrays.

### for

Rarely used, but Ruby does include a `for` construct for iterating over the items in an array:

```
numbers = [1,2,3,4,5]
for i in numbers
  puts i
end
```

### each

`each` is the standard way to iterate over all elements in a Ruby array. It takes a block as an argument (or returns an Enumerator if no block is provided), and passes to that block the current element as the array iterates over its contents.

Here, a basic loop that prints the same numbers from the above `for` example:

```
number = [1,2,3,4,5]
numbers.each do |i|
  puts i
end
```
