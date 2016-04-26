---
title: Quickly Amending The Last Commit in Git Without Changing The Commit Message
tags: git
template: /base.jade
category: snippet
---

Git provides the `--amend` option for altering the last commit. By default, this command (`git commit --amend`) will re-open the commit message for editing. Handy, but often I find that I just need to add an additional file or make a quick edit (say, removing a debug log or stray comment). In those cases, the existing commit message is usually still accurate after the commit manifest is altered, so I don't need to review or edit message. When that happens, I use the no-edit flag (`--no-edit`) to skip editing of the commit message altogether. The full command looks like this:

```
git commit --amend --no-edit
```

Thanks to Atlassian's [Git documentation](https://www.atlassian.com/git/tutorials/rewriting-history/git-commit--amend) for pointing this one out.
