---
title: Storing Untracked Files in Git Stashes
tags: git
template: /base.jade
category: snippet
---

By default, Git stash operations will ignore untracked files, storing only changes to tracked files. Git stash can directed to also store untracked files in the stash. This feature is helpful when new files have been created that will eventually be added to source control, but aren't yet final enough to add to the commit stage.

To instruct git stash to save untracked files, add the include untracked flag: either `--include-untracked` or the helpful shorthand `-u`. This works both with the shorthand git stash save (`git stash`) as well as the full form (`git stash save`). All of these commands execute a git stash save operation that stores untracked files:

```
git stash -u
git stash save -u
git stash save --include-untracked
```
