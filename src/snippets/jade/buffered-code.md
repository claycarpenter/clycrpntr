---
title: Buffered Code in Jade
tags: jade
template: /base.jade
category: snippet
---

JavaScript expressions can directly contribute to the template output through Jade's buffered code statements. These statements begin with `=` and the following code is evaluated as a regular JavaScript expression. The result of that expression is then added into the output buffer.

Buffered code can appear in a couple of different contexts. It's commonly used to set a tag's entire contents to equal the value of an expression. In this format, the `=` buffered code indicator immediately follows the tag declaration. Here, we'll use buffered code to create a simple hello message:

```
- var name = "Jacob";
p= 'Hello, ' + name + '!'
```

Produces:

```
<p>Hello, Jacob!</p>
```

A couple of things to note here. First, the buffered code indicator (`=`) must immediately follow the tag declaration--whitespace between the two will cause the buffered code to be interpreted as plaintext. So this snippet, with a space between the `p` and `=`, will produce entirely different output:

```
p = 'Hello, ' + name + '!'
```

Creates:

```
<p>= 'Hello, ' + name + '!'</p>
```

...definitely not what we're looking for.

Looking at the original snippet, the unbuffered code (starts with `-`) has a terminating semi-colon, while the buffered code expression doesn't. Semi-colons are optional for unbuffered code, but cannot be inclued in buffered code. Adding a semi-colon to the hello message statement--`p= 'Hello, ' + name + '!';`--produces a parse error in Jade.

Any line that begins with `=` will also produce buffered code. This works when the line is just plaintext:

```
- var name = 'John'
= name
```

Produces `John` (with no wrapping tags). It also can be used to fill tag content, when that buffered code is indented below the tag. Our hello message snippet, now expanded to declare the message on two lines:

```
- var name = "Jacob";
p
  = 'Hello, ' + name + '!'
```
