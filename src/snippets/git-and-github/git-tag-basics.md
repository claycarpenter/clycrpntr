---
title: Basics of Tagging in Git
tags: git
template: /base.jade
category: snippet
---

In order to make it easier ot refer to a certain point in a repository's lifetime, Git supports tags. Tags point to a specific commit, giving that commit a human-readable label. This technique is most commonly used to indicate releases.

As with many other components of Git, there are a lot of options available to manage tags. For this snippet, we'll focus on a few very basic steps:

1. Creating a tag
2. Pushing that tag to the remote repository
3. Checking out that tag

### Creating the tag

Creating a tag in Git takes the form of:

```
git tag -a <tag name> -m <commit message>
```

Tagging the first version of a software package with the tag `v1.0.0` would look like this:

```
git tag -a v1.0.0 -m "Release 1.0.0."
```

### Pushing the tag to the remote

Pushing a tag to a remote repository uses an identical syntax to that used for branches. The generic form of the command is:

```
git push <remote name> <tag name>
```

To push our new `v1.0.0` tag up to the `origin` remote, we could use this command:

```
git push origin v1.0.0
```

### Checking out the tag

In Git a tag is immutable--you can't actually change the code that the tag poitns to. But if you want to a copy of the code that's labelled by a tag, you can checkout that tag into a new branch.

The checkout command takes this form when using tags:

```
git checkout -b <branch name> <tag name>
```

To checkout our `v1.0.0` tag, we would use this command:

```
git checkout -b version-1 v1.0.0
```

That would create a new branch `version-1` that points to the version of the repository labelled by the tag. Note that any commits on this branch would change the branch, not the tag.
