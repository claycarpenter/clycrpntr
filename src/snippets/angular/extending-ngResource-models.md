---
title: Extending ngResource Models
tags: javascript, angular
template: /base.jade
category: snippet
---

Angular's ngResource module--probably best known through its `$resource` service--does an excellent job of providing an ORM-like interface over RESTful resources. However, the models ngResource generates are incredibly basic. Being little more than plain JS objects with some handy promise resolution magic mixed in (or collections thereof), the models are effectively data transfer objects (DTOs). When the models lack the ability to perform any kind of business logic on their own, that logic ends up being implemented in controllers and directives. Splitting the logic from the model definition is problematic enough, but as the codebase grows, this architecture encourages duplication and redundancy.

Implementing model-related logic in the `$resource` prototypes solves a lot of these problems. Logic is centralized into one place, and that place is close to the original model definition. When we can move logic into the model, we also free up controllers, directives, and views from having to implement that logic.

In this example, we're going to build a very simple comments list display. We'll use a mock backend to serve up Comment models. Those Comment models will then be enhanced with some extra logic. Finally, we'll use those new methods in our view to make our presentation simpler and more expressive.

All of the code shown in this example, along with a working demo, is available in [this Plunker](http://plnkr.co/edit/HB24eK).

We begin with a basic HTML5 skeleton. We'll reference the required libraries (angular, ngResource, and ngMockE2E) and then list the application script file (`app.js`) and finally put a basic controller on the `body` tag:

```
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <meta charset="utf-8" />
    <title>AngularJS Plunker</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-resource.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-mocks.js"></script>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <script src="app.js"></script>
  </head>

  <body ng-controller="MainCtrl">
    <!-- Our comments presentation will go here -->
  </body>
</html>
```

Next, we'll start off the application script file by declaring the app module and its dependencies:

```
var app = angular.module('app', [
  'ngResource',
  'ngMockE2E'  
]);
```

In order to test the ngResource module, we'll need a mock backend for it to communicate with. The `$httpBackend` service provided by `ngMockE2E` does just the trick, allowing us to respond to a simple GET request with a list of mock comment data. That's accomplished with this line:

```
// Query; returns all comments.
$httpBackend.whenGET('/comments').respond(comments);
```

The mock backend will now respond to any (Angular `$http`-based) request with the array held in `comments`. That array is a combination of quotes from known authors and some random (hipster ipsum) jibberish from anonymous posters. The comments definition looks like this:

```
comments = [
  {
    id: 1,
    author: {
      name: 'Grace Hopper',
      email: 'grace@example.com'
    },
    commentBody: 'It is often easier to ask for forgiveness than to ask for permission.'
  },
  {
    id: 2,
    author: null,
    commentBody: 'Paleo roof party mumblecore ugh bushwick, four loko 3 wolf moon.'
  },
  {
    id: 3,
    author: {
      name: 'Linus Torvalds',
      email: 'linus@mailinator.com'
    },
    commentBody: 'I\'m doing a (free) operating system (just a hobby, won\'t be big and professional like gnu) for 386(486) AT clones.'
  },
  {
    id: 3,
    author: null,
    commentBody: 'Typewriter master cleanse umami humblebrag truffaut.'
  }
];
```

With the backend now stuffed with mocked data, we can now turn to our Comment model. We'll start with a typical `$resource` model definition, with the small exception that we'll capture the return value of the `$resource` call:

```
app.factory('Comment', ['$resource', function($resource) {
  var Comment = $resource(
    '/comments',
    {}
  );

  return Comment;
}]);

```

By capturing that `$resource` return value in `Comment`, when can then use the reference to add methods to `Comment`'s prototype. First, let's add a way to check whether the comment is anonymous or not. If a comment is anonymous, the author object is null. Instead of making a view check this for each comment, we can add a method to the prototype to encapsulate the logic:

```
Comment.prototype.isAnonymous = function Comment_isAnonymous() {
  return this.author == null;
};
```

Note that we give the `isAnonymous` prototype property a named function. This will help later in debugging, as the debugger will be able to print the name of the function in the stack.

With the anonymous helper method created, lets add a couple more methods to make it easier to get to the author data for posts. The first is `getAuthorName`, which either returns the defined author's name or `Anonymous` if the posting is anonymous. The other is `getAuthorEmail`, a simple convenience method to prevent views from having to reach deep into the Comment model data in order to get the value they're looking for.

```
Comment.prototype.getAuthorName = function Comment_getAuthorName() {
  if (this.isAnonymous()) {
    return 'Anonymous';
  }

  return this.author.name;
};

Comment.prototype.getAuthorEmail = function Comment_getAuthorEmail() {
  return this.author.email;
};
```

Finally, we can wrap up the application script with a very simple controller that queries the Comment service for a list of Comment models, and then makes those accessible on the controller's scope:

```
app.controller('MainCtrl', function($scope, Comment) {
  $scope.comments = Comment.query();
});
```

Now that we have the enhanced Comment models defined and available on the scope, we can write our simple presentation. Note that the view uses the Comment helper methods to make it easier to determine whether the comment should show author details or not.

```
<p>Comments:</p>
<ul>
  <li ng-repeat="comment in comments">
    <p>
      <b>{{ comment.getAuthorName() }}</b><i ng-if="!comment.isAnonymous()">- {{ comment.getAuthorEmail() }}</i>
    </p>
    <p>
      {{ comment.commentBody }}  
    </p>
  </li>
</ul>
```

There's certainly a whole lot more possible with these enhanced models than the limited examples we've explored here. Nonetheless, if you've been writing Angular with plain `$resource` models, this technique should go far in helping you DRY out your code.
