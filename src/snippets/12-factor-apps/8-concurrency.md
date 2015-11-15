---
title: 12-Factor Apps Aspect 8: Concurrency
tags: 12factor
template: /base.jade
category: snippet
---

Build your app with small, scalable, independent processes.

Only really possible once app is already running as stateless processes, per #6.

Have separate process types for different types of work. Example: web workers, message queue handlers, long-running background processes, reporting, etc.

Allows your services to be created as needed in order to serve changing demands on the entire app.

Just because a process is limited to a single work type doesn't mean it's literally limited to a single process:
> This does not exclude individual processes from handling their own internal multiplexing, via threads inside the runtime VM, or the async/evented model found in tools such as EventMachine, Twisted, or Node.js. [12-Factor: Concurrency](http://12factor.net/concurrency)

The distribution of number of processes for each process type is known as the process formation.

> It’s kind of like an army of ants. Each ant in and of their own can’t do a great deal but a lot of ants together can get a lot done. By having lots and lots of processes doing the work, we can scale independently and appropriately parts of our application that need that scale. [Pivotal](https://blog.pivotal.io/pivotal-cloud-foundry/features/all-things-pivotal-episode-7-a-look-at-12-factor-apps)

Being able to scale out easily depends on #9 - Disposability.
