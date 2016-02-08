---
title: Counting Outstanding Git Files
tags: git
template: /base.jade
category: snippet
---

A quick command to count all of the unmodified files in a git working copy.

Use `git status -su | wc -l`. This lists all outstanding files, including those that are untracked (`-u` flag) in a short/concise format (`-s` flag). The output is then fed to `wc`, which happily counts the lines. The whole thing looks like this when put into action:

```
work <> git status -su | wc -l
      14
```
