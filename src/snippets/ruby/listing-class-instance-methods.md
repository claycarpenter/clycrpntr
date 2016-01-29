---
title: Listing Instance Methods Defined On A Class
tags: ruby
template: /base.jade
category: snippet
---

You can use a combination of `instance_methods` and `superclass` properties, as well as an array difference operation, to create a list of instance methods defined on a particular class (rather than all instance methods, as `instance_methods` returns). The result is an array of symbols identifying the available instance methods.

The general syntax looks something like this:

```
FooClass.instance_methods - FooClass.superclass.instance_methods
```

For example, for this very basic Person class implementation:

```
class Person
  attr_accessor :name
  attr_reader :age

  def initialize(name, age)
    @name = name
    @age = age
  end
end
```

The instance method operation and results look like this:

```
irb(main):010:0> Person.instance_methods - Person.superclass.instance_methods
=> [:name, :name=, :age]
```
