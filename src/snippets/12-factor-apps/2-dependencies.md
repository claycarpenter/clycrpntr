---
title: 12-Factor Apps Aspect 2: Dependencies
tags: 12factor
template: /base.jade
category: snippet
---

List your dependencies, not just what you're dependent on, but exactly what versions (or version ranges) will satisfy those dependencies.
  Gemfiles accomplish this.

Ideally, be able to use a package management system to investigate the dependency declaration list, and automatically install/manage those dependencies for you.
  Examples: npm, gems, etc.

Every system should be running with the same software, as much as possible.

This includes everything from the components your app depends on to the VM version expected to run the code.

Does this also extend to DB migrations? I think there's an argument for that.

