---
title: 12-Factor Apps Aspect 10: Dev/Prod Parity
tags: 12factor
template: /base.jade
category: snippet
---

Keep all environments--dev, test, staging, prod--as similar as possible.

Three gaps between dev and prod:
* Time gap - lag between when the code is developed (from start to finish) and the time when the code is finally deployed.
* Personnel gap - difference between people who write the code (developers) and people who deploy the code (dev ops)
* Tools gap - difference between server runtimes and code dependencies between dev/staging/prod.

Reduce the time gap be writing code in small increments, and deploying it soon thereafter. Quick, small iterations, deployed regularly.

Reduce personnel gap by involving developers in the deployment process. Streamline the process so that non-dev ops personnel can be drive the changes (where appropriate). Keep the dev team involved in maintaining the app after it has been deployed.

Reduce the tools gap by developing in environments that are as close as possible to the production environment.
List application dependencies (see #2) so that applications can be assured of the same surrounding components as they move between systems.

Resist the urge to use lightweight tools in local dev environments; work against production-like backing services to ensure compatibility and maximize the chances of finding small compatibility bugs.

Also note that this includes keeping various developers' systems as close as possible.
Consider using tools like Vagrant and Docker to help ensure that developers share common environments.
