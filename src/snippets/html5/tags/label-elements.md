---
title: The HTML5 label Element
tags: html5
template: /base.jade
category: snippet
---

The `label` element represents a label (or caption) for a specific form element. `label` elements are pretty specific; they should always be used to describe exactly one form element. Using `label` elements outside of forms isn't appropriate. This example is *not* an appropriate use of a `label` element:

```
<!-- Don't copy this; this is not a correct usage of the label element -->
<p>
  <label>First Name:</label>John
</p>
```

`label` elements can either contain or reference the control they're describing. These are the [supported controls](http://www.w3.org/TR/html5/forms.html#category-label):

> button, input (if the type attribute is not in the hidden state), keygen, meter, output, progress, select, textarea

The content of a label element is pretty flexible. If the `label` wraps its form control, then there must be only one form control. And no child `label` elements are allowed. Otherwise, the spec gives developers freedom in filling the `label`'s content. This allows for including semantic markup within the `label`, such as a `small` element containing details about expected input format:

```
<label>
  Date of Birth:
  <input name="dob">
  <small>(MM/YY/DDDD)</small>
</label>
```

The wrapped control can also come before or after the label text:

```
<label><input type="checkbox" name="unsubscribe"> Unsubscribe</label>
```
