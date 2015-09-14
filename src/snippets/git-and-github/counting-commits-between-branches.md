---
title: Counting Commits Between Branches
tags: git
template: /base.jade
category: snippet
---

The Git `rev-list` command will help you determine how many commits separate two branches. There are two different styles allowed for this command:

```
git rev-list --count <newer branch> ^<older branch>
```

As well as this option:

```
git rev-list --count <older branch>..<newer branch>
```

I prefer the second format because I find it easier to type, but as far as I know (at this point) the two syntaxes are functionally equivalent.

The output from that command is a simple number indicating the number of commits separating the two branches:

```
> git rev-list --count master..styles
< 9
```

Note that if the "older branch" is actually more recent than the "newer branch", the return value will be `0`.

This technique also works using the `HEAD` pointer, so this command will tell you how many commits your current branch is beyond the `master` branch:

```
git rev-list --count master..HEAD
```

The command can also be abbreviated, as the `HEAD` seems to be assumed by git. The abbreviated form looks like this:

```
git rev-list --count master..
```
