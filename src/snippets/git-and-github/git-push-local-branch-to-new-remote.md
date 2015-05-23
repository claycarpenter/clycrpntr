---
title: Creating Remote Branches From Local Branches
tags: git
template: /base.jade
category: snippet
---

After creating a local branch and committing some work to that branch, you might want to copy that branch to the remote repository so that it can be shared with others.

To do so, you can use the `git push` command while telling git to push the branch to a remote server:

```
git push -u <remote name> <branch name>
```

That will push the local branch identified by `branch name` to the specified remote, creating a new branch with the same name in that remote repository. For example, to push a `new-feature` branch up to the `origin` server, the command would be:

```
git push -u origin new-feature
```

If you would prefer to give the new remote branch a different name from that of the local branch, you can use this longhand format to specify both the local and remote branch names:

```
git push -u <remote name> <local branch name>:<remote branch name>
```
