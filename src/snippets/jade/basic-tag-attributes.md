---
title: Basic Attributes in Jade
tags: jade
template: /base.jade
category: snippet
---

Jade supports basic tag attributes using a parenthetical notation that looks like a hybrid of HTML and JS:

```
a(href="github.com") GitHub
```

```
<a href="github.com">GitHub</a>
```

While those attributes might look similar to HTML, they have an important difference: everything to the right of the equals sign is interpreted as a JS expression. This means that all literal values must be quoted (to become strings), which is unlike HTML5. So if the quotes are removed from `"github.com"` in the example above, the Jade compilation will fail.

With that small gotcha out of the way, that attribute values are JS expressions can be very helpful. In this example, we'll use a JS expression to determine which CSS class (`enabled` or `disabled`) to add to a form submit button, based upon a JS value:

```
- var isFormComplete = true;
button(class=isFormComplete ? 'enabled' : 'disabled') Submit
```

```
<button class="enabled">Submit</button>
```

Note that only the right-hand side (the attribute value) of the attribute declaration is dynamic; the left-hand side (the attribute name) is always interpreted as a literal. For instance, the following example will add an attribute `foo="bar"` rather than `bar="bar"`, because the `foo` in the attribute name is a literal and the `foo` in the attribute value is an expression:

```
- var foo = 'bar'
p(foo=foo)
```

```
<p foo="bar"></p>
```

Attributes can also be listed in sequence. If they're listed on one line, they must be separated by commas (similar to JS function arguments). They can also be listed on separate lines, in which case they only require line breaks to separate the attributes.

In a single line, using commas:

```
a(href="github.com", title="GitHub", class="highlighted") GitHub
```

```
<a href="github.com" title="GitHub" class="highlighted">GitHub</a>
```

On multiple lines, separated with only line breaks:

```
a(
  href="github.com"
  title="GitHub"
  class="highlighted"
  ) GitHub
```

```
<a href="github.com" title="GitHub" class="highlighted">GitHub</a>
```

Finally, both line breaks and commas can be used together:

```
a(
  href="github.com",
  title="GitHub",
  class="highlighted",
  ) GitHub
```

```
<a href="github.com" title="GitHub" class="highlighted">GitHub</a>
```
