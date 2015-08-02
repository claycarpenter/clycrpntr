---
title: Escaped and Unescaped Variable Interpolation in Jade
tags: jade
template: /base.jade
category: snippet
---

When Jade renders an interpolated value, it automatically sanitizes the string.  The sanitization process replaces certain special characters with their corresponding HTML entities in the expectation that such a transformation will render malicious code harmless. For instance:

```
p #{ '<br>' }
```

Renders with HTML entities replacing the angle brackets:

```
<p>&lt;br&gt;</p>
```

The security implications are a bit more clear in this example, where user input that contains a reference to a malicious script is rendered out as the comment body:

```
- var userInput = "<script src='example.com/malicious-script.js'></script>"

// Escaped
p.comment #{ userInput }
```

The rendered comment body contains the user's input, but that input is rendered benign by converting it to just plain text:

```
<p class="comment">&lt;script src='example.com/malicious-script.js'&gt;&lt;/script&gt;</p>
```

Escaping (or sanitization) can also be turned off for interpolated variables on a case-by-case basis using the `!{ expr }` syntax. Rewriting the above example with unescaped variable rendering allows the user input to reference the malicious script:

```
- var userInput = "<script src='example.com/malicious-script.js'></script>"

// Unescaped
p.comment !{ userInput }
```

```
<p class="comment"><script src='example.com/malicious-script.js'></script></p>
```
