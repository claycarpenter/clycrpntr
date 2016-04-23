---
title: Accessors for Class Variables
tags: ruby
template: /base.jade
category: snippet
---

Class variables in Ruby aren't externally accessible by default, and also aren't exposable through the typical accessor helpers like `attr_accessor` (those accessor method builders only work for instance variables). Instead, if you want to expose a class variable in Ruby you have to build your own simple accessor methods:

```ruby
class SimpleCache
  @@redis_connection

  def self.redis_connection=(connection)
    @@redis_connection = connection
  end

  def self.redis_connection
    @@redis_connection
  end
end
```

This basic cache example uses a class variable to hold a global handle for a Redis connection. It can then be set from an initializer script like so:

```ruby
SimpleCache.redis_connection = Redis.new url: "http://localhost:6379/"
```

Note that the methods must be defined on the class, which is accomplished with `self.method_name`.
