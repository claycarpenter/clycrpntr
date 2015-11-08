---
title: 12-Factor Apps Aspect 1: Single Codebase
tags: 12factor
template: /base.jade
category: snippet
---

Use a single codebase.

Working with something that's well supported--GitHub, BitBucket, etc.--enhances team productivity and provides a platform for team collaboration.

New versions are feature branches, not forked repositories.

The same codebase deploys to dev, test, staging, and production environments. The only changes should be to environment configuration (see #3)

Avoid creating forks to handle "customized" software requests to suit specific business clients. Isolate those changes into separate modules, and then allow the software to load those modules via dependency management (#2).

