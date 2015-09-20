---
title: Amending The Last Commit with Git Reset
tags: git
template: /base.jade
category: snippet
---

The easiest and most direct method of altering the last commit in git is using `git commit --amend`. Git's reset operation can also be used, although it's a bit more verbose.

The general sequence looks like this:

1. Make original commit
2. Use git reset to move back to the previous commit, adding those committed files back into the staging area
3. Change the index if necessary
4. Commit again, starting with the commit message from the commit you're amending

The operations look like this in action:

```
# First, incomplete changes
$ echo "Some new data" >> new.file

# Add and commit new.file
$ git add new.file && git commit -m "Adds new file"

# Reset back to previous commit
$ git reset --soft HEAD^

# Update file data forgotten in first commit
$ echo "Even more data!" >> new.file

# Add changes to index
$ git add new.file

# Commit updates
$ git commit -a -c ORIG_HEAD
```

That last command is important: it targets `ORIG_HEAD`, which was created by the `git reset --soft` operation and contains the commit details from the commit to be amended.
