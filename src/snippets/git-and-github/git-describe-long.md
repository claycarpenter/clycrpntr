---
title: Git Describe Details
tags: git
template: /base.jade
category: snippet
---

Git's `describe` command produces different output depending on whether there are commits between targeted reference and the most recent tag for that reference.

For example, assume you've just tagged the `v1.0.0` release. If you immediately follow that with a `git describe` command, you'll see something like this:

```
$ git describe

v1.0.0
```

After tagging the release, you decide to continue working on the project and update the `Roadmap.md` document to start outlining the next release. After committing your changes, you're now one commit away from the tag's commit. Executing the `git describe` command will now produce a different output:

```
$ git describe

v1.0.0-1-ge083d2d
```

The output is telling you that the most recent tag name is `v1.0.0`, that the current commit is 1 commit away from that tag, and that the current commit object is `e083d2d` (abbreviated).

The format for this output is `<tag name>-<commits since tag>-g<current commit object abbr>`.
