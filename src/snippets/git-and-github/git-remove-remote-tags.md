---
title: Removing Remote Tags in Git
tags: git
template: /base.jade
category: snippet
---

Removing a tag that has been pushed to the remote server is a simple two step process. First, delete the local tag:

```
git tag -d <tag name>
```

Then push a null reference to the remote in place of the current tag reference:

```
git push origin :refs/tags/<tag name>
```

Note that you can perform those two steps in any order. I think it makes the most sense to delete locally before remotely, but the flexibility is all yours.

Many thanks to Nathan Hoad for [detailing this technique](https://nathanhoad.net/how-to-delete-a-remote-git-tag) in his blog.
