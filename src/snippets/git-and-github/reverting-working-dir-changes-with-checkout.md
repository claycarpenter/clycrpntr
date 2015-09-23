---
title: Reverting Git Working Directory Changes with Checkout
tags: git
template: /base.jade
category: snippet
---

Git checkout can be used to revert changes in the local working directory. It does this by checking out an earlier copy of the targeted file, overwriting the changes in the local directory.

To just revert a file to the state is had in the previous commit, you can use one of these two commands:

```
git checkout -f <filename>
```

Or:

```
git checkout -- <filename>
```

Both of those commands seem to operate identically.

Note that this will permanently remove the file changes, so only perform these operations if you're sure you don't want to keep those modifications around anymore.
