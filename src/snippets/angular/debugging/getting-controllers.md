---
title: Getting a Controller or Directive's Scope from the Browser Console
tags: angular, debugging, chrome dev tools
template: /base.jade
category: snippet
---

You can access controllers through the command line by using the `angular.element(element).controller(name)` function. This function looks for a controller associated with the target directive name; if no name is provided then it defaults to `ngController`. The search begins at the specified `element` and walks up the element's ancestors until it's found a matching controller or hit the root of the document.

Because `.controller()` defaults to `ngController`, if you want to locate a directive's controller, you'll need to specify that directive's registered name--it's camel case name ('myCustomDirective'), *not* the snake case name (`my-custom-directive`).
