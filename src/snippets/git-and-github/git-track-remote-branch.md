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
git checkout -b <local branch> <remote name>/<remote branch>
```

If you're trying to pull down the `issue-42-fix` branch from the remote repository into a local branch named `bug-fix`, the command would look like this:

```
git checkout -b bug-fix origin/issue-42-fix
```

To avoid confusion, it's usually best to keep the local branch name identical to to the remote branch name. Creating a local branch that tracks a remote branch should typically look like this:

```
git checkout -b issue-42-fix origin/issue-42-fix
```

Because typing the branch name twice is a bit redundant, Git allows you to save time by running this shorthand command:

```
git checkout --track <remote name>/<remote branch>
```

So that same `issue-42-fix` branch checkout would look like this:

```
git checkout --track origin/issue-42-fix
```
