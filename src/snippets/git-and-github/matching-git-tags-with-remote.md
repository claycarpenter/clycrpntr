---
title: Matching Local Git Tags to the Remote Repository
tags: git
template: /base.jade
category: snippet
---

To ensure that your local git repository's tags are identical to the remote, you have a couple options. You could list could list all of the remote server's tags (`git ls-remote --tags origin`), list all local tags (`git tag -l`) and then delete (`git tag -d <tag name>`) any mismatched local tags.

A simpler method was [described by Richard W on Stack Overflow](http://stackoverflow.com/a/5373319). The operation unfolds in two steps: first remove all local tags, then use a fetch operation to pull down any remote tags.

First, remove all local git tags by listing them and then deleting them in turn. Piping the output of the git tags list through `xargs` to the git tags delete command allows you to perform this operation with a single aggregate command:

```
git tag -l | xargs git tag -d
```

With all local tags removed, you can now fetch the remote's tags:

```
git fetch

```
