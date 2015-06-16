---
title: Cloning A Single Remote Branch in Git
tags: git
template: /base.jade
category: snippet
---

Cloning a single remote branch in Git can be very useful, especially when working with GitHub Pages. In that case, cloning the `gh-pages` branch alone will give you just the project's website.

First, the generic single-branch remote clone command:

```
git clone <repo url> --single-branch --branch <branch name>
```

And here's a command that will pull down this site into a local `gh-pages` directory:

```
git clone https://github.com/claycarpenter/clycrpntr.com --single-branch --branch gh-pages
```
