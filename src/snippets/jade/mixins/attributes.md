---
title: Block Content in Jade Mixins
tags: jade
template: /base.jade
category: snippet
---

Jade mixins also receive an `attributes` object in a similar fashion to Jade tags.

In this example, a link button building mixin pulls the link's extra `class` and `href` attributes from the `attributes` provided by the mixin call statement:

```
// Link button mixin
mixin button(label)
  a.button(class=attributes.class, href=attributes.href)= label

// Next button
+button('Next')(class='success' href='#next')
```

Produces:

```
<a href="#next" class="button success">Next</a>
```

And attributes, using the `&attributes` construction, also work for mixins:

```
// Link button mixin with and attributes
mixin andAttributesButton(label)
  a.button&attributes(attributes)= label

// Next button2
+andAttributesButton('Next')(class='success' href='#next')
```

```
<a class="button success" href="#next">Next</a>
```

In the case that the mixin doesn't declare any arguments, the attributes are defined immediately after the mixin name:

```
mixin link
  a(class!=attributes.class, href!=attributes.href)!= attributes.label

+link(class='subtle' href='/legal' label='Terms')
```

Produces:

```
<a href="/legal" class="subtle">Terms</a>
```
