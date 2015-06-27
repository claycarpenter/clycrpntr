---
title: Listing Remote Branches
tags: git
template: /base.jade
category: snippet
---

You can use the `ls-remote` command with Git to query remote repositories and discover their branches. The generic syntax for querying remote branches is:

```
git ls-remote --heads [repository] [ref pattern]
```

That command asks git to list all branch references (held in `/refs/heads`) held in the targeted repository. If the repository isn't specified, then the origin repo for the current checkout will be targeted. A ref pattern can optionally be provided to filter out the matching references (in this case, the matching branch names).

The repository, if provided, can be either a git remote name or a valid URL. That means all of the following options are valid:

* `git ls-remote --heads` - looks to the `origin` remote.
* `git ls-remote --heads origin` - also targets the `origin` remote.
* `git ls-remote --heads https://github.com/claycarpenter/blocbox.git` - targets the remote at that GitHub URL. Using this form means you don't have to clone the repository before you list the branches.
* `git ls-remote --heads .` - targets the local repository. This should be equivalent to the list provided by `git branch`.

To filter the matching reference names, provide a ref name matching pattern. The pattern can include wildcards, such as `issue*`. Note that a remote repository target must be provided in order to specify a ref name matching pattern (otherwise git will interpret the ref name matching pattern as a remote repo name).

As an example, to find all feature branches on the `origin` repo, you could use this command:

```
git ls-remote --heads origin feature-*
```
