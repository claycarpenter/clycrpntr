---
title: Filtering and Transforming Arrays
tags: ruby
template: /base.jade
category: snippet
---

Two common operations for arrays are transformation and filtering. Ruby's Array#map and Array#select provide each functionality, respectively. Both operate by returning a new array, rather than modifying the existing array in place.

### map

`map` supports transforming every element in an array. To do so, `map` iterates over every element, feeding that element to a block that executes the transformation. The current element is the sole argument to the transformation block.

In this example, `map` tests each integer to determine if it's an even number, returning `true` or `false` as appropriate.

```
puts '#map'
numbers = [1,2,3,4,5]
map_results = numbers.map {|x| x % 2 == 0}
puts "Are numbers even: #{map_results}"

# => Are numbers even: [false, true, false, true, false]
```

### select

`select` supports filtering an array. The result of a `select` operation is a new array containing only elements from the source array that produced a `true` result when passed through the filtering block.

This example also looks for even numbers, but unlike `map`, `select` will return only those numbers that are even, rather than the "evenness" of each number in the array:

```
puts '#select'
numbers = [1,2,3,4,5]
select_results = numbers.select {|x| x % 2 == 0}
puts "Only even numbers: #{select_results}"

# => Only even numbers: [2, 4]
```
