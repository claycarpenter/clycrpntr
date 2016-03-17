---
title: Sorting Arrays of Complex Objects
tags: ruby
template: /base.jade
category: snippet
---

Basic array sorting is easy enough:

```
[3,2,4,1].sort   # => [1,2,3,4]
```

Sorting on complex objects requires that a block be provided to the `sort` method. The block should implement a comparison between the two provided arguments, returning 0 if both arguments are equal, -1 if the first argument is less than the second, and 1 if the first argument is greater than the second. This can be accomplished with the "[spaceship operator](https://en.wikipedia.org/wiki/Three-way_comparison#Trivia)", more formally known as the combined comparison operator. It's used by default for sorting simple arrays. For instance, the above example could be rewritten:

```
[3,2,4,1].sort {|a,b| a <=> b}    # => [1,2,3,4]
```

If you want to sort on more complex objects, you can implement the comparison within the provided block. In this example, we create an inventory of Products. Each Product in the inventory has a name and a price. We can sort all of the Products in the inventory by price like so:

```
Product = Struct.new(:name, :price)

inventory = [
  Product.new('Table', 50),
  Product.new('Chair', 20),
  Product.new('Sofa', 150),
  Product.new('End Table', 30),
  Product.new('Lamp', 15)
]

p inventory.sort {|a, b| a.price <=> b.price }

# => [#<struct Product name="Lamp", price=15>, #<struct Product name="Chair", price=20>, #<struct Product name="End Table", price=30>, #<struct Product name="Table", price=50>, #<struct Product name="Sofa", price=150>]
```

You can also provide a default implementation for the combined comparison operator, so that the objects will know how to sort themselves without having to provide a block each time. Here, we recreate the Product as PriceComparableProduct, implementing the price comparison as an overridden implementation of the `<=>` method:

```
PriceComparableProduct = Struct.new(:name, :price) do
  def <=>(other)
    self.price <=> other.price
  end
end

price_comparable_inventory = [
  PriceComparableProduct.new('Table', 50),
  PriceComparableProduct.new('Chair', 20),
  PriceComparableProduct.new('Sofa', 150),
  PriceComparableProduct.new('End Table', 30),
  PriceComparableProduct.new('Lamp', 15)
]

p price_comparable_inventory.sort

# => [#<struct PriceComparableProduct name="Lamp", price=15>, #<struct PriceComparableProduct name="Chair", price=20>, #<struct PriceComparableProduct name="End Table", price=30>, #<struct PriceComparableProduct name="Table", price=50>, #<struct PriceComparableProduct name="Sofa", price=150>]
```
