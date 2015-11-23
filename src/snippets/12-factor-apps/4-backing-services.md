---
title: 12-Factor Apps Aspect 4: Backing Services
tags: 12factor
template: /base.jade
category: snippet
---

Factor 4 of 12-Factor apps is backing services. Specifically, treating backing services as attached resources that can be swapped out as needed.

Some examples of backing services include:

* Databases or datastores
* Caching systems
* Mailing systems
* Message queues
* Background/long-running-process queues

Treating backing services are replaceable, interchangeable parts means that the application minimizes its exposure to the details of the service. Service endpoints or URLs should be contained in configuration variables (see aspect #3 for more on environment configurations), and service adaptors should present a uniform interface for the application to use to interact with any particular service that fulfills those service requirements.

Working with services like this means isolating and consolidating the interactions with those backing services. Have single points of contact with those services, and route all interactions with the service through those gateway components.

When backing services are swappable and replaceable, the most appropriate service can be selected for a given environment. For instance: basic local SMTP servers can be used for dev environments. When that same codebase moves to a production environment, you'd likely want to use a more robust mailing service like Mandrill or Railgun.

Finally, swappable services also allows for more reliability in the overall app system. If one backing service is misbehaving--say, a certain cache or DB server is having a connectivity issue--it can be replaced with a waiting standby for a minimum in disruption to the system services.
