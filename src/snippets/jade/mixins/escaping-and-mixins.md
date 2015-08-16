---
title: Default Arguments for Jade Mixins
tags: jade
template: /base.jade
category: snippet
---

Jade takes two different approaches when it comes to escaping mixin attributes and arguments. Mixin arguments aren't escaped, but mixin attribute values are. That means when you write out attribute values, you should avoid escaping them a second time. For instance, using normal (escaped) output of the `label` attribute value here results in a double ampersand in the output:

```
mixin linkOfNoEscape
  a(class=attributes.class, href=attributes.href)= attributes.label

+linkOfNoEscape(class='subtle' href='/legal' label='Terms & Conditions')
```

Produces:

```
<a href="/legal" class="subtle">Terms &amp;amp; Conditions</a>
```

Not exactly what we're looking for. To fix that, render the attribute values using the unescaped syntax (`!=`), like so:

```
mixin link
  a(class!=attributes.class, href!=attributes.href)!= attributes.label

+link(class='subtle' href='/legal' label='Terms & Conditions')
```

Produces:

```
<a href="/legal" class="subtle">Terms &amp; Conditions</a>
```

Though attribute values are escaped when passed into the mixin and therefore don't need to be escaped a second time, argument values aren't escaped when passed into the mixin and can therefore use normal (escaped) output. Rewriting the above example to provide the `label` value as an argument means that value can use the typical rendering:

```
mixin labelledLink(label)
  a(class!=attributes.class, href!=attributes.href)= label

+labelledLink('Terms & Conditions')(class='subtle' href='/legal')
```

Produces:

```
<a href="/legal" class="subtle">Terms &amp; Conditions</a>
```
