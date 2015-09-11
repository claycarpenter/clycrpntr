---
title: Building Sections with Mixins and Dynamic Tags
tags: jade
template: /base.jade
category: snippet
---

Combining mixins and dynamic tag creation makes it easy to produce lots of similar-but-not-identical chunks of code. For instance, this simple section generator:

```
mixin sectionator(level, title)
  section
    #{'h' + level}= title

    //- Yield to block
    block
```

That mixin will build a new section with a heading of the specified level. Any content under the mixin call's block will also be added to the results.

Calling the mixin looks like this:

```
+sectionator(1,'Main Title')
  p Primary lorem ipsum...

+sectionator(2, 'Secondary Section')
  p Less important lorem ipsum...
```

And yields these results:

```
<section>
  <h1>Main Title</h1>
  <p>Primary lorem ipsum...</p>
</section>
<section>
  <h2>Secondary Section</h2>
  <p>Less important lorem ipsum...</p>
</section>
```
