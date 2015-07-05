---
title: Basic Git Stash Usage
tags: git
template: /base.jade
category: snippet
---

Git stash allows you to store your current changes while also clearing out the working directory. At its most basic, using Git `stash` involves two commands: `git stash` and `git stash pop`. The first command, `git stash`, will save any uncommitted changes in your working directory to the top of the stash stack. The second command, `git stash pop`, will apply the top set of changes in the stach stack to your current working files.

Git maintains stashes in a stash stack, which orders stashed in reverse chronological order (the top stash in the stack is the most recently stored stash). You can see a full list of the stashes help by Git by using the `git stash list` command. Stashes in the stack all have an index, beginning at zero for the top stash. You can pop any stash from the stack using it's index. For instance, this command will pop and apply the third most recent stash in the stack:

```
git stash pop stash@{2}
```

Stash acts slightly different from the commit operation. Like commit, stash will ignore any changes in files that aren't currently tracked by Git. Unlike commit, stash will store any changes to any tracked files, regardless of whether they've been staged for commit or not.
