---
title: Defining Class Methods
tags: ruby
template: /base.jade
category: snippet
---

Class variables are similar to instance variables, but they're attached to a class rather than a particular instance. They also share a similar syntax with instance variables, being defined with a double at-sign (`@@`):

```
class Foo
  @@class_variable = 'Bar'
end
```

Because class variables are defined and accessed in a single namespace, they work best for storing information that needs to be "globally" accessible, while still maintaining some amount of sanity in your code base. Examples of potential uses include application configuration, representing environment variables, or cache systems.

In this example, we write a very (_very_) simple cache system using class variables:

```
class SimpleCache
  @@data = {}

  def self.set(key, value)
    @@data[key] = value
  end

  def self.get(key)
    @@data[key]
  end
end

SimpleCache.set(1, {name: 'Ryan'})
SimpleCache.set(2, {name: 'Aimee'})

puts SimpleCache.get(2)
```
