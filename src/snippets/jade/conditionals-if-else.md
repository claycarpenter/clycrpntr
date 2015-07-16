---
title: Conditionals with If, Else in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade supports conditionals using the `if`, `else`, and `else if` statements. These are shorthands for their equivalent JavaScript statements. The need to prefix the line with the Jade `-` operator is removed, and no parenthesis or curly brackets are needed. The result is a streamlined if statement that looks like this:

```
if condition
  //- Positive result
else if
  //- Second positive result
else
  //- Negative result
```

Here we'll use a simple `if` statement to provide a special message for returning users:

```
- var isReturningUser = true;
#message
  p
    if isReturningUser
      | Welcome back!
    else
      | Welcome to our site!
```

That will produce a `<p>Welcome back!</p>` message for our returning users.

Jade intelligently handles missing variable refs. Instead of throwing an error, if you use an undefined variable as the condition in an `if` statement, Jade will interpret that as `fasle`. Modifying the above snippet to remove the `isReturningUser` declaration, the if test fails and the result changes to `<p>Welcome to our site!</p>`.
