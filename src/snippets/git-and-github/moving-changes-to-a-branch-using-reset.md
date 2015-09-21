---
title: Moving Commits To Branch Using Reset
tags: git
template: /base.jade
category: snippet
---

If you make commits to one branch that really should belong a new branch, you can save those commits on a new branch and then rollback the commits on the first branch. This is achieved in a three step process with the help of `git reset`. The workflow looks like this, picking up after the misplaced commits have already been completed on the first branch:

1. Create the new topic branch
2. Reset the original branch back to a spot immediately before the misplaced commits
3. Checkout the topic branch and continue working

For instance, this simple example will create a new `feature` file, save it to the `master` branch, and then roll back the `master` branch after that feature has been moved to a new topic branch:

```
# Begin on master branch

# Develop innovative new feature
$ echo "New feature" >> feature

# Add and commit the feature to master
$ git add feature && git commit feature -m "Adding new feature"

# Realize you wanted that feature on another branch.
# Create the new branch.
git branch new-feature

# Rollback changes to master
git reset --hard HEAD~1

# Switch to new-feature branch, and continue working.
git checkout new-feature
```
