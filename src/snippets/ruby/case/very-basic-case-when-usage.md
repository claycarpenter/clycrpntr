---
title: Very Basic Case/When Usage
tags: ruby
template: /base.jade
category: snippet
---

The Ruby `case` expression can be handy when trying to perform a handful of different against a single value. `case` can be thought of as a streamlined way to create a series of `if` statements. In this case, individual tests are defined not with `if` but with a `when` statement. Like an `if` expression, `case` allows for an `else` block that serves as a catch all.

Here, a simple example produces pluralized output for the number of apples in the `apple_count` variable:

```
apple_count = 0
case apple_count
when 0
  puts "No apples"
when 1
  puts "1 apple"
else
  puts "#{apple_count} apples"
end

# => "No apples"
```

Because a `case` expression returns the value of the matched test block, that same apples pluralization sample can be written like so:

```
apple_count = 0
apple_text = case apple_count
when 0
  "No apples"
when 1
  "1 apple"
else
  "#{apple_count} apples"
end
puts apple_text

# => "No apples"
```

A case statement can also handle multiple tests in a single `when` clause, as shown in this very basic HTTP status code handler:

```
case request_service_result
when 200
  write_resource
when 300
  write_redirect
when 400, 500
  write_error
end
```

