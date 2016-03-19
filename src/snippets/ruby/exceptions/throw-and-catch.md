---
title: Throw and Catch
tags: ruby
template: /base.jade
category: snippet
---

Ruby provides a mechanism for jumping out of deeply nested flow control and looping constructs through the `throw` and `catch` statements. These provide an exception-like mechanism for quickly escaping from control structures, but without the confusing pollution that would come from using exceptions to control program flow.

A throw and catch construction begins with defining a `catch` block. `catch` takes either a string or a symbol as its argument. Within that block, any `throw` that has the same string or symbol argument will immediately return execution to the point _after_ the `catch` block is complete.

Throw-catch constructions can also pass values by providing an optional second argument to the `throw` statement. If this is provided, the result of the `catch` block will be either the thrown value or the last statement in the `catch` block, if no `throw` statement is executed.

This simple example of throwing values runs a series of validations against a single value. Each validation is provided as a regex (via the splat operator). The regex tests are run in order, and if a regex fails the validation immediately stops and reports back the failing regex. If all regexes pass, the method returns `true`. We can determine whether or not all regexes passed the test by looking at the `regex_results` value--it'll be a single regex if a regex test fails, or the array of regexes returned by `regexes.each` (the last statement in the `catch` block) if not regexes fail.

```ruby
def validator(value, *regexes)
  # Returns results of regexes.each if successful, regex that failed for
  # failing test.
  regex_results = catch(:failed_regex) do
    regexes.each do |regex|
      result = regex =~ value

      throw(:failed_regex, regex) if result.nil?
    end
  end

  regex_results == regexes ? true : regex_results
end
```
