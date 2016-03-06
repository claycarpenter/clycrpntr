---
title: Array Count and Index Blocks
tags: ruby
template: /base.jade
category: snippet
---

Both the Array `count` and `index` methods take blocks that let you define a complex predicate for the operation's matching tests.

Using as an example this very simple shopping cart, full of various fruits and vegetables:

```
class Produce
  attr_reader :name, :type

  def initialize(name, type)
    @name = name
    @type = type
  end
end

shopping_cart = [
  Produce.new('Orange', 'fruit'),
  Produce.new('Apple', 'fruit'),
  Produce.new('Banana', 'fruit'),
  Produce.new('Carrot', 'vegetable'),
  Produce.new('Cucumber', 'vegetable'),
  Produce.new('Carrot', 'vegetable')
]
```

We can find how many fruits are in the shopping cart by passing in a block to the `count` method:

```
fruits = shopping_cart.count {|item| item.type == 'fruit'}
puts "Number of fruits: #{fruits}"  # => 3
```

We can pass a similar block to the `index` method to locate the first "Carrot" item:

```
first_carrot = shopping_cart.index {|item| item.name == 'Carrot'}
puts "Index of first carrot: #{first_carrot}"   # => 3
```

