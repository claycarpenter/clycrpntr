---
title: Better Tab Switching in Atom
tags: atom
template: /base.jade
category: snippet
---

One thing that bugged me when I switched to Atom was the way tab switching was handled. I always wanted to cycle through tabs by how recently they were used, rather than the order they appeared in the tab bar. Luckily, an Atom package named (aptly) [Tab Switcher]() provides that functionality. Like other Atom packages, installation is simple: just find the `tab-switcher` package and install.

By default, Tab Switcher binds to the `alt-]` and `alt-[` keys for next and previous tab, respectively. To overwrite the existing tab switching on `ctrl-tab` and `ctrl-shift-tab`, add this to your keymap configuration:

```
"atom-workspace":
  "ctrl-tab": "tab-switcher:next"
  "ctrl-shift-tab": "tab-switcher:previous"
```
