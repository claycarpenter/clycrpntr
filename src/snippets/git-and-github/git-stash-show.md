---
title: Showing Git Stashes
tags: git
template: /base.jade
category: snippet
---

Git allows you to take a peek at a stash without actually applying it. This is accomplished using the `show` option of the `git stash` command. The general syntax is:

```
git stash show [stash]
```

If the stash reference isn't provided, then the most recent stash (`stash@{0}`) is targeted by default.

By default, the output is a diffstat (equivalent to the command `git diff --stat`). However, `git stash show` accepts any format accepted by `git diff`, so using the `-p` flag will present the typical diff patch format.
