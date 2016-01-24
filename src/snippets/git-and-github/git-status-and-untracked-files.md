---
title: Git Status and Untracked Files
tags: git
template: /base.jade
category: snippet
---

Git status provides three different modes for indicating how it will present untracked files:

* _no_ - Shows no untracked files.
* _normal_ - Shows untracked files and untracked directories. Doesn't show individual files in untracked directories.
* _all_ - Shows all untracked files, even if they're in untracked directories.

By default, git status operates under the _normal_ mode. You can switch the mode using the `--untracked-files=[<mode>]` flag. It also has a shorthand, `-u<mode>`. In both cases, if the mode is provided, _all_ is implied (not _normal_, as might be expected).

Some examples of valid status commands:

```
git status --untracked-files
git status --untracked-files=no
git status -u
git status -uno
```

Note that in the shorthand format, there is no space between the `u` and the mode.

More details can be found in the [Git Status documentation](https://git-scm.com/docs/git-status).
