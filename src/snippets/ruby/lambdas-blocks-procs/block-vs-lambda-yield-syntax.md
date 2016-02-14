---
title: Blocks vs Lamdas and Yield
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

Blocks and lambdas have two different syntaxes when they're being used as implicit parameters to a method call that will invoke them via `yield`. Blocks aren't included in the calling parameter list, while lambdas are included in the calling parameter list. In either case, the block or lambda parameter is _implicit_--it's not specifically declared in the method signature.

For example of this, take this simple method that imitates the `each` method found (and commonly used) in Ruby enumerators. This method uses a splat operator to take a variable number of parameters as a single array, iterating over that array and passing each element as an argument to the yielded block.

```
def each(*elements)
  for element in elements
    yield element
  end
end
```

When calling with a block, the syntax looks like this:

```
each(1,2,3,4) {|x| puts x}
```

The block is included in the method call, but not in the actual method parameters list. Without the separating parenthesis, Ruby will not recognize the provided block. For instance, `each 1,2,3,4 {|x| puts x}` causes a syntax error.

In contrast, when passing a lambda, that lambda must be included in the parameters list:

```
# These are both fine
each(1,2,3,4,&printer)
each 1,2,3,4,&printer
```

Attempting to call the lambda like a block results in a local jump error:

```
# This won't work.
each(1,2,3,4) &printer
```
