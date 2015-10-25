---
title: Getting a Controller or Directive's Scope from the Browser Console
tags: angular, debugging, chrome dev tools
template: /base.jade
category: snippet
---

Angular provides access to controller and directive scopes through methods on its `angular.element` return object.

The general syntax is `angular.element(element).scope()` to retrieve the scope, and `angular.element(element).isolateScope()` to retrieve the isolate scope.

The element can be either a normal DOM element, or a jQuery element. Both of these options provide the same results:

```
// Normal DOM element, accessed via document.querySelector
angular.element(document.querySelector('your-directive-name')).scope();

// jQuery element, accessed... via jQuery
angular.element($('your-directive-name')).scope();
```

There's a shortcut for accessing the element when using Chrome: select the element (either via right-clicking and Inspect Element on from the browser, or selecting the element from the Elements tab of the Dev Tools) will cause `$0` to point to the element when referenced in the Dev Tools console. So you can then get to your target scope with `angular.element($0).scope()`.

Note that after making any data changes, you may need to call `$scope.$apply()` or `$scope.$digest()` in order to view the changes. For example:

```
angular.element($0).$apply();
angular.element($0).$digest();
```
