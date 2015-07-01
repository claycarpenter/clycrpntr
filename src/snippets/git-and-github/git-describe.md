---
title: Finding Git Tags with Git Describe
tags: git
template: /base.jade
category: snippet
---

Git's `describe` command can be used to find the most recent tag for any particular commit. This works equally well for both specific commits as well as branches.

The basic syntax is:

```
git describe [commit-ish]
```

The commit-ish should be pretty self-explanatory; any acceptable Git commit-ish value will do. If none is provided, `git describe` appears to operate with a default value of `HEAD` for the commit-ish.

Note that by default, `git describe` will only show annotated tags. To also show lightweight tags, add the `--tags` flag.

`git describe` works against branches:

```
git describe some-feature-branch
```

...as well as abbreviated commit object:

```
git describe 18fdd914
```

By default, `git describe` will fail if the targeted reference doesn't have a tag in its history. This can be fixed by adding the `--always` flag, which will show abbreviated commit object for the target commit-ish. For instance, this is a sample result from using `git describe` on a branch that hasn't been tagged:

```
$ git describe

fatal: No tags can describe 'ec81ba9ddad9f7d4678019136365a79f05e72c98'.
Try --always, or create some tags.
```

Adding the `--always` flag shows the abbreviated commit object:

```
$ git describe --always

ec81ba9
```
