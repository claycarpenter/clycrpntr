---
title: Debugging Angular from the Browser Console
tags: angular, debugging, chrome dev tools
template: /base.jade
category: snippet
---

No matter how well-designed your Angular app is, when components start interacting with the real world--and each other--unforeseen issues can arise. Being able to dive into the app's components, inspecting individual slices of behavior and state, is critical to efficiently resolving those issues. This article walks through some techniques we use at Made by Munsters to debug Angular apps with the help of our favorite browser's dev consoles.

### Controllers

You can access controllers through the dev console by using the `angular.element(element).controller(name)` function. This function looks for a controller associated with the target directive name; if no name is provided then it defaults to `ngController`. The search begins at the specified `element` and walks up the element's ancestors until it's found a matching controller or hit the root of the document.

Because `.controller()` defaults to `ngController`, if you want to locate a directive's controller, you'll need to specify that directive's registered name--either it's camel case name ('myCustomDirective') or the snake case name (`my-custom-directive`) will work. Note that this _is not_ the name of the directive's controller, if you've specified one through the directive's `controllerAs` attribute.

There's a shortcut for accessing the element when using Chrome: select the element (either via right-clicking and Inspect Element on from the browser, or selecting the element from the Elements tab of the Dev Tools) will cause `$0` to point to the element when referenced in the Dev Tools console. You can then use a statement like this to retrieve the controller:

```
// "Regular" controller
angular.element($0).controller();

// Directive controller
angular.element($0).controller('myCustomDirective');
```

Note that this search walks _up_ the DOM tree ancestry, so you'll need to click on the controller or directive element itself, or one of its descendants.

### Scopes

While we've moved away from writing controllers and directives that place their properties directly onto the scope, we still occasionally need to access the scope when debugging. Angular provides access to controller and directive scopes through a pair of methods on the decorated elements it returns from `angular.element`:

* `scope()` - Retrieves the scope of the element. If the element doesn't have it's own scope, angular will walk up the DOM tree to find the nearest ancestor element with a scope.
* `isolateScope()` - Retrieves the isolate scope of the element. Because the scope is isolated, this only works on the element declaring the isolate scope. If you're looking at elements in the DOM tree of your browser tools, you can identify these isolate scope elements by looking for the class `ng-isolate-scope`.

The element can be either a normal DOM element, or a jQuery element. Both of these options provide the same results:

```
// Normal DOM element, accessed via document.querySelector
angular.element(document.querySelector('your-directive-name')).scope();

// jQuery element, accessed... via jQuery
angular.element($('your-directive-name')).scope();
```

Again, often the easiest way of finding the element in Chrome is using the Inspect Element trick. Once you've started inspection of the targeted element, you can then get to your target scope with `angular.element($0).scope()`.

Note that after making any data changes, you may need to call `$scope.$apply()` or `$scope.$digest()` in order to view the changes. For example:

```
angular.element($0).scope().message = 'Hello World';
angular.element($0).scope().$digest();
```

### Services

You can retrieve any service through the dev console by using this construct:

```
angular.element(document).injector().get('service.name');
```

As we move more and more logic into services, this technique is quickly becoming my favorite way to debug. Because it works with the `document` reference and retrieves globally-accessible services, it can be quickly loaded from the browser console without having to identify a particular element context. Note that because this can access _any_ service, it works equally well for custom services as it does for stock Angular services like `$http`.

### Wrapping Up

The best debugging solution is to find bugs early, during unit testing of individual components. Test-driver development, or at least a handful of tests to cover common scenarios, is the preferred method of building Angular components. Trying to fix errors in the context of a live app will always be more difficult. Nonetheless, integration issues can be difficult to anticipate and there are always going to be new errors uncovered when large numbers of components begin interacting. In those cases, these console debugging techniques are essential for inspecting the app Adds quickly identifying the source of the issue. We hope these serve you as well as they've served us.
