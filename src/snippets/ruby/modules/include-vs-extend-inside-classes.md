---
title: include vs extend Inside Classes
tags: ruby
template: /base.jade
category: snippet
---

When used as class statements, `include` and `extend` produce different results:

* `include` - adds included methods as instance methods
* `extend` - adds included methods as class methods

For instance, given this module:

```
module Foo
  def module_method
    puts "Module method"
  end
end
```

Using `include` causes the Foo module methods to be added as instance methods:

```
class Bar
  include Foo
end

Bar.new.module_method
```

Using `extend` causes the Foo module methods to be added as class methods:

```
class Baz
  extend Foo
end

Baz.module_method
```

These two options aren't mutually exclusive. Using both causes the Foo module methods to be added as both instance _and_ class methods:

```
class Snafu
  include Foo
  extend Foo
end

Snafu.new.module_method
Snafu.module_method
```
