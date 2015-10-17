---
title: The HTML5 li Element
tags: html5
template: /base.jade
category: snippet
---

The `li` element represents a list item in one of three collection types: ordered lists (`ol`), unordered lists (`ul`), and menus (`menu`).

Generally, the `li` element is pretty straightforward. It has no implied value in unordered lists or menus, and in ordered lists its value defaults to its position in the list relative to the starting value of the list.

`li` elements can also be given a specific value. In sequential lists, this is often redundant, such as:

```
<ol>
  <li value="1">A</li>
  <li value="2">B</li>
  <li value="3">C</li>
</ol>
```

Will render as:

<ol>
  <li value="1">A</li>
  <li value="2">B</li>
  <li value="3">C</li>
</ol>

If a value isn't defined or is not a valid integer, it will be ignored and the list item will pick up the value according to the order lists' sequence:

```
<ol>
  <li value="1">A</li>
  <li value="b">B</li>
  <li>C</li>
</ol>
```

Will render as:

<ol>
  <li value="1">A</li>
  <li value="b">B</li>
  <li>C</li>
</ol>

This also means that `value` arguments can be used to make the list skip. This list starts at 1, skips 3-5, and then continues for 6 and 7:


```
<ol>
  <li>1</li>
  <li>2</li>
  <li value="6">6</li>
  <li>7</li>
</ol>
```

<ol>
  <li>A/li>
  <li>B</li>
  <li value="6">F</li>
  <li>G</li>
</ol>
