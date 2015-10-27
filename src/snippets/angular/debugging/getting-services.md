---
title: Getting an Angular Service from the Browser Console
tags: angular, debugging, chrome dev tools
template: /base.jade
category: snippet
---

You can access services through the command line by using the `angular.element(element).injector().get(serviceName)` function. This function will find the nearest element with an injector, and then use that injector to look up the service by its name. Because services are global (and singletons), this function should perform the same no matter what element you target on the page (assuming you do target an element that's a descendant of the `ngApp` directive).

If you have your `ngApp` directive declared on the `html` element, you can use this statement to retrieve any service: `angular.element(document).injector().get(serviceName)`.
