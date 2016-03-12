---
title: Simple Data Structures with Struct
tags: ruby
template: /base.jade
category: snippet
---

Ruby's Struct provides a very easy and quick method for producing relatively simple class-like data structures. Because the class is included in Ruby's standard library, it's also available by default--handy when you need the functionality but don't want to import another gem.

At its most basic, Struct provides a way to create one-line data containers or structures. In this example, we create a basic Product struct that has `name` and `price` properties:

```
Product = Struct.new(:name, :price)

table = Product.new 'Table', 50.0
puts "Name: #{table.name} - Price: #{table.price}"  # => "Name: Table - Price: 50.0"
```

They also have a nice default `to_s` implementation which spits out the details of all of the struct members, similar to how `inspect` works on normal classes:

```
puts table  # => #<struct Product name="Table", price=50.0>
p table     # => #<struct Product name="Table", price=50.0>
```

Much like classes, Structs can also be enhanced with behavior. Here, we create a (slightly) more complicated TaxableProduct struct that supports calculating a price with tax included:

```
TaxableProduct = Struct.new(:name, :price) do
  def price_with_tax
    self.price * 1.07
  end
end
```

If the first argument to the Struct constructor is a string, then the resulting struct is created within the Struct namespace and available globally at `Struct::StructName`:

```
Struct.new('Namespaced', :name)
from_namespace = Struct::Namespaced.new 'Test'
puts from_namespace   # => #<struct Struct::Namespaced name="Test">
```

The structures hover somewhere between hashes and classes, being more well-defined than hashes but less defined than classes. They're great for when you need to pass ordered sets of information between components, but don't need the functionality of a full-fledged class wrapping around the data.
