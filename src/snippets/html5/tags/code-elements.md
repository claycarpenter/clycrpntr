---
title: The code Element
tags: html5
template: /base.jade
category: snippet
---

The `code` element represents a chunk of computer code. While [the spec point out](http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element) that `code` also generally applies to "any other string that a computer would recognize", there are better choices for representing computer input and output. Specifically, the `kbd` tag for user input and the `samp` tag for computer output both add more semantics to the computer-recognizable text than `code` alone provides.

Good candidates for markup with `code` tags include these:

* Code samples, both inline and as blocks.
* HTML and XML element references (as used in this snippet).
* File names and/or file paths.

When used by itself, `code` is best suited for inline content as well as single lines of code. Multiline code samples typically include indenting and other formatting that should be preserved to maintain the readability of the content. Because such formatting isn't ensured by the `code` element alone, multiline samples should be wrapped in a combination of `pre` and `code` tags, such as `<pre><code>content</code></pre>`.

Here is an example of using `code` to highlight an HTML element inside of a sentence:

```
<p>
  The <code>a</code>, or <i>anchor</i>, element represents a link to a different document.
  ...
</p>
```

Here, a multiline code sample is presented with formatting preseved with the help of the `pre` tag:

```
<pre><code>function sayHello (name) {
  console.log('Hello, ' + name);
}</code></pre>
```

Note that `code` is only a semantic marker, not a stylistic one. It indicates that a certain fragment of content contains code, but doesn't necessarily apply any formatting. Significantly, it doesn't provide any indication of what language the presented code is written in. To achieve language-specific styling, apply a CSS `class` attribute with a class that contains the appropriate styles.
