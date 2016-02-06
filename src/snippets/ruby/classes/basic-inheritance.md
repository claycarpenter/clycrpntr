---
title: Basic Inheritance
tags: ruby
template: /base.jade
category: snippet
---

Inheritance can be achieved in Ruby through the `<` operator. The new child class is on the left side, while the parent class is written on the right:

```
ChildClass < ParentClass
```

Here's a quick example demonstrating basic inheritance. In it, a ShoppingCart class will be extended by the DiscountShoppingCart class. The DiscountShoppingCart class modifies the prices of all of the items it is given during initialization, discounting them by 20%. It then relies on the parent class implementation of `total` to properly sum the price of all of the included items.

```
class ShoppingCart
  def initialize(*item_prices)
    @item_prices = item_prices
  end

  def total
    total = 0
    @item_prices.each {|x| total += x}
    total
  end
end

class DiscountShoppingCart < ShoppingCart
  def initialize(*item_prices)
    @item_prices = item_prices.map {|x| x * 0.8}
  end
end

item_prices = [1, 2, 3, 4]

cart = ShoppingCart.new *item_prices
puts "Regular cart total: #{cart.total}"

discount_cart = DiscountShoppingCart.new *item_prices
puts "Discount cart total: #{discount_cart.total}"
```
