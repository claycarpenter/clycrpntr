---
title: 12-Factor Apps Aspect 9: Disposability
tags: 12factor
template: /base.jade
category: snippet
---

The ninth aspect of 12-Factor apps is disposability: processes should be fast to start up and graceful and easy to shut down. When processes are quick to start up and shut down, they can be readily deployed to meet increased demand, and then removed from service as a demand spike falls back to normal.

In order to support quick startup and shutdown operations, processes should be built with the assumption that they can be started and stopped at any time. Both creating and destroying should be quick, reliable, and repeatable processes. Server processes should clean up after themselves as the shut down. This includes finishing any outstanding requests pending against the server. And locked resources, database transactions, or open connections should be closed/terminated cleanly.

Server processes that aren't shut down cleanly shouldn't leave the system in a poor state. Crashes happen, and they shouldn't disable the system. Part of being able to shut down and clean up (and crash, to some extent) gracefully is limiting the amount of work you have outstanding. Processes should be short, concise, atomic. Long-running, complex transactions will always be difficult to cleanly stop.

Being able to create and destroy quickly is essential to being able to scale, as defined in #8. It's also a lot easier to build disposable processes when the application is designed to be stateless, as per aspect #6.
