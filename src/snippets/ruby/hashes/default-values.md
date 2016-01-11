---
title: Simpler Iteration Over Hash Elements
tags: ruby
template: /base.jade
category: snippet
---

Ruby supports specifying a default value for hashes to respond with when queried for a non-existent key. There are two ways to define default values: `Hash.new` and a hash's `default` property.

### Hash.new

Default values can be specified when the hash is created with a `Hash.new` initialization. The default value is the first parameter passed to the Hash. So `Hash.new ""` would create a new hash which returns an empty string when a requested key cannot be found.

In this example, the hash is given a price of 0 so that even drinks missing from this coffee menu receive a price:

```
coffee_menu = Hash.new 0
coffee_menu[:coffee] = 1.5
coffee_menu[:americano] = 1.75
```

Produces this output:

```
Americano price: 1.75
Latte price: 0
```

### default property

Default values can also be specified after a hash has been created, using the appropriately named `default` property. Setting that property will change the default value returned when a key cannot be found.

This is can be very useful when defining default values for hashes created with the hash literal syntax, as seen in this example:

```
coffee_menu = {
  coffee: 1.5,
  americano: 1.75
}
coffee_menu.default = 0
```

Which produces this output:

```
Americano price: 1.75
Latte price: 0
```
