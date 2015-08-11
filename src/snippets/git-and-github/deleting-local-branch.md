---
title: Deleting Local Git Branches
tags: git
template: /base.jade
category: snippet
---

Deleting branches in Git is accomplished using a delete flag along with the `git branch` command. The delete flag--either `--delete` or the shorthand `-d`--is followed by the name of the tag (or tags, if you're deleting more than one tag at a time), like so:

```
git branch --delete <branch name>
```

Using the shorthand flag makes the command a bit shorter:

```
git branch -d <branch name>
```

This command will only work on branches that have been merged back into their parent. If you're sure you want to delete a branch containing commits that haven't been merged, you can force the operation using the `-D` flag:

```
git branch -D <branch with unmerged changes>
```

The `-D` flag is shorthand for this longhand flag combination:

```
git branch --delete --force <branch name>
```
