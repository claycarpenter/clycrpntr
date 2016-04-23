---
title: Template Strings in ES6
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces template string support. Defined between backticks (i.e., grave accents), template strings (more accurately, template literals) are like string literals with a few new tricks.

Template string definitions support multi-line declarations:

```javascript
function multiLineString() {
  var multilineString = `I begin here
  indented
...and end on this line.`;

  console.log(multilineString);
}

multiLineString();
```

Running `multiLineString` prints this to the console:

```
I begin here
  indented
...and end on this line.
```

Note that multiline doesn't honor the indention level of the declaring variable. So in this case, in order for the last line to have no indention, it must be at the first character place on its line in the source code.

Template strings also support, as their name implies, templating, or variable interpolation. Variables are defined within `${ }` constructs, and can evaluate expressions:

```javascript
let a = 5,
    b = 'something';

// Basic templating
console.log(`a is ${a}, b is ${b}`);  // a is 5, b is something

// Can also support expressions
console.log(`a is ${a * a}, b is ${b.toUpperCase()}`);  // a is 25, b is SOMETHING
```
