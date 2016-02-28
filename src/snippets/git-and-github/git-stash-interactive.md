---
title: Partial Stashes with Git Stash Interactive Mode
tags: git
template: /base.jade
category: snippet
---

Git's `stash` command supports an patch/interactive mode that allows you to select exactly which hunks (collections of changed lines) to include during a stash save operation.

To enable this mode, use the `-p` or `--patch` flags. You'll immediately see the first hunk and a prompt that looks like this:

```
Stash this hunk [y,n,q,a,d,/,e,?]? ?
```

There are quite a few options available, as you can see from the current help menu:

```
y - stash this hunk
n - do not stash this hunk
q - quit; do not stash this hunk or any of the remaining ones
a - stash this hunk and all later hunks in the file
d - do not stash this hunk or any of the later hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help
```

Primarily I find myself using the commands `y - stash this hunk`, `n - do not stash this hunk`, and `a - stash this hunk and all later hunks in the file`.

Note that this interactive mode only works for changes to existing files, as it's not allowed to be run in conjunction with the include untracked (`-u`) flag.

Keep in mind that, much like a regular stash, these selective stash operations still roll back any stashed hunks.
