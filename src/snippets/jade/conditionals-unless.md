---
title: Conditionals with If, Else in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade provides a simple shorthand for negated `if` test. The `unless` statement provides a clearer way to write `if !condition`. Here, it's used to present a welcome message only to new users:

```
- var isReturningUser = false;
#message
  p
    unless isReturningUser
      | Welcome to our site!
```

Results in:

```
<div id="message">
  <p>Welcome to our site!
  </p>
</div>
```
