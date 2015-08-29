---
title: The code Element
tags: html5
template: /base.jade
category: snippet
---

The `code` element represents a chunk of computer input or output. The most obvious example is of course code, but [the spec points out](http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element) that `code` more generally applies to "any other string that a computer would recognize".

With that broad definition, `code` can accurately mark up content for a number of different types:

* HTML element references (as used in this snippet)
* File names and/or file paths
* Command line examples
* Computer output (especially if that output is typically printed from a command line interface)

`code` is best used for inline code as well as single lines of code. Typically multiline code samples include indenting and other formatting, and such formatting isn't ensured by the `code` element. In order to maintian the snippet's text formatting, wrap the `code` element in a `pre` element.

Here is an example of using `code` to highlight an HTML element:

```
The <code>code</code> element represents a chunk of computer input or output.
```

Here's an example of installation instructions that include a line of CLI input:

```
<p>To install the Express module, use this command:</p>
<p><code>npm install --save express</code></p>
```

Note that `code` is only a semantic marker, not a stylistic one. It indicates that a certain fragment of content contains code, but doesn't necessarily apply any formatting. If no styles are provided, major modern browseres apply a default style that presents the content with a `monospace` font.
