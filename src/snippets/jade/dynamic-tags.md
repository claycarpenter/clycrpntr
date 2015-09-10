---
title: Jade Dynamic Tags
tags: jade
template: /base.jade
category: snippet
---

Jade supports dynamic tags, but string interpolation is required to get it working as expected.

If you just try to use a variable as the tag, Jade will interpret the variable name as the tag name. So this:

```
//- This doesn't work!
- var tagName = 'span'
tagName Lorem ipsum
```

Yields the wrong results:

```
<tagName>Lorem ipsum</tagName>
```

String interpolation is necessary to inform Jade that it should get the tag name from the variable contents rather than the variable name itself. Updating the previous example to use string interpolation, we get the correct results:

```
//- This works
- var tagName = 'span'
#{tagName} Lorem ipsum
```

```
<span>Lorem ipsum</span>
```

If you want to use this dynamic tag technique with tag interpolation, you'll still need to use string interpolation around the tag name. So using that same `tagName` variable within tag interpolation looks like this:

```
p Lorem ispum #[#{tagName} inner tag contents] dolor sit amet...
```

```
<p>Lorem ispum
  <span>inner tag contents</span> dolor sit amet...
</p>
```
