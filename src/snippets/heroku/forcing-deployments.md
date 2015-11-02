---
title: Forcing Heroku Deployments With Git Push Force
tags: git
template: /base.jade
category: snippet
---

By default, Heroku's git-based deployment system won't allow you to deploy (push) a non-fast-forward commit. This can be a problem in a couple cases, such as when you want to deploy older code to an existing server, or just want to re-run the build (possibly after making some environment configuration changes).

To get around this, use the "force" mode of git push to force the deployment. Force mode can be indicated using either the `-f` or `--force` flags. To force a deployment to the Heroku remote `mydev`, use this command:

```
git push -f mydev
```
