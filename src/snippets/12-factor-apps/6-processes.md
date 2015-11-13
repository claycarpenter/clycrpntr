---
title: 12-Factor Apps Aspect 6: Processes
tags: 12factor
template: /base.jade
category: snippet
---

Apps should be served by processes that are stateless.

Any state that needs to be maintained should be held in a back service, such as a database.

Keeping processes stateless keeps them lightweight and, most importantly, interchangeable. This brings advantages in scalability (increase or decrease number of servers easily) or in replacing faulty/errant servers. Both should be able to be done with a minimum of client/customer disruption (no disruption, if possible).

Stateless processes also allow for better load distribution/load balancing.

Conforming apps should never assume that the same server will serve two subsequent requests.

For highly volatile session data that is expected to expire regularly with large amounts of churn, use shared key/value cache systems such as Redis, etc.

