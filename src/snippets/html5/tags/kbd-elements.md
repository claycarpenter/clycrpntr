---
title: The kbd Element
tags: html5
template: /base.jade
category: snippet
---

A `kbd` element indicates user input into a computer system. The element is the semantic opposite of the `samp` element, which indicates output from a computer system.

Examples of items that would count as user input include:

* Keyboard input
* Mouse input, including clicks or gestures
* Touch input and gestures
* Voice commands

`kbd` elements can also be nested to illustrate individual actions within a sequence of user inputs. For instance, the common save shortcut key combination of `ctrl` and `s` can be represented as `<kdb><kbd>ctrl</kbd> + <kbd>s</kbd></kbd>`.

Despite having opposite semantics, the `kbd` and `samp` elements can be used together:

* When a `kbd` element is nested inside a `samp` element, the `kdb` element represents user input echoed as part of a systems' output.
* When a `samp` element is nested inside a `kbd` element, the `samp` element represents computer output that the user is interacting with.

For instance, to you can use the two elements to illustrate how a user would save a file through the program's menu system:

```
<p>
  To save a file, select <kbd><kbd><samp>File<samp></kbd> -> <kbd><samp>Save</samp></kbd></kbd>.
</p>
```
