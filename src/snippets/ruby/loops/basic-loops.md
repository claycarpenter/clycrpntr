---
title: Basic Loops
tags: ruby
template: /base.jade
category: snippet
---

A couple of ways to produce basic loops in Ruby.

### loop

First, the `loop` statement, which takes a block and executes it until the loop is interrupted--ideally by a `break` statement. By default, `loop` contains no control mechanism and therefore creates an infinite loop. Adding in some break functionality is therefore necessary for a useful implementation. Here's a basic example, with a loop counting from 1 to 5:

```
puts 'Basic loop, using loop'
counter = 1   # Include counter to prevent loop from running forever
loop do
  puts "loop #{counter}"
  counter += 1

  break if counter > 5
end
```

### times

Fixnum provides a `times` method that allows for iterating a number of times equal to the value of the Fixnum object.

Here is a basic example, executing a loop five times:

```
puts '#times loop'
counter = 5
counter.times do
  puts "loop #{counter}"
end
```

Note that the output prints "5" five times, as counter doesn't change in value as the iterations proceed.

`times` can also provide the current iteration counter to the looped block, allowing that block to track where it is in the looping context:

```
puts '#times loop with iteration tracking'
counter = 5
counter.times do |i|
  puts "loop #{i}"
end
```
