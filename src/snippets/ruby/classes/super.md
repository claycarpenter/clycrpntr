---
title: The super Keyword
tags: ruby
template: /base.jade
category: snippet
---

Within a method block, the `super` keyword invokes the parent's implementation of the method registered with the same name. This is useful for getting access to methods that have been overridden in child classes.

In this example, we use the `super` keyword to help calculate the cost of a shopping cart with a discount. The discounted shopping cart extends the original shopping cart (which doesn't offer a discount). It takes a discount value as the last argument in its initialization call, and then uses that discount (multiplier) along with the result of `ShoppingCart#total` to calculate the discounted price total.

Here is the example in full:

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
  def initialize(*item_prices, discount)
    @item_prices = item_prices
    @discount = discount
  end

  def total
    super * @discount
  end
end

item_prices = [1, 2, 3, 4]

cart = ShoppingCart.new *item_prices
puts "Regular cart total: $#{cart.total}"      # => $10

discount_cart = DiscountShoppingCart.new *item_prices, 0.8
puts "Discount cart total: $#{discount_cart.total}"   # => $8.0
```
