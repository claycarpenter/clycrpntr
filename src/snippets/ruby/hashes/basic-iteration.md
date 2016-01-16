---
title: Iterating Over Hash Elements
tags: ruby
template: /base.jade
category: snippet
---

Iterating over hash contents, by key-value pair, as well as keys and values alone.

### Iterating over key-value pairs

The easiest way to iterate over a hash's contents is by using the enumerator provided by `each`. That enumerator supplies each call to the provided block with two variables: the key and value of the pair currently being enumerated.

In this example, we iterate over the (limited) options available on a coffee shop menu:

```
coffee_menu = {
  coffee: 1.5,
  americano: 1.75,
  latte: 3.0
}
coffee_menu.each do |drink, price|
  puts "A #{drink} costs #{price}"
end

```

Produces this output:

```
A coffee costs 1.5
A americano costs 1.75
A latte costs 3.0
```

### Iterating over keys

The hash method `keys` will return an array of all of the keys in the hash. Like any standard array, you can iterate over the elements with `each`.

This loop produces the same output as above, but requires a bit more work. Instead of being provided the key-value pairs as parameters, inside our `each` block we must look up the value for the particular key:

```
puts "Coffee menu drinks: #{coffee_menu.keys}"
coffee_menu.keys.each do |drink|
  puts "A #{drink} costs #{coffee_menu[drink]}"
end
```

### Iterating over values

If you only want the values of a hash, you can find them in the `values` method. Like `keys`, `values` returns an array of all of the values in the hash. You can then iterate over (or otherwise manipulate) that array using standard techniques like `each`.
