---
title: Method Definitions on Modules
tags: ruby
template: /base.jade
category: snippet
---

There are (at least) two types of method definitions on a module: methods defined _within_ the module, and methods defined _on_ the module. Methods defined within the module will be available to the instances of any classes that include that module. Methods defined on the module will only be available on the module itself. That means they won't be available on classes that include the modules, nor on the instances of including classes.

Defining a method within a module takes the typical method definition form:

```
module Hello
  def say_hello
    puts "Hello!"
  end
end
```

Defining a method on a module involves prefixing the method name with `self.`, indicating that you're defining the method on the module itself:

```
module Hello
  def self.say_hello
    puts "Hello!"
  end
end
```

How the two types of method definitions interact can be seen in this example. We define a `Talker` module, and then `talk` methods both on and within the module (these won't conflict). Then we define a simple `Person` class to include the `Talker` module, and test them out with a couple simple `puts` calls.

```
module Talker
  def self.talk
    puts "Hi from module/class"
  end

  def talk
    puts "Hi from instance"
  end
end

class Person
  include Talker
end

# Module method
puts Talker::talk   # => "Hi from module/class"

# Instance method
puts Person.new.talk   # => "Hi from instance"

# Fails with NoMethodError
puts Person.talk rescue NoMethodError   # => nothing
puts Person::talk rescue NoMethodError   # => nothing
```

Note that the method defined on `Talker` isn't available at all through `Person`.
