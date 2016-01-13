---
title: Simple Class With Manual Accessors
tags: ruby
template: /base.jade
category: snippet
---

A very simple class describing a person with a single attribute, their name.

The name is provided as an initialization argument, though it can be read and written later through the `name` property.

This example manually constructs reader and writer accessors for the purposes of exploration and demonstration. In many cases--especially in situations where property access is as trivial as this example--it would be much wiser, and much simpler, to take advantage of an `attr_accessor` declaration.

A few notes:

* References to the name (`@name`) are written using the `@` prefix to indicate that the target is an instance variable.
* In both the initialize and setter methods, two "name" variables are used. The instance prefix helps to distinguish the instance `@name` variable from the local `name` variable introduced through the method arguments.
* Note the use of the implicit return in the getter.
* Property setters are declared with an equals sign suffix (`def name=(name)`). This signals to Ruby that the method should be invoked to receive any assignment with the given property name, e.g. `simple_person.name = 'Jim'`.

```
class SimplePerson
  def initialize(name)
    @name = name
  end

  def name=(name)
    @name = name
  end

  def name
    @name
  end
end
```
