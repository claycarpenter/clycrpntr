---
title: 12-Factor Apps Aspect 11: Logs
tags: 12factor
template: /base.jade
category: snippet
---

Logs capture the history of your app's execution; they are necessary for insight into the operation of the app.

Logging should be sent to stdout. On dev systems, this output is immediately visible to the developer. In test/staging/production environments, this output can be captured and collected into a central aggregated event log.

Logs should not be sent to local files. This introduces a stability/security risk, as logs could grow in size until they consume the available disk space. Local files are also harder to collect together in order to create an app-wide (rather than just server-wide) view of the application's operations.

Writing logs to stdout frees the application from having to know about what happens to those logs. This allows log handling to be configured on a per-environment basis, and allows different log handling solutions to be swapped in and out as business requirements change.

Ideally, send logs to some system that's capable of analysis and reporting.
See logs not just as debugging tools, but as valuable insight that should be regularly (if not continuously) monitored, even when the system is "running fine".

Consider long-term archiving of logs, as this can assist in determining when errors were introduced, if those errors weren't immediately apparent.
