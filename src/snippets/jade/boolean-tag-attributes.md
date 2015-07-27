---
title: Basic Attributes in Jade
tags: jade
template: /base.jade
category: snippet
---

When dealing with boolean or HTML5 [empty-value attributes](http://www.w3.org/TR/html5/syntax.html#attributes-0), Jade provides a nice shorthand. Instead of having to repeat the attribute name and identical value, Jade interprets an attribute name that's not followed by a value as a boolean attribute. For instance, here is a boolean attribute written without the shorthand convention:

```
input(required="required")
```

And here is an equivalent Jade statement using the shorthand syntax:

```
input(required)
```

The actual HTML generated will depend on the Jade template's declared doctype. If the doctype is omitted or anything other than `html`, then the boolean attributes will be written in long form:

```
<input required="required"/>
```

If the template includes a Jade `doctype html` declaration, then the HTML will be generated in a terse style:

```
<input required>
```

Jade will include the boolean attribute in two cases:

* No value is assigned to the attribute: `input(required)`
* A `true` value is assigned to the attribute: `input(required=true)`

If the attribute value is `false`, `null`, or `undefined`, then the attribute will not be included in the HTML output:

```
input(required=false)
```

```
<input>
```

Note that Jade boolean attributes don't follow the JS convention of truthy and falsy. Values such as `0` and `""` will still be represented in the HTML output, even if traditional JS interpreters would consider them falsy:

```
input(required=0)
input(required="")
```

```
<input required="0">
<input required="">
```
