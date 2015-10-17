---
title: Git Version Control Shortcuts in Atom
tags: atom
template: /base.jade
category: snippet
---

Here are a few quick tips covering the Git and GitHub integrations in Atom. For more info, check out Atom's [Version Control documentation](https://atom.io/docs/latest/using-atom-version-control-in-atom).

### Find Modified and Untracked Files

Use the shortcut `cmd-shift-B` to pop up a fuzzy find window that only lists modified and untracked files. Note that this will show untracked, modified, and staged files.

### Atom as Git Commit Editor

Run this command to establish Atom as the default (command line) Git editor:

```
git config --global core.editor "atom --wait"
```

The next time a git commit is begun on the command line, Atom will spin up with the git commit message held in a new document. Make changes as necessary and save to store the commit message. Once you quit Atom, the commit will be finalized.

### GitHub Integrations

There are a handful of extra shortcuts available to projects hosted on GitHub:

* `alt-G O` - Open the current file on GitHub
* `alt-G B` - Open the blame of the current file on GitHub
* `alt-G H` - Open the history of the curent file on GitHub
