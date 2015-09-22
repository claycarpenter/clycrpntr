---
title: Recovering Deleted Files With Git Checkout
tags: git
template: /base.jade
category: snippet
---

Git checkout can be used to recover accidentally deleted files. For this to work, the files must have been added to version control *before* they've been accidentally deleted. So be careful with your accidents ;).

Assume that the file `fake` has been added to source control. If that file was deleted, and the deletion wasn't committed, then the `fake` file can be retrieved with this command:

```
git checkout fake
```

This command is effectively shorthand for `git checkout HEAD fake`. It works be checking out the version of `fake` still stored at `HEAD`.

If the deletion has been committed, the file can still be retrieved. Just selectively checkout the version of the file that you'd like to recover. This example illustrates adding a `fake` file, deleting the file, and then recovering the file:

```
# Create fake file
$ touch fake

# Add and commit fake file
$ git add fake && git ci fake -m "Adding fake file."

# Delete fake file and commit deletion
$ git rm fake && git ci fake -m "Deleting fake file."

# Retrieve the fake file from the preceding commit
$ git checkout HEAD~1 fake
```

Note the last command: `git checkout HEAD~1 fake`. This command checks out the `fake` file from the second-most-recent commit (the most recent commit is represented by `HEAD`). That second value is a commit-ish, so you could also target a specific commit using its hash like `git checkout 614839fb fake`.
