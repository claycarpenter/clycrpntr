---
title: Basic Attributes in Jade
tags: jade
template: /base.jade
category: snippet
---

For most attribute values, Jade simply uses the string value of the expression assigned as the attribute value. In some special cases, Jade provides enhanced functionality. The `style` attribute is one of those. If a `style` attribute value is an object, then Jade will render the object's keys as CSS properties and the values for those keys as CSS property values. In this example, the `style` attribute is fed an inline JS object literal:

```
div(style={color: 'blue', 'font-size': '1.5rem'}) Styles Object
```

```
<div style="color:blue;font-size:1.5rem">Styles Object</div>
```

Note that in the above example, `font-size` is string instead of a literal JS property name. `font-size` is not a legal name in JS, but it can be an object key when wrapped as a string. Keep an eye out for this as dashes are very common in CSS property names.

Finally, style attributes can still be strings, just like other normal attributes:

```
div(style='{color: blue, font-size: 1.5rem}') Styles String
```

```
<div style="{color: blue, font-size: 1.5rem}">Styles String</div>
```
