---
title: Reverting Git Working Directory Changes With Git Reset Hard
tags: git
template: /base.jade
category: snippet
---

If you want to reset the Git working directory back to the state it was at the last commit, `git reset` can help you out. Git's reset operation will remove *all* changes to tracked files. If you're looking for a more targeted reversion, use `git checkout -f <filename>`.

`git reset --hard` will move the entire working directory back to the state it was at `HEAD`--the last commit. It's short for `git reset --hard HEAD`.

Note that `git reset --hard` will permanently revert all changes to tracked files, *without any warning or confirmation*. Only use this operation if you're sure of what you're doing.
