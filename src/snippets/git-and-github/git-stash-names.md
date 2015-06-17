---
title: Naming Git Stashes
tags: git
template: /base.jade
category: snippet
---

By default, Git will automatically generate a name for your stashes. Those default names take the form "WIP on branchName". You can also provide a custom message to make reading through your stash list a bit easier.

To provide a custom stash name, you use the full stash save command and add a message to the end. For instance:

```
git stash save "Testing home page with Lato font family"
```

Note that while `git stash` is shorthand for `git stash save`, you cannot provide a message with just `git stash`.

The custom name will then be visible as the stash name in `git stash list` results:

```
stash@{0}: On gh-pages: Testing home page with Lato font family
```
