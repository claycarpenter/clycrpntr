---
title: Lambda and Proc Return Behavior
tags: rails
template: /base.jade
category: snippet
---

While lambdas and procs are functionally similar in many respects, they differ in how they handle behavior after a `return` statement. Lambdas exit the lambda and return execution to the calling method, while procs exit completely out of the calling method.

Here are a couple of examples to demonstrate the point. The first example shows a lambda's return behavior:

```
def lambda_return_test
  lambda { puts 'lambda returns'; return }.call

  puts 'method returns'
  return
end

lambda_return_test
```

Because the lambda return statement allows the calling method to continue execution, it outputs both `puts` calls:

```
lambda returns
method returns
```

In contrast, here is a similar example implemented with a proc:

```
def proc_return_test
  Proc.new { puts 'proc returns'; return }.call

  puts 'method returns'
  return
end

proc_return_test
```

Running that code prints only the value from the proc, as the method `proc_return_test` stops executing after the proc's `return` statement.

```
proc returns
```
