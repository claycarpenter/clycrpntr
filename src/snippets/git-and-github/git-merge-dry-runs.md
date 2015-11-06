---
title: Performing a Dry Run of a Git Merge
tags: git
template: /base.jade
category: snippet
---

You can perform a dry run test for a merge by specifying that the merge operation should not commit or fast-forward the branch. This command will pull in the merge into the index of your working directory, but won't perform the commit:

```
git merge --no-commit --no-ff <branch>
```

You should see a message from git along the lines of "Automatic merge went well; stopped before committing as requested". From there, you can view the index to see what changes are staged, and of course look at the actual files to investigate further.

To accept the merge, just commit like you normally would. If you don't want to accept the merge, use the merge abort command:

```
git merge --abort
```

Thanks to Stack Overflow user *mipadi* for [describing this process](http://stackoverflow.com/a/501461/1148628).
