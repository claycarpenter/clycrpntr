---
title: Getting a Controller or Directive's Scope from the Browser Console
tags: angular, debugging, chrome dev tools
template: /base.jade
category: snippet
---

You can access controllers through the command line by using the `angular.element(element).controller(name)` function. This function looks for a controller associated with the target directive name; if no name is provided then it defaults to `ngController`. The search begins at the specified `element` and walks up the element's ancestors until it's found a matching controller or hit the root of the document.

Because `.controller()` defaults to `ngController`, if you want to locate a directive's controller, you'll need to specify that directive's registered name--either it's camel case name ('myCustomDirective') or the snake case name (`my-custom-directive`) will work.

The works best in Chrome after locating the controller or directive on screen and right-clicking to inspect the element. Once that element has been selected, it's available in Chrome under the special variable name `$0`. You can then use a statement like this to retrieve the controller:

```
// "Regular" controller
angular.element($0).controller();

// Directive controller
angular.element($0).controller('myCustomDirective');
```

Note that this search walks *up* the DOM tree ancestry, so you'll need to click on the controller or directive element itself, or one of its descendants.
