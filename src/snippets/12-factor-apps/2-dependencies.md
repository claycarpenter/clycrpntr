---
title: 12-Factor Apps Aspect 2: Dependencies
tags: 12factor
template: /base.jade
category: snippet
---

Dependencies are the concern of aspect #2 of 12-Factor apps. Specifically, [explicitly listing and isolating](http://12factor.net/dependencies) all of the application's dependencies.

The first part of this aspect, explicitly listing dependencies, involves both listing all dependencies your application has on outside components and services, as well as the specific version of those components, where possible. This includes libraries such as frameworks and shared libraries, but also such things as the version of that language you expect to use, as well as the versions of connector components such as database adapters or vendor SDKs. Real-world examples of this are seen in Ruby's Gemfiles or Node.js/npm's package.json.

Combining explicit dependency declaration with a package management system makes it easy to ensure that the application can be deployed on systems without any upfront configuration, while also keeping the dependency code outside of the application's source control repository. With such a setup, the application can be built by downloading the codebase and then running the package management system to satisfy any unmet dependencies.

Explicit dependency declaration ensures that the app is deployed with the same components each time its deployed. All developers will have the same packages, as will staging, test, and production systems. This helps to reduce the chance of "but it works on my system" responses to bug reports.
