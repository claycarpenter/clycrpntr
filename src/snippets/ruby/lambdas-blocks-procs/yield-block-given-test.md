---
title: Yield block_given Test
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

Working with the `yield` keyword to execute blocks causes the supplied block to become implicit, and therefore difficult to test for existence. In cases where the block is optional, this can cause problems. Calling `yield` when there is no block present raises a LocalJumpError. In this example, the first call to `no_check` works fine, as a block is supplied. The second call must be wrapped in a rescue because no block is supplied:

```
def no_check
  result = yield

  "I was given \"#{result}\""
end

puts no_check { 'I work fine' }

begin
  puts no_check
rescue LocalJumpError => error
  puts "Error: #{error}"
end
```

Running that scripts produces this output:

```
I was given "I work fine"
Error: no block given (yield)
```

Ruby provides a special method `block_given?` to test whether a block has been supplied. Rewriting the `no_check` method to use `block_given?`, we no longer have to worry about raised errors when blocks aren't supplied:

```
def checked
  result = yield if block_given?

  "I was given \"#{result}\""
end

puts checked { 'I work fine' }
puts checked
```

Results in this output:

```
I was given "I work fine"
I was given ""
```
