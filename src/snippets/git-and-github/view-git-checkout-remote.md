---
title: Viewing Remote Repositories For a Git Checkout
tags: git
template: /base.jade
category: snippet
---

There are a couple of ways to view the remote repositories connected to a local git checkout. This can be very helpful when you're moving through many project checkouts, and you want to check or verify which repository a particular checkout is pointing to.

The simplest method uses `git remote -v`. It produces a summary output of all remote repos that will look like this:

```
origin  https://claycarpenter@github.com/claycarpenter/clycrpntr.com (fetch)
origin  https://claycarpenter@github.com/claycarpenter/clycrpntr.com (push)
```

More verbose output can be found by running the command `git remote show origin`. That expanded output primarily consists of branch details, including which branches remote branches are tracked and which local branches will push or pull to which remote branches. For this site, the output for `git remote show origin` looks like this:

```
* remote origin
  Fetch URL: https://claycarpenter@github.com/claycarpenter/clycrpntr.com
  Push  URL: https://claycarpenter@github.com/claycarpenter/clycrpntr.com
  HEAD branch: master
  Remote branches:
    gh-pages tracked
    master   tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```
