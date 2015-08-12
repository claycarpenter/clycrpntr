---
title: Basic Jade Mixins
tags: jade
template: /base.jade
category: snippet
---

Jade mixins are reusable micro-templates. They're similar to Sass mixins, but also resemble JS functions. Mixins are great for capturing commonly used blocks of code and cleaning up redundancy in your template.

In this example, we'll use a mixin to represent a repeated UI element: a submit button, with the same text ("Submit") and two classes (`button` and `submit`):

```
mixin submitButton
  a.button.submit(href="#0") Submit
```

The submit button could then be injected using this Jade code:

```
+submitButton
```

Produces:

```
<a href="#0" class="button submit">Submit</a>
```

Mixins can also take arguments. We'll write a generic button generator mixin that takes a pair of arguments: the label for the button, and a string or array of classes.

```
mixin button(label, classes)
  a.button(class=classes, href="#0")= label
```

Calling the mixin to create a few different buttons:

```
// Next button
+button('Next', 'success')

// Cancel button
+button('Cancel', 'danger')

// Submit button (identical to submitButton mixin result)
+button('Submit', ['submit'])
```

Produces:

```
<a class="button success">Next</a>
<a class="button danger">Cancel</a>
<a class="button submit">Submit</a>
```
