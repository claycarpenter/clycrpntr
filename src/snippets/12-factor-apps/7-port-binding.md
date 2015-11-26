---
title: 12-Factor Apps Aspect 7: Port Binding
tags: 12factor
template: /base.jade
category: snippet
---

Aspect #7 of 12-Factor apps is port binding. Port binding requires that 12-factor apps communicate with the external world over a single network address, without relying on any external services or components in order service requests. From the [twelve-factor app site](http://12factor.net/port-binding):

> The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.

Creating a self-contained app that exposes its service over a single network address provides two benefits:

* Forces the app to provide a single service on a singe address. This provides a clear interface of any app clients. Architects can use this as a heuristic to identify when an app is trying to handle too many responsibilities. If app cannot provide a single service on a single endpoint, break app up into small services.
* A self-contained app has no external dependencies in order to run, which makes for more reliable and repeatable deployments.

The specific port that the app binds to does not necessarily need to align with the publicly exposed service interface:

> In a local development environment, the developer visits a service URL like http://localhost:5000/ to access the service exported by their app. In deployment, a routing layer handles routing requests from a public-facing hostname to the port-bound web processes. [12-Factor: Port binding](http://12factor.net/port-binding)

This allows production services to provide routing services between the publicly exposed network address and the internal app address. That routing layer could provide extra functionality around the service, such as security, auditing, or failover.
