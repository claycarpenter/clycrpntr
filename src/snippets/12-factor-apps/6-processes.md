---
title: 12-Factor Apps Aspect 6: Processes
tags: 12factor
template: /base.jade
category: snippet
---

The sixth factor of 12-Factor apps is stateless processes. All 12-Factor apps should be served from an environment hosting one or more stateless processes. Stateless processes share nothing--they remember nothing from previous transactions. If any state needs to be maintained, that responsibility should be delegated to a collective memory, provided by a service such as a database or shared/distributed cache system.

Conforming apps should never assume that the same server will serve two subsequent requests. The same goes for clients--they should not rely on talking to the same server during sequential requests.

Keeping processes stateless improves an app's resiliency by keeping the application and its operations lightweight and interchangeable. Stateless processes are all equally capable of serving incoming client requests, so adding new servers to meet increasing demand, or swapping out an existing, faulty server with a working backup has no negative effect on client transactions. This improves the load distribution capabilities of the app.

Additionally, applications that are built within a stateless design constraint necessarily keep their operations small and atomic. This means that it's far less likely that a mid-operation failure will leave the system in a corrupted state.
