---
title: Deleting Git Stashes
tags: git
template: /base.jade
category: snippet
---

To delete a git stash from the stash stack, use the `git stash drop` command. By itself, the `git stash drop` command will delete the most recent stash on the stash stack. The command can also be given an optional stash reference to target a particular stash within the stack for deletion. For instance, this command drops the second-most-recent stash from the stack:

```
git stash drop stash@{1}
```
