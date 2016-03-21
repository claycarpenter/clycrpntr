---
title: Chaining Methods with Blocks
tags: ruby
template: /base.jade
category: snippet
---

Because I often forget: it is possible to chain together methods that take implicit block arguments, without having to enclose those block arguments in parenthesis:

```
numbers = 1..10

p numbers.select {|x| x % 2 == 0}.reverse   # => [10, 8, 6, 4, 2]
```

If parenthesis are necessary or desired, you can use a lambda declaration plus a block conversion operator to convert the inline block into an explicit argument. Either of these two alternatives accomplish the same thing as the above statement:

```
p numbers.select(&lambda{|x| x % 2 == 0}).reverse
p numbers.select(&->(x){x % 2 == 0}).reverse
```
