---
title: Lambda Basics
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

Lambdas are Ruby functions that are represented as objects and can be stored in variables. This allows the logic they encapsulate to be passed around as method arguments, among other things.

Lambdas can be defined with either a curly bracket syntax for a `do...end` syntax. These two lambda definitions are identical:

```
say_hello = lambda { puts 'Hello!' }
say_hello = lambda do
  puts 'Hello!'
end
```

The convention is to use the curly bracket syntax for lambdas that fit on a single line, and the `do...end` syntax for anything best expressed in multiple lines.

Lambdas can also take parameters, which are specified with a pipe (`|`) syntax. Like method parameters, multiple parameters are separated by commas. Both the curly brackets and `do...end` syntaxes support parameters:

```
sum = lambda {|a,b| a + b}
sum = lambda do |a, b|
  a + b
end
```

Like methods, the value of the last statement of a lambda will be returned to its caller. To call a lambda, use the object's `#call` method:

```
puts sum.call(2,3)    # => 5
```
