---
title: 12-Factor Apps Aspect 12: Admin Processes
tags: 12factor
template: /base.jade
category: snippet
---

Aspect 12 of 12-Factor apps involves admin processes. The aspect recommends that all admin processes are run as one-off processes using the same environments and releases as the production applications.

Running admin operations as one-off processes requires that those processes be captured in the release code. This in turn requires the admin processes to be bundled with the regular code, which encourages developers to keep admin code in sync with regular release code.

Capture admin fixes in scripts, and commit those scripts to source control. One-time jobs frequently turn into recurring jobs. This also allows for time to review the fix, and makes it less likely that a change will be made without thinking through the consequences. It also makes it easier to reproduce the change so that it can be tested in other environments before being enacted in production systems.
