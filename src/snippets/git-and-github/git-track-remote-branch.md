---
title: Tracking Remote Branches
tags: git
template: /base.jade
category: snippet
---

After cloning a remote Git repository, your local checkout will contain the default branch, which will in turn track the remote repository's default branch. Conventionally the default branch is master, and the remote repository default branch is referred to as origin/master.

If you'd like to switch to a branch held on the remote server, you'll want to create a new local branch that tracks that remote branch. You can accomplish this by checking out that branch while providing the name of the remote tracking branch.

The long form for this command is:

```
git checkout -b <branch> <remote name>/<branch>
```

If you're trying to pull down the `issue-42-fix` branch from the remote repository, the command would look like this:

```
git checkout -b issue-42-fix origin/issue-42-fix
```

Because typing the branch name twice is a bit redundant, Git allows you to save time by running this shorthand command:

```
git checkout --track <remote name>/<branch>
```

So that same `issue-42-fix` branch checkout would look like this:

```
git checkout --track origin/issue-42-fix
```
