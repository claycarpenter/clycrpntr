---
title: Checking Method Availability With respond_to?
tags: ruby
template: /base.jade
category: snippet
---

All Ruby objects (at least, those that descend from Object) have the method `respond_to?`. `respond_to?` allows you to test whether an object contains a particular method or not.

For instance, in this example, `respond_to?` tells us that Fixnum contains a `times` method, but Float doesn't:

```
three = 3
puts "#{three} (#{three.class}) has method \#times: #{three.respond_to?(:times)}"

pi = 3.14
puts "#{pi} (#{pi.class}) has method \#times: #{pi.respond_to?(:times)}"
```

The output looks like this:

```
3 (Fixnum) has method #times: true
3.14 (Float) has method #times: false
```
