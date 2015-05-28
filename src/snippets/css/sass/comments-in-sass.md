---
title: Comments in Sass
tags: sass
template: /base.jade
category: snippet
---

Sass supports three different comment styles:

* Multi-line, required
* Multi-line, optional
* Single-line, source-only

Understanding Sass comment styles requires a basic understanding of the available output styles. Sass supports four output styles: nested, expanded, compact, and compressed. The first two options, nested and expanded, produce human-readable output that's suitable for development and testing. Compressed-style output produces CSS that's suitable for production environments. It creates that output by moving all CSS into a single line, eliminating any extra whitespace or non-essential elements. The compact option is somewhere in the middle, more compact that nested or expanded but still more readable than compressed.

### Multi-line, required comments

These comments are *always* carried into the CSS output, regardless of output style. This is a great option for required preambles like copyright or license notices.

Required comments look similar to standard CSS comments, but a `!` immediately follows the opening of the comment (`/*`). Here's an example:

```
/*! 
    Copyright 2015 Initech 
    
    This will always be present, no matter the output style.
*/
```

### Multi-line, optional comments

Multi-line comments look and behave like standard CSS comments. They have the same syntax: `/* ... */`. In most output modes (nested, expanded, and compact) Sass will carry these comments into the output. In compressed output, Sass removes all of these comments. That makes these great options for documenting your stylesheets, as you can rely on Sass' output generator to strip out the comments before the make it into a production environment.

Again, these look identical to normal CSS comments. Here's an example:

```
/*
    Multi-line comment.
    
    This will be present in all output styles other than compressed.
*/
body {
    font-size: 16px;
}
```

### Single-line, source-only comments

Single-line comments are always removed from the generated output, no matter which output style is used. Like many programming languages, single-line comments start with a double forward slash--`//`--and continue through the end of the line. This comment style is a good option for quick development comments. If you're writing more than one or two lines of continuous comments, you're probably better off using the optional multi-line comments, which are more efficient to type and still removed from production output.

Single-line comments look like this:

```
// Single-line dev comment.
// This will be removed in all output styles.
h1 {
    font-size: 1.8em; 
}
```

They can also be added to the end of property and rule declarations:

```
a {
    color: orange;  // It's the new black.
}
```
