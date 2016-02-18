---
title: Configuring Atom UI Element Font Sizes
tags: atom
template: /base.jade
category: snippet
---

Unlike the editor panel fonts, it appears that the only way to change the font size used in Atom UI elements is through the user stylesheet.

In order to do this, open up your user stylesheet in Atom (it's `Cmd+Shift+P` on a Mac to open up the command palette, and then find *Application: Open your stylesheet*). Once that's open, add this new CSS rule to change the font size on the Atom UI elements:

```
// Set the font size for the UI elements of Atom.
html,
body,
.status-bar,
.tree-view,
.tab-bar .tab,
linter-message {
  font-size: 9px;
}
```

Thanks to GitHub users benogle and elektronik2k5 for pointing out these style rules in [this Atom issue](https://github.com/atom/atom/issues/2530).
