---
title: Listing Only Top-Level npm Dependencies
tags: npm, node.js
template: /base.jade
category: snippet
---

I often find myself asking:  what modules do I currently have installed, and what are their versions? This goes for both the current script I'm working on, as well as the global node installation.

By default, `npm ls` will list the full dependency tree for whatever target installation you point it to. This verbosity of this output frequently obscures the information I'm looking for. 

Instead, I prefer to ask for only the top-level dependencies. `npm ls` can be constrained to only report on those first level modules by using the `--depth=0` flag. 

This will retrieve the top-level dependencies for the current working directory:

```
npm ls --depth=0
```

The same syntax works for investigating which modules are installed globally:

```
npm ls -g --depth=0
```
