---
title: Basic Loops
tags: ruby
template: /base.jade
category: snippet
---

A few more ways to create loops in Ruby, using `upto`, `downto`, and `step`.

### upto

Loops can be created using Integers `upto` method. `upto` iterates from the receiving object's value up to the sole argument passed in, including both the original value and the final value. It passes a single parameter to the provided block, the current iteration value.

```
puts 'Loop using #upto'
0.upto(5) do |i|
  puts i
end
```

### downto

Loops can be created using Integers `downto` method. Like `upto`, `downto` iterates over the integers between (and including) two values--it just does so by counting down, rather than up. It passes a single parameter to the provided block, the current iteration value.

```
puts 'Loop using #downto'
5.downto(0) do |i|
  puts i
end
```

### step

`step` provides the most control over how the iteration loop operates. The general syntax looks like this:

```
start_value.step(final_value, step_delta)
```

The start and final values are self-explanatory. The step delta is the amount that the current value is changed after each step.

A couple basic examples, working in both the positive and negative directions:

```
puts 'Loop using #step, positive'
0.step(50, 10) do |i|
  puts i
end

puts 'Loop using #step, negative'
55.step(0, -10) do |i|
  puts i
end
```

Those loops produce this output:

```
Loop using #step, positive
0
10
20
30
40
50

Loop using #step, negative
55
45
35
25
15
5
```


Note that because all of these operations are inclusive regarding their start and end values, the loop will still execute once if the start and end values are identical. This following loop prints `1`:

```
1.downto(1) {|x| puts x}
```
