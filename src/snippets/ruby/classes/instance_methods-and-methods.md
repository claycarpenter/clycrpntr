---
title: instance_methods and methods Properties
tags: ruby
template: /base.jade
category: snippet
---

In Ruby, you can find all methods that will be available to an instance of a given class by inspecting the array returned by `instance_methods`. Each value in the returned array is a symbol that corresponds with a method available to *instances* of that class.

This can be useful for discovering which methods are defined on a given class in a hierarchy:

```
def defined_on_class(klass)
  klass.instance_methods - klass.superclass.instance_methods
end

puts defined_on_class Object
```

To see all methods available on an itself, use `methods`. Again, the result is an array of symbols representing the available methods. This works equally well for investigating what methods are attached to class definitions.

For instance, we can use this technique to discover that `test_one` and `test_two` are defined on MyClass:

```
class MyClass
  def self.test_one
  end
  def self.test_two
  end
end

puts MyClass.methods - Object.methods   # => [:test_one, :test_two]
```
