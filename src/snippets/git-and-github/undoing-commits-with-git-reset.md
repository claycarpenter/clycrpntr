---
title: Undoing Commits in Git with Git Reset Hard
tags: git
template: /base.jade
category: snippet
---

Git's reset operation can be used to completely wipe out commits. Resetting to a previous commit, along with the `--hard` flag, will overwrite any commits that came after the target previous commit.

To remove the previous commit, use this command:

```
git reset --hard HEAD~1
```

You can also target specific commits using the commit's hash:

```
git reset --hard fb4003
```

Note that this permanently removes all commits between the `HEAD` and the targeted commit. Git assumes you know what you're doing and won't issue a warning. Use this operation only if you're sure of what you're doing.
