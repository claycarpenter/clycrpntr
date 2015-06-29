---
title: Listing Remote Tags
tags: git
template: /base.jade
category: snippet
---

By default, the `ls-remote` git command lists all references held in the targeted remote repository. With the addition of the tags flag, `--tags`, the `ls-remote` command output can be filtered to only show tag references.

The generic syntax for querying the tags on a remote repository is:

```
git ls-remote --tags [repository] [ref pattern]
```

That command asks git to list all tag references (held in `/refs/tags`) held in the targeted repository. If the repository isn't specified, then the origin repo for the current checkout will be targeted. A ref pattern can optionally be provided to filter out the matching references (in this case, the matching tag names).

The repository, if provided, can be either a git remote name or a valid URL. That means all of the following options are valid:

* `git ls-remote --tags` - looks to the `origin` remote.
* `git ls-remote --tags origin` - also targets the `origin` remote.
* `git ls-remote --tags https://github.com/claycarpenter/blocbox.git` - targets the remote at that GitHub URL. Using this form means you don't have to clone the repository before you list the tags.
* `git ls-remote --tags .` - targets the local repository. This should be equivalent to the list provided by `git tag -l`.

To filter the matching reference names, provide a ref name matching pattern. The pattern can include wildcards, such as `v1.*`. Note that a remote repository target must be provided in order to specify a ref name matching pattern (otherwise git will interpret the ref name matching pattern as a remote repo name).

As an example, to find all v1 tags on the `origin` repo, you could use this command:

```
git ls-remote --tags origin v1.*
```
