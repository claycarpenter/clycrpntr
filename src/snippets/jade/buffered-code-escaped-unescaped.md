---
title: Escaped and Unescaped Buffered Code in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade escapes the results of buffered code expressions. These expressions could contain user-provided input, and escaping the result helps to avoid security risks such as cross-site scripting. As this escaping or sanitizing is a common best practice, Jade performs the conversion by default.

During the escaping process, common HTML markup characters, such as `<`, `>`, `"`, and `&` are converted to their HTML entity equivalents. This helps to turn potentially malicious content into relatively harmless text. Here, an example of user input that contains a reference to a dangerous script:

```
- var userInput = '<script src="//example.com/scripts/unsafe.js"></script>'
p= userInput
```

Produces this harmless text:

```
<p>&lt;script src=&quot;//example.com/scripts/unsafe.js&quot;&gt;&lt;/script&gt;</p>
```

If, however, you want the buffered code results to be unescaped, that can be accomplished by using the `!=` buffered code construct. Using `!=`, the unaltered results of the buffered code expression will be included in the Jade output. Note that this can cause security issues, so exercise this option only if you're very sure of what you're doing (and, hopefully, have used other techniques to sanitize your data).

Modifying the above example to use unescaped buffered code, the new snippet looks like this:

```
- var userInput = '<script src="//example.com/scripts/unsafe.js"></script>'
p!= userInput
```

And the result has become a full `script` tag within the `p` wrapper:

```
<p><script src="//example.com/scripts/unsafe.js"></script></p>
```
