---
title: Implicit and Explicit Conversion of Block Arguments
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

### Implicit and Explicit Blocks

Blocks can be passed to Ruby methods in both implicit and explicit styles. When a block is passed implicitly, it isn't included in the arguments list. Conversely, a block passed explicitly is included in the arguments list.

This distinction holds both for method calls and method signatures. Here, both the method signature and method call use implicit blocks:

```
# Implicit blocks
def calculate(a, b)
  yield a, b
end

calculate(1, 2) {|a,b| a + b}
```

In both of those examples, the block sits outside of the method arguments. In the method, it's not even clear that a block could be passed in, until you see the `yield` statement.

Contrast those examples to the same method and method call, this time written in an explicit block style:

```
# Explicit blocks
def calculate(a, b, &block)
  block.call(a, b)
end

sum = lambda {|a,b| a + b}
calculate(a, b, &sum)
```

In the case of explicit style blocks, the blocks are passed as the final parameter within the method call. The ampersand (`&`) preceding the final argument of the calculate method tell Ruby to collect any block as the final argument. The same ampersand before the `sum` lambda argument instructs Ruby to convert the the lambda to a block (so that it can be passed to a method expecting a block).

### Calling Explicit Methods with Implicit Blocks

Calling the method `calculate_explicit`, which includes an explicit block in its arguments list, with an implicit block. 

```
# Implicit call, explicit argument
def calculate_explicit(a, b, &calculation)
  calculation.call(a, b)
end

puts calculate_explicit(1, 1) {|a,b| a + b}
```

### Calling Implicit Methods with Explicit Blocks

Calling the method `calculate_implicit` with an explicit block. The explicit block is created by converting the `sum` lambda to a block and passing it as the final argument in the `calculate_implicit` call.

```
# Explicit call, implicit argument
def calculate_implicit(a, b)
  yield a, b
end

sum = lambda {|a,b| a + b}
puts calculate_implicit(2, 2, &sum)
```

