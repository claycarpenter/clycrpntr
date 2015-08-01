---
title: "And Attributes" in Jade
tags: jade
template: /base.jade
category: snippet
---

In addition to normal literal attributes, Jade supports pulling attribute values from a generic object. The object's properties and values will be mapped to attribute names and values, respectively. The attribute object is provided as the argument to an `&attributes` operator that immediately follows the Jade tag name (and optionally the tag literal attributes). Because of the syntax, these are pronounced "and attributes". This example uses the `&attributes` syntax to specify the target for a link:

```
a&attributes({href: '/'}) Home
```

```
<a href="/">Home</
```

And attributes can also be used in conjunction with literal attributes, as in this example:

```
-
  atts = {
    title: "An orange",
    alt: "An orange"
  }
img(src="/images/orange.png")&attributes(atts)
```

```
img src="/images/orange.png" title="An orange" alt="An orange"/>
```

Note that while literal attributes cannot typically be defined multiple times (with the exception of the `class` attribute), and attributes can map to the same attribute names as are already declared on the tag. In that case, the values provided through the and attributes construct will overwrite the literal attribute values. Taking the above example and slightly modifying it to provide the `src` value through and attributes demonstrates this effect:

```
-
  atts = {
    title: "An orange",
    alt: "An orange",
    src: '/images/orange.jpg'
  }
img(src="/images/orange.png")&attributes(atts)
```

```
<img src="/images/orange.jpg" title="An orange" alt="An orange"/>
```

Finally, and attribute values are not sanitized (as normal literal attributes are). Take care to ensure that your use doesn't open security risks or contain characters (such as double quotes) that could threaten the structure of the DOM.
