---
title: Block Shorthands with Symbol#to_proc
tags: ruby
template: /base.jade
category: snippet
---

Ruby has a convenient shorthand--sometimes called the "[pretzel operator](http://stackoverflow.com/questions/1217088/what-does-mapname-mean-in-ruby)"--that allows you to write statements like this:

```
['a','b','c'].map &:upcase    # => 'A', 'B', 'C'
```

How does that work behind the scenes? Effectively, when Ruby sees a `&` operator (the unary ampersand operator), it expects the operand to be a proc that it can convert into a block. If the operand isn't already a prod, the Ruby will call `to_proc` in an attempt to convert it. So the above line is really executing this code:

```
['a','b','c'].map &(:upcase.to_proc)
```

Symbol's `to_proc` implementation, in turn, creates a new proc that looks like this:

```
proc { |obj, *args| obj.send(self, *args) }
```

In this case, `self` is the Symbol itself, so the proc has the effect of calling the method corresponding to the symbol on the first argument (`obj`) passed into the proc. That first example then starts looking a lot more like this:

```
p ['a','b','c'].map {|obj| obj.send(:upcase)}
```

Many thanks to Ryan Toronto's excellent article [Ruby Symbols Instead of Blocks](http://codingvalue.com/blog/ruby-symbols-instead-of-blocks/) for helping to explain how this worked.
