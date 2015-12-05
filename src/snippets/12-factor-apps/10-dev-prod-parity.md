---
title: 12-Factor Apps Aspect 10: Dev/Prod Parity
tags: 12factor
template: /base.jade
category: snippet
---

Aspect 10 of 12-Factor apps is dev/prod parity: keeping all environments--dev, test, staging, prod--as similar as possible.

Ensuring that there are as few gaps as possible between the development and production environments helps to ensure that what works in development will also work when the component is deployed to production. When gaps between development and production are few or--ideally--nonexistent, it's possible to quickly deploy new code, moving close to or achieving continuous deployment.

There are three areas where gaps can emerge between dev and prod:
* Time gap - lag between when the code is developed (from start to finish) and the time when the code is finally deployed.
* Personnel gap - difference between people who write the code (developers) and people who deploy the code (dev ops)
* Tools gap - difference between server runtimes and code dependencies between dev/staging/prod.

The time gap can be reduced by writing code in small increments, and deploying it soon thereafter. Focus on quick, small, self-contained iterations, deployed regularly.

Reduce the personnel gap by involving developers in the deployment process. Streamline the process so that non-dev ops personnel can be drive the changes (where appropriate). Keep the dev team involved in maintaining the app after it has been deployed.

Reduce the tools gap by developing in environments that are as close as possible to the production environment. Follow aspect #2 to list application dependencies so that applications can be assured of the same surrounding components as they move between systems. Resist the urge to use lightweight tools in local dev environments; work against production-like backing services to ensure compatibility and maximize the chances of finding small compatibility bugs.

Also note that dev/prod parity means all environments are the same, and that includes keeping various developers' systems as close as possible. That will make it easier to get new developers and their systems working with the app.
