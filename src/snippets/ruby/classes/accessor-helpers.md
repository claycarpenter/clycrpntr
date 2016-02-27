---
title: Accessor Helpers
tags: ruby
template: /base.jade
category: snippet
---

Ruby offers three helpers for creating accessors for instance variables:

* `attr_reader` - Creates a reader for an instance variable
* `attr_writer` - Creates a writer for an instance variable
* `attr_accessor` - Creates a reader and a writer for an instance variable

These are declared along with symbols representing the instance variable's name:

```
class Person
  attr_reader :name
  attr_accessor :age, :job
end
```

Behind the scenes, Ruby creates simple methods for each type of helper. `attr_reader` generates a method that looks like this:

```
# Created from attr_reader :name
def name
  @name
end
```

The method generated for `attr_writer` looks like:

```
# Create from attr_writer :name
def name=(name)
  @name = name
end
```

And finally, `attr_accessor` generates both methods. So `attr_accessor :name` is equivalent to `attr_reader :name; attr_writer :name`.
