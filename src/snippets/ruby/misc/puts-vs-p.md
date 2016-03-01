---
title: Object Output and Inspection with p and puts
tags: rails
template: /base.jade
category: snippet
---

The Ruby Kernel provides a couple of useful methods for printing data to stdout. They come in the form of `p` and `puts`, and while each prints a single line to stdout, they vary in what they print.

`puts` will simply print the String representation of the arguments provided. More specifically, it prints the results of the `to_s` call on the arguments given. By default, this is the class name followed by a hex identified for the instance.

`p` will print the results of an object inspection, accomplished by calling `inspect` on each argument. By default, this is going to give insight into the state of the object by printing out the object's instance variables. This will work even if the variables don't have public accessors.

The differences are better illustrated by this example. In it, we've defined a very simple Person class with an initializer that takes three arguments. Each argument is stored in a corresponding instance variable. No accessors are defined for any of the instance variables. Note that the output for `p` still shows the state of the `name`, `age`, and `job` variables despite lacking those accessors.

```
class Person
  def initialize name, age, job
    @name = name
    @age = age
    @job = job
  end
end

alda = Person.new 'Alda', 24, 'Waitress'
puts alda
p alda
```

Produces this output:

```
#<Person:0x007f937b1054f8>
#<Person:0x007f937b1054f8 @name="Alda", @age=24, @job="Waitress">
```
