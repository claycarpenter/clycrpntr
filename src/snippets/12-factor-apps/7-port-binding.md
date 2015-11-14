---
title: 12-Factor Apps Aspect 7: Port Binding
tags: 12factor
template: /base.jade
category: snippet
---

Present a clean and clear interface to external clients

The external interface port/address is not necessarily identical to the server processes' actual address/port. Allow for routing software to stand between the two.

> In a local development environment, the developer visits a service URL like http://localhost:5000/ to access the service exported by their app. In deployment, a routing layer handles routing requests from a public-facing hostname to the port-bound web processes. [12-Factor: Port binding](http://12factor.net/port-binding)

App should expose a single port through which its services can be accessed and consumed.

The app should be built to be independent of the mechanism through which it is exposed to the world. Different routing systems, such as web servers or simple proxies, should be able to sit between the app and its external clients without altering the app.

Use this single interface as the gateway for all external clients to interface with the app.

Use this as a metric to identify when an app is trying to handle too many responsibilities. If app cannot provide a single service on a single endpoint, break app up into small services.

