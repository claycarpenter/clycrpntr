---
title: Escaped and Unescaped Attributes in Jade
tags: jade
template: /base.jade
category: snippet
---

When generating attributes, Jade automatically sanitizes attributes values. The sanitization replaces special characters with their HTML entity equivalents, and helps protect against security risks when rendering user-provided input as HTML attributes. You can override this default by using the `!=` syntax between the attribute name and the value. This basic example shows the difference between escaped and unescaped output:

```
// Escaped
p(title="<em>Emphatic title!</em>") Lorem ipsum
// Unescaped
p(title!="<em>Emphatic title!</em>") Lorem ipsum
```

```
<!-- Escaped-->
<p title="&lt;em&gt;Emphatic title!&lt;/em&gt;">Lorem ipsum</p>
<!-- Unescaped-->
<p title="<em>Emphatic title!</em>">Lorem ipsum</p>
```

This next example shows how escaping can help protect against malicious users. Note that the second example with unescaped output injects a `script` reference where the `p` title value was expected:

```
- var userInput = "\"><script src='example.com/malicious-script.js'></script>"
// Escaped
p(title=userInput) User comment...
// Unescaped
p(title!=userInput) User comment...
```

```
<!-- Escaped-->
<p title="&quot;&gt;&lt;script src='example.com/malicious-script.js'&gt;&lt;/script&gt;">User comment...</p>
<!-- Unescaped-->
<p title=""><script src='example.com/malicious-script.js'></script>">User comment...</p>
```

Finally, escaping can be useful outside of security concerns. Consider a `title` attribute with a value that contains quotes within the title text. Escaping will automatically convert those quotes to `&quot;` entities, ensuring the attribute value is well-formed:

```
img(src="hamlet.jpg", title="Hamlet asks \"To be or not to be?\"")
```

```
<img src="hamlet.jpg" title="Hamlet asks &quot;To be or not to be?&quot;"/>
```
