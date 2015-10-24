---
title: Breaking Out of Overflow Hidden with Positioned Elements
tags: css
template: /base.jade
category: snippet
---

The `overflow: hidden` property does a pretty good job of living up to it's name: hiding any overflow. One technique to break elements out of the `overflow` constraints is to use positioned elements.

This techniques requires a particular hierarchy in order to work:

1. The container element with the `overflow: hidden` property must have a positioned ancestor. This technique works best when that positioned ancestor is the parent of the `overflow: hidden` container element.
2. The breakout element must use `absolute` positioning.
3. The first positioned ancestor element of the breakout element must be that positioned ancestor of the `overflow: hidden` container element.

Check out this Codepen to see it in action:

<p data-height="268" data-theme-id="8344" data-slug-hash="WQXExx" data-default-tab="result" data-user="claycarpenter" class='codepen'>See the Pen <a href='http://codepen.io/claycarpenter/pen/WQXExx/'>Break out of overflow hidden with relative positioned elements</a> by Clay Carpenter (<a href='http://codepen.io/claycarpenter'>@claycarpenter</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Credit to [this Pen](http://codepen.io/bezoerb/pen/AGgcu/) by Ben for serving as a starting point for this example.
