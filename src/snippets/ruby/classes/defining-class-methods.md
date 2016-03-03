---
title: Defining Class Methods
tags: ruby
template: /base.jade
category: snippet
---

There are two alternative syntaxes for defining class methods in Ruby. The most common method is to define the method on the class itself with `self.method_name`:

```
class Widget
  def self.new_class_method
    # Super complex operations here.
  end
end
```

I find that method to be the most intuitive. However, it is also possible to use an "append" syntax to add to the class definition:

```
class Widget
  class << self
    def new_class_method
      # More magic here.
    end
  end
end
```

Either option achieves the same thing: a method that's accessible not via a class' instances, but directly through the class itself.

In this example, we use a class method to implement a very simple factory pattern. In this case, we'll take a short block of JSON text and convert it into a new Person object.

```
require 'json'

class Person
  attr_reader :name, :real_name

  def initialize(name, real_name)
    @name = name
    @real_name = real_name
  end

  def self.build_from_json(json)
    parsed = JSON.parse json

    Person.new(
      parsed['name'],
      parsed['real_name']
    )
  end

  # This is equivalent to the above build_from_json definition.
  # class << self
  #   def build_from_json(json)
  #     parsed = JSON.parse json
  #
  #     Person.new(
  #       parsed['name'],
  #       parsed['real_name']
  #     )
  #   end
  # end
end

ajax = Person.build_from_json '{"name":"Ajax", "real_name":"Francis"}'

puts "#{ajax.name} - #{ajax.real_name}"
# => "Ajax - Francis"
```
