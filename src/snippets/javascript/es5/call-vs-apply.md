---
title: Call vs Apply
tags: javascript
template: /base.jade
category: snippet
---

Two early methods for changing the context that a function executes within are the JS function methods `call` and `apply`. Both operate to change the `this` variable for the function they're called on.

For instance, we have this very basic program for barnyard animals:

```
var cow = {voice: 'moo'};
var chicken = {voice: 'cluck'};

function speak() {
  console.log('I say', this.voice + '!');
}
```

The `speak` function can be given an animal objects as the function's `this` context via `call` or `apply`, effectively allowing the function to operate similar to how member functions perform in traditional OO languages. The following two calls are identical:

```
speak.call(cow);
speak.apply(cow);
```

The difference between `call` and `apply` is in how they receive function arguments. Call takes named arguments, while apply takes only an array. Calling a function with two arguments would look something like this:

```
someFunction.call(thisObject, argOne, argTwo);

someFunction.apply(thisObject, [argOne, argTwo]);
```

Here, call and apply are used to pass arguments along to a function that takes first an action, and then a target person:

```
var charlie = {name: 'Charlie'};
var becky = {name: 'Becky'};

function greet(action, target) {
  console.log(this.name + " " + action + " at " + target);
}
```

These two invocations would be equivalent:

```
greet.call(charlie, 'waves', becky.name);
greet.apply(charlie, ['waves', becky.name]);
```
