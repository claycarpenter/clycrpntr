---
title: Adding Class and Instance Methods with include, included, and extend
tags: ruby
template: /base.jade
category: snippet
---

Within Ruby, `include` can add methods defined in a module as instance methods for a class, while `extend` can add methods defined in a module as _class_ methods for a class. The two can be combined, along with help from the `included` callback, to add both instance and class methods to an including class during a single `include` operation.

The technique requires three things of the included module:

* Instance methods, defined on the module.
* Class methods, defined within a submodule of the module intended to be included.
* An `included` callback implementation.

A minimal implementation looks something like this:

```
module Foo
  def self.included(including_class)
    including_class.extend(ClassMethods)
  end

  module ClassMethods
    def class_method
      puts "Class method"
    end
  end

  def instance_method
    puts "Instance method"
  end
end
```

Within module Foo, we have the `included` callback, a submodule containing class methods (unimaginatively) called ClassMethods, and a single instance method. Foo can then be included in a class, and the class will pick up both the instance and class methods, like so:

```
class Bar
  include Foo
end

bar = Bar.new
bar.instance_method
Bar.class_method
```

How does this work? When Foo is included in Bar, its `included` callback is invoked, with the including class (Bar in this case) passed as an argument. The `included` callback then extends that including class with the contents of the ClassMethods module. That has the effect of copying the methods defined in ClassMethods as class methods onto Bar. The normal module include process proceeds as well, copying the methods defined in module Foo as instance methods in Bar. The result is that after the include process, both `Bar.new.instance_method` and `Bar.class_method` work.
