---
title: 12-Factor Apps Aspect 8: Concurrency
tags: 12factor
template: /base.jade
category: snippet
---

Aspect 8 of 12-Factor apps describes how a 12-Factor app handles scaling. Apps should consider processes to be first-class citizens, with different process types handling different types of work. The [12-Factor Concurrency page](http://12factor.net/concurrency) offers some examples of worker types:

> For example, HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process.

This factor has the biggest impact when the app has been designed to conform with aspect 6 and uses only stateless processes. A group of small, scalable, independent processes can be deployed as needed to scale the application out horizontally to meet demand. If the processes are focused on particular work types, then the allocation of those processes can be customized to meet the exact demands on the application at any point.

The distribution of number of processes for each process type is known as the *process formation*:

> It’s kind of like an army of ants. Each ant in and of their own can’t do a great deal but a lot of ants together can get a lot done. By having lots and lots of processes doing the work, we can scale independently and appropriately parts of our application that need that scale. [Pivotal](https://blog.pivotal.io/pivotal-cloud-foundry/features/all-things-pivotal-episode-7-a-look-at-12-factor-apps)

This aspect is also amplified if the application has been designed to conform with aspect 9, disposability. Scaling out by creating new processes is only feasible when processes can be easily created and reliably removed from service.

Note that just because a process is limited to a single work type doesn't mean it's literally limited to a single process:
> This does not exclude individual processes from handling their own internal multiplexing, via threads inside the runtime VM, or the async/evented model found in tools such as EventMachine, Twisted, or Node.js. [12-Factor: Concurrency](http://12factor.net/concurrency)
