---
title: Simpler Iteration Over Hash Elements
tags: ruby
template: /base.jade
category: snippet
---

Simpler methods of iterating over hash elements, using the each group methods: `each_pair`, `each_key`, and `each_value`.

### each_pair

Iterates over all of a hash's elements, calling a block with the element's key and value as parameters.

In this example, we iterate over the (limited) options available on a coffee shop menu:

```
coffee_menu = {
  coffee: 1.5,
  americano: 1.75,
  latte: 3.0
}

coffee_menu.each_pair do |drink, price|
  puts "A #{drink} costs #{price}"
end
```

Produces this output:

```
A coffee costs 1.5
A americano costs 1.75
A latte costs 3.0
```

### each_key

`each_key` iterates over all of the hash's keys, calling a block with the key as the sole parameter.

In this example, we print out all drinks available in the coffee shop:

```
drinks = []
coffee_menu.each_key do |drink|
  drinks << drink
end
puts "Available drinks: #{drinks.join(', ')}"
```

### each_value

`each_value` iterates over all of the hash's values, calling a block with the value as the sole parameter.

In this example, we print out all prices listed on the coffee shop menu:

```
prices = []
coffee_menu.each_value do |price|
  prices << price
end
puts "Menu prices: #{prices.join(', ')}"
```
