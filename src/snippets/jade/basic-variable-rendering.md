---
title: Basic Variable Rendering in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade supports two methods of including variable values in the HTML output.

The first and simplest method uses `=`, the buffered code construct. Code following the `=` symbol will be evaluated as a JavaScript expression, and the resulting value will be inserted in place of the expression. This is handy for setting the entirety of a tag's content to be equal to a variable by making that variable that sole piece of the JavaScript expression. For instance, this statement uses the `articleTitle` variable to fill the `h1` tag:

```
h1= articleTitle
```

If `articleTitle` has the value "Press Release", then the resulting HTML will be:

```
<h1>Press Release</h1>
```

The buffered code method works best when the tag contents are contained in a single variable. For more complex cases, when the variable value is meant to be interwoven between plain text, variable interpolation can be used. Variable interpolation uses the construct `#{ expr }`. `expr` can be any valid JS expression; variables are just the most common and ready example.

Here, variable interpolation is used to weave in the user's first name into a greeting message:

```
i Hi #{ firstName }, welcome to our site!
```
