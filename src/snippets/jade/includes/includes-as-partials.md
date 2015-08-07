---
title: Jade Includes as Partials
tags: jade
template: /base.jade
category: snippet
---

When Jade includes another template, that new template is processed with the same context present when the `include` statement was executed. That means that included sub-templates have access to the same data structures defined in their parent templates. This allows includes to act as partials, mocking up reusable code bits that can even support dynamic variable data.

In this simple example, we'll produce a short shopping list. The shopping list will be defined in `example.jade`, while the shopping list item display will be held in `item.jade`.

Here is `example.jade`:

```
-
  var shoppingItems = [
    {
      name: 'Alpha',
      quantity: 10
    }, {
      name: 'Beta',
      quantity: 14
    }, {
      name: 'Omega',
      quantity: 5
    }
  ]

ul
  each item in items
    include item.jade
```

The shopping list is defined in the variable `items`, a simple array of basic object literals. Then the Jade `each` statement is used to iterate over every `item` in `items`. Within that `each` statement block, the `item` variable points to the current iteration object. When the `item.jade` template is included, it can reference that same variable, like so:

```
li
  p= item.name
  small Quantity remaining: #{ item.quantity }
```

This is the resulting shopping list:

```
<ul>
  <li>
    <p>Alpha</p><small>Quantity remaining: 10</small>
  </li>
  <li>
    <p>Beta</p><small>Quantity remaining: 14</small>
  </li>
  <li>
    <p>Omega</p><small>Quantity remaining: 5</small>
  </li>
</ul>
```
