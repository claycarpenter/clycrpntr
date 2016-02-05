---
title: Getting The Handle of Top-Level Methods
tags: rails
template: /base.jade
category: snippet
---

Within a Ruby script, methods defined outside of namespaces (classes or modules) belong to the top-level object. It's a quirky component, and more information can be found on John Mair's excellent [What is the Ruby Top-Level?](https://banisterfiend.wordpress.com/2010/11/23/what-is-the-ruby-top-level/). For our purposes, though, we can treat methods defined on the top-level object as though they were defined on an object instance. We can refer to that top-level instance simply with `self`. To then look up a method, we can use the `#method` method on `self`.

You can see this at work in this very short sample script:

```
def say_hello
  puts "Hello!"
end

say_hello     # => Hello!
self.method(:say_hello).call     # => Hello!
```
