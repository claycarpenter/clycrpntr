---
title: Build a Text Date Input with ngModel parsers and formatters
tags: javascript, angular
template: /base.jade
category: snippet
---

Angular's `ngModel` and its two-way binding to backing model properties is great. But what if we want the model property to be stored in a different format than what we're presenting to the user in the input? We're going to solve that problem today, with the help of `ngModel`'s parser and formatter pipelines. We'll build a new directive we can attach to any text input that will validate the user's date input, verifying that the date is formatted properly and is a real date. If the date input is valid, the directive will convert that string into a JS date. If the date input isn't valid, the directive will mark the input field as invalid.

The two keys to getting this solution working are the parser and formatter pipelines provided by `ngModel`. They have two different roles:

* Parsers convert the user's input into the appropriate value before that value is stored on the model. Parsers can also take responsibility for validating that input and setting the input's validity status. The final return value of the parser chain is sent directly to the model represented by `ngModel`.
* Formatters convert the model value into an appropriate textural representation for use in the input. These are effectively the opposite of the parser. Note that formatters are _only fired when the model is programmatically updated_ outside of `ngModel`. They won't be fired as part of the normal parser workflow. The final output of the formatters chain becomes the DOM value used in the attached `ngModel` controller.

Before we continue: The full source code for this example, along with the working demo, are available at [this Plunker](http://plnkr.co/edit/t9e9wlH1ekMpBTcp5L7L).

We begin by creating the basic directive definition for our new directs, `textDateInput`. The directive is restricted to attributes, and requires `ngModel`. To keep the directive declaration clean, we define the link function implementation in a separate function.

```
app.directive('textDateInput', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: textDateLink
  };

  function textDateLink(scope, element, attributes, ngModel) {
    // ...
  }
});
```

Now we can define the directive link implementation. I'll show you the whole implementation here, and then we'll walk through it step-by-step:

```
  function textDateLink(scope, element, attributes, ngModel) {
    // Simple date regex to accept YYYY/MM/DD formatted dates.
    var dateTestRegex = /\d{4}\/\d{1,2}\/\d{1,2}/;

    ngModel.$parsers.push(parser);
    ngModel.$formatters.push(formatter);

    function parser(value) {
      if (dateTestRegex.test(value) && !isNaN(Date.parse(value))) {
        // Input value passes basic date format tests. Parse and store Date.
        value = new Date(value);
        ngModel.$setValidity('textDate', true);
      } else {
        value = null;
        ngModel.$setValidity('textDate', false);
      }

      // Return value to store in model.
      return value;
    }

    function formatter(value) {
      var formatted = '';

      if (angular.isDate(value)) {
        formatted = value.getFullYear() + '/' + (value.getMonth() + 1) + '/' + value.getDate();
      }

      return formatted;
    }
  }
});
```

The link function implementation begins by declaring a date text regex. We'll use this regex to verify that the date meets the minimal requirement of conforming to an YYYY/MM/DD format (though either the month or day may be specified as a single number).

Next, we augment the `ngModel` parser and formatter pipelines with this directive's implementations:

```
ngModel.$parsers.push(parser);
ngModel.$formatters.push(formatter);
```

The directive's parser implementation, responsible for converting the user's input into the proper model value, looks like this:

```
function parser(value) {
  var modelValue;

  if (dateTestRegex.test(value) && !isNaN(Date.parse(value))) {
    // Input value passes basic date format tests. Parse and store Date.
    modelValue = new Date(value);

    // Consider input valid.
    ngModel.$setValidity('textDate', true);
  } else {
    // Clear the model value.
    modelValue = null;

    // Mark input as invalid.
    ngModel.$setValidity('textDate', false);
  }

  // Return value to store in model.
  return modelValue;
}
```

This parser function is run after every update that is collected from the associated `ngModel` controller. The incoming `value` is the user's latest input. The parser tests this input first against the simple data regex, and then using `Date#parse`. `Date#parse` will return `NaN` if the date is not valid, so these two tests let us be reasonably certain (at least, certain enough for this example widget) that it's safe to parse the date input and store the results. The parser does just that, storing the new Date as the `modelValue` and marking the input as valid. If the input isn't valid, the `modelValue` is set to null and the field is marked invalid. Finally, the `modelValue` is returned by the parser; this will become the new value of the property targeted by the `ngModel` controller.

The formatted implementation is simple. Responsible for converting the model value to an appropriate textual representation, it just checks whether the value is a JS Date object, and if so, provides a simple conversion into a "YYYY/MM/DD" formatted string:

```
function formatter(value) {
  var formatted = '';

  // Check to see if model value is a date.
  if (angular.isDate(value)) {
    // Model value is a date, convert to string in
    // YYYY/MM/DD format.
    formatted = value.getFullYear() + '/' + (value.getMonth() + 1) + '/' + value.getDate();
  }

  return formatted;
}
```

In order to test this directive we'll need a basic Angular app module. We'll also define a simple controller to contain our date model:

```
var app = angular.module('app', []);

app.controller('MainCtrl', function() {
  var vm = this;

  vm.date = new Date();
});
```

With the new date input directive build and a simple app module and controller to serve as scaffolding, we can now build out the page. We'll continue to keep things simple, building out a form with a single input, annotated with the `textDateInput` directive. The `ngModel` directive will be wired to the `date` property of `MainCtrl`. We present that same property in the next paragraph, as long as that property is defined. If the date can't be parsed (and the input isn't valid), then we present an "Invalid date" warning. Note that because we provided a formatter implementation to convert the initial JS Date to a string representation for the input, when the page first loads the current date is already populated in the date input.

```
<body ng-controller="MainCtrl as ctrl">
  <form name="ctrl.form">
    <p>
      <input name="date" ng-model="ctrl.date" text-date-input type="text">
    </p>
    <p>
      Model Date: {{ctrl.form.date.$valid ? ctrl.date : 'Invalid date' }}
    </p>
  </form>
</body>
```

This is just the beginning, of course. More advanced implementations would be able to accept arbitrary date formats, or perhaps provide input masking with the help of a module like [ui-mask](https://github.com/angular-ui/ui-mask). Any production-quality implementation should seriously consider using a strong date handler library like the excellent [moment.js](http://momentjs.com/). We've also used this technique to build inputs that reformat prices (to maintain two decimal places) and convert between human-friendly "percent off" integer values and pricing algorithm-friendly discount multiplier floating point numbers. Give it a try for yourself, and tell us about what you've build in the comments.
