---
title: Default Rescue Error Variable
tags: ruby
template: /base.jade
category: snippet
---

Ruby's `rescue` statement allows for the specification of the name for the local variable reference to the error. For instance:

```ruby
begin
  do_something_dangerous
rescue StandardError => error
  log_error error
end
```

In that case, the error will be available under the name `error`. What if an error variable name isn't provided? In that case, the error is available under the name `$!`. The same code as above, but with this implicit error variable, looks like this:

```ruby
begin
  do_something_dangerous
rescue
  log_error $!
end
```

If think the best practice is to always explicitly name your error, but if you're taking shortcuts or picking up maintenance for someone else's code and you need to get to the error variable for debugging, having access to the implicit error variable is really handy.
