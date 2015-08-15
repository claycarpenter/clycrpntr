---
title: Default Arguments for Jade Mixins
tags: jade
template: /base.jade
category: snippet
---

There is no first-class support for default mixin arguments in Jade. Jade mixins operate a lot like JS functions, and providing default values for mixin arguments follows this theme. For a refresher, defining default values in JS typically follows one of two styles:

```
// More robust
arg = typeof arg !== 'undefined' ? arg : defaultValue;

// More concise, but has issues with falsy arg values
arg = arg || defaultValue;
```

These same techniques can be used in Jade mixins to provide default values for undefined arguments. Here are two examples of a mixin that creates a simple link button. The `href` target for the link is an optional argument; if a value isn't provided then the default of `#0` is provided.

Using the more robust `undefined` check for default values:

```
mixin button(label, classes, href)
  - href = typeof href !== 'undefined' ? href : '#0';
  a.button(class=classes, href=href)= label
```

Using an `OR` operator assignment:

```
mixin button(label, classes, href)
  - href = href || '#0';
  a.button(class=classes, href=href)= label
```

Calling either of those functions like so:

```
+button('Next', 'success', '#next')

+button('Submit', ['submit', 'success'])
```

Produces:

```
<a href="#next" class="button success">Next</a>

<a href="#0" class="button submit success">Submit</a>
```
