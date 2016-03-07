---
title: Playing Around with Module Extend
tags: ruby
template: /base.jade
category: snippet
---

The Ruby `extend` method (available on all objects) copies the methods defined within a module into the target. The target can be either an instance, a class, or another module.

To demonstrate how this works, we'll start with a few basic components:

```
module Describer
  def describe
    puts "#{self.class} - #{self.object_id}"
  end
end

module Empty
end

class Alpha
end
```

We can now use `extend` to add the `describe` method to a new instance of Alpha:

```
a = Alpha.new

a.extend Describer
a.describe
```

In that case, the method is added as an instance method. Changing the target to the Alpha class itself, we can add a new class method:

```
Alpha.extend Describer
Alpha.describe  # => Class - 70161316161860
```

The `describe` method defined within the Describer module is not defined as a class method, so it isn't available on the Describe module:

```
Describer.describe rescue "This fails; method is not defined on module"
```

...but it can be added to the Describe module by having the module extend itself:

```
Describer.extend Describer
Describer.describe  # => Module - 70161316887740
```

`extend` also works when targeting other modules, allowing class method definitions on modules:

```
Empty.extend Describe
Empty.describe  # => Module - 70161316524320
```

However, because that `describe` method has been added _to_ the module, and not _within_ the module definition, it's not given to other instances that try to extend the Empty module:

```
a2 = Alpha.new
a2.extend Empty
a2.describe rescue "This fails; a2 doesn't pick up methods on module Empty because those are class methods"
```
