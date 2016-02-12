---
title: Extending Classes and Instance Updates
tags: ruby
template: /base.jade
category: snippet
---

Adding new methods to an existing Ruby class also updates any existing instances of that class. For instance, in this example, the object `emma` will have access to the new method `get_name` even though that method is not defined until after `emma` is instantiated:

```
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
end

emma = Person.new 'Emma', 32

class Person
  def get_name
    @name
  end
end

puts emma.get_name
```
