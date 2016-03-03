---
title: Array Destructing and the Splat Operator
tags: ruby
template: /base.jade
category: snippet
---

Ruby supports destructuring arrays, or converting portions of the arrays into individual variables.

The most basic operation is capturing individual elements of an array as variables:

```
a, b = [1, 2]
a   # => 1
b   # => 2
```

This can also be useful in some circumstances to return multiple values from a method. In this example, the `service_request` method returns both a status code and message in a single array. Clients can then split those values back into individual variables using array destructuring.

```
def service_request(request)
  # Perform some operation here...

  # Return status code and message
  [status_code, status_message]
end

response_code, response_message = service_request()
```

Destructuring also works automatically with block arguments:

```
[
  ['Orange', 0.65],
  ['Banana', 0.33],
  ['Apple', 0.75]
].each {|fruit, price| puts "#{fruit} costs $#{price}" }
```

Produces this output:

```
Orange costs $0.65
Banana costs $0.33
Apple costs $0.75
```

The splat (`*`) operator can be used to capture multiple variables at once. When used alongside variables that aren't using the splat operator, those variables take precedence, and the splat operator variables capture whatever's left.

```
first, *remaining = [1,2,3,4]
# first => 1; remaining => [2,3,4]
*remaining, last = [1,2,3,4]
# first => [1,2,3]; remaining => [4]
first, *remaining, last = [1,2,3,4]
# first => 1; remaining => [2,3], last => 4
```

Finally, the splat operator can be used to split an array out into individual arguments passed to a method:

```
def say_hello(talker, listener)
  puts "#{talker} says hello to #{listener}"
end

say_hello *['John', 'Amy']    # => John says hello to Amy
```

