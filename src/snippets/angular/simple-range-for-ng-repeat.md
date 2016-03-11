---
title: Creating a Simple Range for ngRepeat
tags: javascript, angular
template: /base.jade
category: snippet
---

Occasionally I need to print out a fixed range of values using `ngRepeat` in Angular. Scenarios have included printing out a set of five rating inputs and building a 3x3 grid. There isn't any in-built support for simply iterating a certain number of times in Angular, so one solution is dynamically creating an array full of the numbers needed to be iterated over. The function looks like this:

```
app.controller('MainCtrl', function($scope) {
  $scope.range = function(start, stop) {
    var range = [];  

    for (var i = start; i <= stop; i++) {
      range.push(i);
    }

    return range;
  }
});
```

The new `range` function can be used like this:

```
<body ng-controller="MainCtrl">
  <p>Range: 1 to 5</p>
  <ul>
    <li ng-repeat="i in range(1, 5)">{{ i }}</li>
  </ul>
</body>
```

The full example is available in [this Plunker](http://plnkr.co/edit/G0jUc2VWy1HcmYwdiTzn).
