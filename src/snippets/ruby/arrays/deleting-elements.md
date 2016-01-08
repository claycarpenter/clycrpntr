---
title: Deleting Array Elements
tags: ruby
template: /base.jade
category: snippet
---

Three ways to delete elements from arrays in Ruby.

### delete

`delete` removes all instances of the argument from the array. Matches are based on simple identity testing (i.e., `==`).

This example removes all instances of "c" from a collection of letters:

```
# delete
puts '#delete'
letters = ['a','b','c','d','e']
letters.delete 'c'
puts "No 'c': #{letters}"

# => No 'c': ["a", "b", "d", "b", "a"]
```

### delete_at

`delete_at` removes the element at the specific index.

This example removes the first instance of 'c' from a collection of letters:

```
# delete_at
puts '#delete_at'
letters = ['a','b','c','d','c','b','a']
letters.delete_at 2
puts "No 'c': #{letters}"

# => No 'c': ["a", "b", "d", "c", "b", "a"]
```

### delete_if

`delete_if` removes all elements from an array that _pass_ a test executed by the provided block. Elements pass the test when the block returns `true`.

This example removes all even numbers from a collection of numbers:

```
# delete_if
puts '#delete_if'
numbers = [1,2,3,4,5]
numbers.delete_if {|x| x % 2 == 0}
puts "No even numbers: #{numbers}"

# => No even numbers: [1, 3, 5]
```
