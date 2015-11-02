---
title: Deploying Non-Master Branches to Heroku
tags: git
template: /base.jade
category: snippet
---

Heroku's git-based deployment system deploys the code that's committed to the app's `master` branch. This works great for a lot of situations, but sometimes you want to push up code to a heroku server before moving that code to the project's `master` branch. To deploy a non-master branch, use the long-form of git push, specifying the local and remote branches separated by a colon. For instance, to deploy the local `feature-branch` up to the heroku server at `mydev`, use this command:

```
git push mydev feature-branch:master
```
