---
title: Temporarily Disabling Email Sending In Rails
tags: rails
template: /base.jade
category: snippet
---

Frequently, when I'm trying test something out in the Rails console, or when I'm using a Rake task to generate test data, I don't want my actions to generate real emails. Real emails are slower, use up my Mandrill account's quota, and need to be cleaned out of the inboxes.

To temporarily disable email, use this simple one-line statement:

```
ActionMailer::Base.delivery_method = :test
```

This will disable email for the current session--be it a Rails console session or a Rake task--without affecting the general configuration of the app. So your development environment can remain configured to send out real emails (always a good idea to work in an environment as close to prod as possible) while you can selectively disable those emails for a few situations. Best of both worlds.
