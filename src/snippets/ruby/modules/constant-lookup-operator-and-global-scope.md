---
title: Constant Lookup Operator and Global Scope
tags: ruby
template: /base.jade
category: snippet
---

Using the constant lookup operator (`::`) without a initial symbol causes the lookup to begin at the topmost scope.

In this example, the `NAME` value in `Inner` overrides that of the global `NAME`. Using the constant lookup operator to identify the `NAME` on the global scope allows us to retrieve that value from within the `#global_name` method:

```
NAME = 'Global'

module Outer
  NAME = 'Outer'

  module Inner
    NAME = 'Inner'

    def self.global_name
      ::NAME
    end

    def self.local_name
      NAME
    end
  end
end

puts Outer::Inner.global_name   # => Global
puts Outer::Inner.local_name    # => Inner
```
