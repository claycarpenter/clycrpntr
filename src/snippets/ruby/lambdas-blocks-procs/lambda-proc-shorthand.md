---
title: Lambda and Proc Shorthands
tags: rails
template: /base.jade
category: snippet
---

Ruby (v1.9 and above?) offers shortcuts for defining lambda and Procs. These shorthand syntaxes don't save a whole lot of keystrokes, but they're useful to know nonetheless.

### Lambda Shorthand

The lambda shorthand is `->`. Note that this changes the block syntax, as the parameters portion of the block is defined outside the block and within parenthesis. For instance, the block `{|a| a * 2 }` becomes `(a) { a * 2 }`.

These two lambda definitions are equivalent:

```
sum_lambda_long = lambda {|a,b| a + b}
sum_lambda_short = ->(a,b) {a + b}
```

### Proc Shorthand

The Proc shorthand is `proc {}`. Unlike the lambda shorthand, the syntax of the block doesn't change in this case.

Both of these calls are equivalent:

```
sum_proc_long = Proc.new {|a,b| a + b}
sum_proc_short = proc {|a,b| a + b}
```
