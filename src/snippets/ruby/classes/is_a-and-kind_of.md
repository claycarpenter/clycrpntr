---
title: Object is_a and kind_of Methods
tags: ruby
template: /base.jade
category: snippet
---

In Ruby, Object provides two methods for testing the inheritance of a particular instance: `is_a?` and its alias `kind_of?`.

Both operate on an instance and take a class as their sole argument. If the instance is created from the given class, or the class is one of the instance's ancestors, the method returns `true`.

For instance:

```
1.is_a? Fixnum    # => true
1.is_a? 1.class   # => true
1.is_a? Object    # => true
```

This also works when inspecting class definitions as well:

```
Object.is_a? BasicObject
```
