---
title: Renaming Git Remotes
tags: git
template: /base.jade
category: snippet
---

Renaming a remote in Git is a pretty simple operation. The command looks like this:

```
git remote rename <current remote name> <new remote name>
```

For instance, to rename the `staging` remote to a more descriptive `staging-www`:

```
git remote rename staging staging-www
```
