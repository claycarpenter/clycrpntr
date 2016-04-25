---
title: Viewing Diffs Inside Commit Comments
tags: git
template: /base.jade
category: snippet
---

Being able to review a diff while I'm writing up a commit message helps me write more accurate and comprehensive messages. Using the `--verbose` flag when committing in Git will append the diff onto the end of the commit message, so you can see what you've done while you're writing the commit message.

The full command looks like this:

```
git commit --verbose
```

I usually use an aliased form of this command with the shortcut `cv`. This is the alias declaration (from inside `~/.gitconfig`):

```
[alias]
  cv = commit --verbose
```
