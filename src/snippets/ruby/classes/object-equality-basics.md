---
title: Object Equality Basics
tags: ruby
template: /base.jade
category: snippet
---

Four methods are involved in testing for object equality in Ruby:

* `==` - Tests whether two objects have equal values. For many implementations, this can be accomplished by combining the `==` results of all instance variables.
* `eql?` - Tests whether two objects have equal values _and_ equal classes. This stricter equality test is used by Arrays and other collections to determine equality.
* `hash` - Provides a Fixnum value that represents (mostly uniquely) the current object's state. This is used by collections to quickly determine whether two items are equal, as the operation of comparing two Fixnums is much quicker than deep comparisons on large collections of complex objects. A simple way to accomplish this is to use a binary XOR operation to combine the hash values of all instance variables.
* `equal?` - This determines whether two objects are the same object. That is, both variables point to the exact same instance. By convention, this method is not overridden so that this important functionality can remain intact.

With those notes in mind, I created this simple Item class to demonstrate equality implementations. Note that this will consider oranges with a price of `1` and `1.00` to be equal with regards to `==`, but not equal when tested with `eql?` (because they are Fixnum and Float classes, respectively).

```
class Item
  attr_reader :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end

  def ==(other_item)
    @name == other_item.name && @price == other_item.price
  end

  def eql?(other_item)
    value_equality = self == other_item
    class_equality = @name.class == other_item.name.class && @price.class == other_item.price.class

    value_equality && class_equality
  end

  def hash
    @name.hash ^ @price.hash
  end
end

orange_fixnum = Item.new 'Orange', 1
orange_float = Item.new 'Orange', 1.00

puts "== #{orange_fixnum == orange_float}"      # => true
puts "eql? #{orange_fixnum.eql? orange_float}"  # => false

apples = []
3.times { apples << Item.new('Apple', 0.75)}

puts "All apples: #{apples}"            # => All three apples
puts "Unique apples: #{apples.uniq}"    # => Just one apple
```

Many thanks to Alan Skorkin's [article on Ruby equality](http://www.skorks.com/2009/09/ruby-equality-and-object-comparison/) and [this post](http://stackoverflow.com/a/7157051/1148628) by Stack Overflow user jtbandes for providing clear explanations that helped me write this snippet.
