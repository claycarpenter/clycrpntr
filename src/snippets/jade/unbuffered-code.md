---
title: Unbuffered Code in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade allows for inline JavaScript within Jade templates. JavaScript expressions that aren't intended to directly produce output are known as [unbuffered code](http://jade-lang.com/reference/code/) in Jade. Examples of statements that don't produce output are variable declarations, control statements such as `if` and `for`, and function calls.

To include unbuffered code just precede the expression with a `-`. Here is a simple variable declaration:

```
- var name = "John"
```

Note that unbuffered code, like JavaScript, doesn't require a semi-colon at the end of the expression, though adding a semi-colon is fine too.

Unbuffered code can also be declared in blocks. In this case, begin the block with a single `-`, and then indent the following lines that build the unbuffered code block. Here's a basic block that sets two variables:

```
-
  var firstName = "Jacob"
  var secondName = "Bear"
```

There isn't a space on the opening line after the `-`, and that's intentional. Anything other than a carriage return/new line seems to cause Jade to break out of the unbuffered code block and returning to regular template parsing.

Jade's a bit more lenient about whitespace within the unbuffered code block. We can take advantage of that to rewrite the above snippet to be more concise and still well-formatted:

```
-
  var firstName = "Jacob",
      secondName = "Bear"
```
