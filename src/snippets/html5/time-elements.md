---
title: The HTML5 time Element
tags: html5
template: /base.jade
category: snippet
---

A `time` element represents a date, time, or both. The `time` element must always contain a machine-readable datetime value. Optionally, it may also present a human-friendly message reflecting the machine-readable datetime value.

How the `time` element is interpreted by the user agent is determined by whether or not the optional `datetime` attribute is present. If no `datetime` attribute is present, the contents of the `time` element must be simple text content that contains a machine-readable datetime value. If the `datetime` attribute is present and given a value, then _that_ value becomes the machine-readable datetime value of the `time` element. In that case, the `time` elements contents can be anything desired (other than a nested `time` element) to present a human-friendly representation of the datetime. 

A simple `time` element representing the value for 4 July 2015:

```
<time>2015-07-04</time>
```

Adding in the `datetime` attribute allows us to present a human-friendly message reflecting the datetime value:

```
<time datetime="2015-07-04">Fourth of July, 2015</time>
```

The above element will be rendered as "Fourth of July, 2015", but the machine-readable datetime value will still be available to any screenreaders or other machine parsing agents.

The `time` elements supports a wide number of different time, date, and datetime formats. For a full list, refer to the [specification](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-time-element).
