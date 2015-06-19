---
title: Basic Local Branching and Merging
tags: git
template: /base.jade
category: snippet
---

Git makes feature branches a breeze, especially if they're only used locally (never pushed to a remote repo). This is a basic overview of the simple workflow of creating a local feature branch from the master branch, performing work, and then merging those changes back into to the master branch.

Begin by creating a new local branch:

```
git checkout -b feature-branch
```

That command will both create the new `feature-branch` and then switch the working set to that branch. With the new branch checked out, you can begin working as normal, making changes and committing them to the branch.

Once all the changes have been made and committed, switch back to to the `master` branch:

```
git checkout master
```

And then merge in the changes held in `feature-branch`:

```
git merge feature-branch
```

Now that `master` has been updated to includes the changes made on `feature-branch`, you can push those changes up to the remote repository with a simple `git push`.
