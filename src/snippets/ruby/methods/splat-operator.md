---
title: The Splat Operator
tags: ruby
template: /base.jade
category: snippet
---

Ruby methods can use a splat operator to accept a variable number of arguments that will be converted into an array. The syntax for the splat operator is `*argument_name`.

Here, we'll use the splat operator to take a variable number of items and add them to a highly sophisticated shopping cart:

```
class ShoppingCart
  attr_reader :items

  def initialize()
    @items = []
  end

  def add(*items)
    p items
    @items += items
  end
end

cart = ShoppingCart.new
cart.add('Gum')
cart.add('Soda', 'Iced Coffee', 'Almond Milk')
puts "ShoppingCart items: #{cart.items.join(', ')}"
# => ShoppingCart items: Gum, Soda, Iced Coffee, Almond Milk
```

You can also use the splat operator to break an array of value out into single arguments. For instance, the call `method(*[1, 2, 3])` really looks like `method(1, 2, 3)`. You can see the effect by playing around with the `ShoppingCart#add` method. We have an array holding a pair of new items that we'd like to add to the cart. If we pass them with just the array handle, we'll get an array wrapped in another array as the within the `#items` method:

```
cart.add(['Chocolate Cheerios', 'Baby Carrots'])
# => Value inside of #items is [["Chocolate Cheerios", "Baby Carrots"]]
```

But if we split the array apart with the splat operator, we get the expected array argument within `#items`:

```
cart.add(*['Chocolate Cheerios', 'Baby Carrots'])
# => Value inside of #items is ["Chocolate Cheerios", "Baby Carrots"]
```

With newer versions of Ruby (1.9 and up, I believe), the splat operator can be located anywhere within the method arguments. Ruby will assign values to all of the regular method arguments, and then give the leftovers to the splat operator. In this example, the splat operator sits in the middle of the method arguments, and will contain all but the first and last of the arguments passed to `num_range`:

```
def num_range(first, *middle, last)
  puts "Between #{first} and #{last} there are #{middle.count} numbers in the middle."
end

num_range(1, 2, 4, 6, 10)
# => Between 1 and 10 there are 3 numbers in the middle.
num_range(1, 10)
# => Between 1 and 10 there are 0 numbers in the middle.
```
