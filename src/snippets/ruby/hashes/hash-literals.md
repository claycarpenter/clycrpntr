---
title: Array Indexes
tags: ruby
template: /base.jade
category: snippet
---

Hash literals provide a concise (and highly readable) way to define a new hash and its contents in one statement.

### Basic literal

The most basic way to define a hash literal element is in the form of `key => value`. Normal literal value rules apply here, so strings must be quoted, symbols need colon prefixes, etc.

Here, a simple hash literal using strings as keys and floats as values:

```
snack_menu = {
  "scone" => 2.0,
  "cheese biscuit" => 2.25,
  "donut" => 1.5
}
```

### Symbol-keys shorthand

If _all_ of your keys are symbols, you can write your hash using a shorthand. The longer form `:key => value` becomes simply `key: value`.

In this example, we build a coffee menu using symbols as keys. The first definition uses the longhand form, the second example uses the shorthand version.

```
coffee_menu = {
  :coffee => 1.5,
  :americano => 1.75,
  :latte => 3.0
}

coffee_menu = {
  coffee: 1.5,
  americano: 1.75,
  latte: 3.0
}
```
