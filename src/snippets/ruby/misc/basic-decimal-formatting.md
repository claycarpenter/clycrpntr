---
title: Formatting Decimals in Ruby
tags: rails
template: /base.jade
category: snippet
---

Use the (global) `format` method to format floating point numbers with specific numbers of decimals:

```
[18] pry(main)> format("%.2f", 1.824)
=> "1.82"
[19] pry(main)> format("%.2f", 1.0)
=> "1.00"
```
