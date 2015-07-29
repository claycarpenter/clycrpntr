---
title: Class Attributes in Jade
tags: jade
template: /base.jade
category: snippet
---

Class attributes behave differently from other attributes in Jade. First, for basic static tag class declarations, the class literal syntax can be used:

```
p.warning.large Warning!
```

```
<p class="warning large">Warning!</p>
```

Tag classes can also be assigned with the `class` attribute. Unlike other attribute values, Jade allows for more can one `class` attribute value to be defined for a tag. For instance, the following three Jade statements produce identical HTML:

```
p.warning.large Warning!
p(class='warning large') Warning!
p(class='warning', class='large') Warning!
```

```
<p class="warning large">Warning!</p>
```

`class` attributes also accept array values:

```
- var classes = ['warning', 'large']
p(class=classes) Warning!
```

```
<p class="warning large">Warning!</p>
```

You can also mix and match `class` attribute values of both string and array:

```
p(class=['warning'], class='large') Warning!
```

```
<p class="warning large">Warning!</p>
```

Objects can also be used for `class` attribute values. In this case they serve as a map of class names to true or false values. If the class name has a `true` value, then the class will be added to the tag; otherwise it will be omitted. In the following example, the submit button will have an `enabled` class if the value of `isFormValid` is `true`, and a `disabled` class otherwise:

```
- var isFormValid = true;
button(class={enabled: isFormValid, disabled: !isFormValid}) Submit
```

```
<button class="enabled">Submit</button>
```
