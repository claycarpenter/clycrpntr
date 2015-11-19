---
title: 12-Factor Apps Aspect 12: Admin Processes
tags: 12factor
template: /base.jade
category: snippet
---

Run admin code in the same type of environment as regular release code.

Never run a fix directly against a database; capture the fix in code instead.

Keep admin code in the same repository as release code, so that it doesn't get out of sync.

Capture admin fixes in scripts, and commit those scripts to source control. One-time jobs frequently turn into recurring jobs. This also allows for time to review the fix, and makes it less likely that a change will be made without thinking through the consequences. It also makes it easier to reproduce the change so that it can be tested in other environments before being enacted in production systems.
