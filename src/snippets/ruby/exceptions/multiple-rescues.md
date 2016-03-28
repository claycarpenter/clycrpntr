---
title: Multiple Rescue Statements
tags: ruby
template: /base.jade
category: snippet
---

Multiple `rescue` statements can be used around a single `begin` block to allow for a more fine-grained handling of possible exceptions. When multiple `rescue` statements are present, the first one to match is the block that will be executed in response to the exception. Matches are based on the class of the exception: if the rescue's exception class is the error class or one of its ancestors, the `rescue` matches. For instance, NoMethodError matches itself as well as StandardError, its ancestor. Because of this behavior, `rescue` statements should be written in order from most to least specific. For instance, this example method evaluates the "command" passed to it via the `eval` statement. Should the evaluated command have a syntax or missing method error, that will be caught by the first `rescue` block. Otherwise, the catch-call StandardError `rescue` block will handle the error.

```ruby
def run_command(command)
  result = eval command
rescue SyntaxError, NoMethodError => error
  puts "Looks like there's a typo in your code: #{error.inspect}"
rescue StandardError => error
  puts "I have no idea what caused this: #{error.inspect}"
end
```

A command with a syntax error:

```
pry(main)> run_command('4,,0')
Looks like there's a typo in your code: #<SyntaxError: (eval):1: syntax error, unexpected ',', expecting end-of-input>
```

In contrast, a command with a divide-by-zero error throws a ZeroDivisionError, which is caught in the StandardError block:

```
pry(main)> run_command('4 / 0')
I have no idea what caused this: #<ZeroDivisionError: divided by 0>
```
