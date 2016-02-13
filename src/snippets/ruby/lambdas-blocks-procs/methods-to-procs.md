---
title: Methods to Procs
tags: rails
template: /base.jade
category: snippet
---

Ruby can convert regular method definitions to Procs. This allows regular methods to be passed in where blocks are expected. The general syntax looks like this:

```
method_as_proc = object.method(:method_name).to_proc
```

This technique can be especially helpful when trying to pass methods attached to instances to other methods that accept blocks as arguments. When converting an instance's method to a proc, the newly created proc will retain the binding to the instance, as well as access to the instance properties.

For instance, consider this basic SimplePerson class. It has a single instance variable, `name`, which is set in the initializer:

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

The `name` accessor can be executed by converting the `name` method to a proc:

```
gabby = SimplePerson.new 'Gabby'
name_proc = gabby.method(:name).to_proc
puts name_proc.call   # => 'Gabby'
```

As you can see, calling `name_proc` executes in the context of the `gabby` instance variable the method is bound to, allowing the proper name to be returned.

Once the method has been converted to a proc, it can also be passed to a method that expects a block argument. Here, the trivial `say_hello` method captures the return value of the provided block and includes it in a simple hello string:

```
def say_hello
  speaker_name = yield
  "#{speaker_name} says hello!"
end

puts say_hello &name_proc   # => Gabby says hello!
```

The full example is below:

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

gabby = SimplePerson.new 'Gabby'
name_proc = gabby.method(:name).to_proc
puts name_proc.call   # => 'Gabby'

def say_hello
  speaker_name = yield
  "#{speaker_name} says hello!"
end

puts say_hello &name_proc   # => Gabby says hello!
```

