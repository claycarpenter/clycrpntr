---
title: class and superclass Properties
tags: ruby
template: /base.jade
category: snippet
---

In Ruby, all instances provide a `class` property that points to the class that the instance was constructed from. For instance:

```
puts 1.class  # => Fixnum
```

All class definitions (instances of Class) contain a similar property, `superclass`. `superclass` points back to the parent of the class in question. For instance:

```
puts Object.superclass
```
