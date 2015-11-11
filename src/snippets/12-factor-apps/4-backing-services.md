---
title: 12-Factor Apps Aspect 4: Backing Services
tags: 12factor
template: /base.jade
category: snippet
---

Treat backing services are replaceable, interchangeable parts

For instance: SMTP servers can be local for dev environments. In prod environments, you would want to use a more robust service like Mandrill or Railgun.

Working with services like this means isolating and consolidating the interactions with those backing services. Have single points of contact with those services, and route all interactions with the service through those gateway components.

Determining which service to use should be stored in config files. See #3 for best practices; these values could likely change between environments.

This also extends to replacing one resource with another nearly identical resource when the first resource is misbehaving. Also applicable for failover situations? I think so.
