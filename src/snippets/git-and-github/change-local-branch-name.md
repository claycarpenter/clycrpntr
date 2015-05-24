---
title: Changing Local Git Branch Names
tags: git
template: /base.jade
category: snippet
---

There are two ways to rename a local Git branch. The longhand syntax works regardless of which branch you currently have checked out:

```
git branch -m <old branch name> <new brach name>
```

The `-m` flag is an abbreviation of "move". It comes from the idea that moving and renaming are equivalent. If you find "move" easier to remember than the rather amibiguous `-m`, you can also use the longform `--move` flag, like so:

```
git branch --move <old branch name> <new branch name>
```

If you already have checked out out the branch that you'd like to rename, you can use a shortcut and only specify a single branch name. Git will assume that you want to rename the currently checked out branch to the specified branch name. The shorthand command looks like this:

```
git branch -m <new branch name>
```
