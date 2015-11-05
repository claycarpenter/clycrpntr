---
title: Cleaning Out Untracked Files With Git Clean
tags: git
template: /base.jade
category: snippet
---

Git clean cleans up untracked files. This is great for cleaning up your working directory after a `git checkout` or `git reset` operation, or after a messy build.

Git clean's operations are irreversible, so by default it requires an `-f` flag in order to actually perform the requested operation. So the most basic operation looks like this:

```
git clean -f
```

### Preview

Clean also allows you to preview the results of the command before executing with the `-n` flag: `git clean -n`.

### Remove directories

By default, clean only removes untracked files in the current directory. You can ask it to also remove untracked directories with the `-d` flag: `git clean -df`.

### Removing ignored files

There are two different ways to delete files in git's ignore list:

* `-x` - Delete ignored files *alongside* any other untracked files.
* `-X` - Delete *only* ignored files.

### Interactive mode

Finally, git clean also offers an interactive mode, using the `-i` flag. It allows you to interactively select which files will be deleted. Note that this mode doesn't require the addition of an `-f` flag, as you'll be given a chance to confirm any deletions through the interactive prompts.
