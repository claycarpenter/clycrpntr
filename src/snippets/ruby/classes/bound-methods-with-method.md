---
title: Bound Methods with #method
tags: ruby
template: /base.jade
category: snippet
---

Ruby allows for capturing a bound method from an object with the `#method` method. `method` will find the method on the target instance that matches the name provided in the argument, and return a bound method object. That bound method will retain its references to the object that it is bound to, allowing it to be called later within the same context as it would be if it were accessed through the originating object.

This is a bit awkward to explain, so let's work through an example. Here, we have a very simple Person class, with a single instance variable named `name`. A single method, `say`, combines the `name` variable along with a provided argument. Here is the class:

```
class Person
  def initialize(name)
    @name = name
  end

  def say(message)
    "#{@name} says \"#{message}\""
  end
end
```

`say` can, of course, be called in the normal fashion:

```
mike = Person.new 'Mike'
puts mike.say 'Hello!'  #=> Mike says "Hello!"
```

Using `method`, we can also get a handle of a bound `say` method, and execute it with the `call` method.

```
mike_say = mike.method('say')
puts mike_say.call 'Goodbye!'   #=> Mike says "Goodbye!"
```

Because the `mike_say` method is a bound method, it retains its reference to the `mike` object. That lets it include Mike's name in the during the `mike_say.call` execution.


Note that `method` can be called with an argument that is either a string literal or a symbol--it'll work either way.
