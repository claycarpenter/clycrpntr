---
title: Handling Exceptions with begin, rescue, and ensure
tags: ruby
template: /base.jade
category: snippet
---

The primary mechanism Ruby has for catching and handling exceptions are the `begin`, `rescue`, and `ensure` statements. They closely resemble the Java statements `try`, `catch`, and `finally`, respectively.

Simply, a `begin` statement starts a block that defines a process the code author thinks might throw an exception. `rescue` statements cap off that block, and take an argument that allows those caught exceptions to be captured as local variables within the `rescue` block. And finally, the `ensure` block always executes, regardless of whether there was an exception or not. It's an excellent place to add any clean up logic; closing database connections seems to be the canonical example.

Here is a simple example that takes an array of words and converts each to its uppercase equivalent. In the case of an error (when `#upcase` fails for some reason), the processed results are still returned:

```ruby
def uppercase_words(*words)
  begin
    results = []
    words.each {|word| results << word.upcase}
  rescue StandardError => error
    puts "Caught error: #{error.inspect}"
  end

  results
end
```

Produces this output:

```ruby
[2] pry(main)> uppercase_words('alpha','beta', nil, 'parking', 'lot')
Caught error: #<NoMethodError: undefined method `upcase' for nil:NilClass>
=> ["ALPHA", "BETA"]
```

It's also possible to define `rescue` and `ensure` blocks with an implicit begin. This second example, which produces the lowercase version of words, does just that:

```ruby
def lowercase_words(*words)
  results = []
  words.each {|word| results << word.downcase}
rescue StandardError => error
  puts "Caught error: #{error.inspect}"
ensure
  return results
end
```

Produces this output:

```ruby
[3] pry(main)> lowercase_words('ALL','YOUR', nil, 'BASE')
Caught error: #<NoMethodError: undefined method `downcase' for nil:NilClass>
=> ["all", "your"]
```
