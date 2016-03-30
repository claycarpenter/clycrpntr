---
title: Raising Exceptions
tags: ruby
template: /base.jade
category: snippet
---

The Ruby `raise` statement serves to raise an exception. There are a couple uses for this statement: first, it can re-raise exceptions caught in `rescue` blocks. Second, it can raise new exceptions.


##### Re-raising Exceptions

`raise`, called without an argument, will re-raise the argument captured in a `rescue` statement. Consider these basic methods, with provide a simple nesting with `outer` calling `inner`, which then attempts to perform an `eval` of the provided command:

```ruby
def inner(command)
  eval command
rescue StandardError => error
  puts "Caught error in inner: #{error.inspect}"
  raise
end

def outer(command)
  inner command
rescue StandardError => error
  puts "Caught error in outer: #{error.inspect}"
end
```

Calling those with faulty input causes the exception to be caught in `inner`, then raised by `raise` and subsequently caught again in `outer`:

```ruby
outer('4 / 0')
Caught error in inner: #<ZeroDivisionError: divided by 0>
Caught error in outer: #<ZeroDivisionError: divided by 0>
```

Note that you can also identify the error explicitly, if it's been given a name. The `inner` method could have also been written like this:

```ruby
def inner(command)
  eval command
rescue StandardError => error
  puts "Caught error in inner: #{error.inspect}"
  raise error
end
```

##### Raising New Exceptions

Passing an argument to `raise` causes it to create a new exception object. If the first argument is a string, then it will raise a new RuntimeError with the string as the exception's message:

```ruby
pry(main)> raise 'Oh no!'
RuntimeError: Oh no!
```

If the first argument is class descending from Exception, then it will raise a new exception of that type. Optionally, you can also provide a string message and a stacktrace location as the second and third arguments, respectively. Here, we raise a NoMethodError with a custom message:

```ruby
[4] pry(main)> raise NoMethodError, "undefined method 'foo_bar'"
NoMethodError: undefined method 'foo_bar'
from (pry):21:in `__pry__'
```

When we add `caller` as the third argument, the exception has an accurate stacktrace:

```ruby
[5] pry(main)> raise NoMethodError, "undefined method 'foo_bar'", caller
NoMethodError: undefined method 'foo_bar'
from /usr/local/var/rbenv/versions/2.2.3/lib/ruby/gems/2.2.0/gems/pry-0.10.3/lib/pry/pry_instance.rb:355:in `eval'
```
