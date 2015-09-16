---
title: The HTML5 strong Element
tags: html5
template: /base.jade
category: snippet
---

The `strong` element indicates portions of content that should be highlighted for their "[importance, seriousness, or urgency](http://www.w3.org/TR/html5/text-level-semantics.html#the-strong-element)".

The `strong` tag can be used to highlight content in otherwise boilerplate messages. In this example, `strong` is used to highlight the amount due in a bill:

```
<p>Your monthly cell phone bill is <strong>$34.00</strong>.</p>
```

`strong` tags can be nested in order to increase the significance of the `strong` tags. The importance of any given `strong` tag is based upon the number of `strong` tags in its ancestry. In this example, an emphasized warning is further highlighted by pointing out what two actions the user absolutely should not attempt:

```
<p>
  <strong>
    While the firmware on your phone is updating, <strong>do not turn off the phone</strong> and <strong>do not disconnect the phone's power supply</strong>.
  </strong>
</p>
```
