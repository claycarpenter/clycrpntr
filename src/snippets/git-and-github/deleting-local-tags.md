---
title: Deleting Local Git Tags
tags: git
template: /base.jade
category: snippet
---

Deleting local git tags is easy. Just specify the delete flag--either `--delete` or the shorthand `-d`--and the tag name to delete. The general syntax looks like this:

```
git tag --delete <tag name>
```

Using the shorthand flag makes the command a bit shorter:

```
git tag -d <tag name>
```

To delete the `v1` tag name, use this command:

```
git tag --delete v1
```
