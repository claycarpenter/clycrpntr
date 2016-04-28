---
title: ES6 Class Getters and Setters
tags: javascript, es6
template: /base.jade
category: snippet
---

The new class support in ES6 also supports properties. In a very similar style to how they were defined in ES5 object literals, properties are defined with just `get` and `set` keyword before method names. For instance, this example creates a getter/setter pair for a property named `value`:

```javascript
class MyClass {
  get value() {
    // ...
  }

  set value(value) {
    // ...
  }
}
```

The properties can be incredibly helpful when you want to strictly define how outside components interact with a particular piece of a class' data. I recently used this same technique to help protect some MomentJS values. MomentJS--a wonderfully handy date and time utility library--alters the referenced moment instance when a mutation operation is performed on the instance. But what if we wanted to make a moment value available to outside clients, but still shield it from modification? We can do this with properties, only returning a clone of the moment value whenever the getter is called. The setter should also make a clone, so that the class instance can be sure it's the only component with access to that specific moment instance. The implementation, called ConcreteDate, looks like this:

```javascript
class ConcreteDate {
  constructor(date) {
    this.date = date;
  }

  get date() {
    // Return shadow property.
    return this._date;
  }

  set date(newDate) {
    this._date = moment(newDate);
  }
}
```

Because the `date` property is taken, the moment value must be held in a shadow property `_date`. I use the `_variableName` to following a naming convention where a leading underscore indicates that a property should be considered private.

With that construction, the moment value given to a ConcreteDate instance is now safe from outside modification:

```javascript
console.log(nowMoment.format('DD MMM YYYY'));   // "23 Apr 2016"
console.log(concreteDateMoment.date.format('DD MMM YYYY'));   // "23 Apr 2016"
nowMoment.add(7, 'days');
console.log(nowMoment.format('DD MMM YYYY'));   // "30 Apr 2016"
console.log(concreteDateMoment.date.format('DD MMM YYYY'));   // "23 Apr 2016"
```

Because the `date` setter uses the moment constructor to create a clone, it's capable of either cloning and existing moment instance or converting a standard JS Date object into a moment instance (of equal value). So this also works:

```javascript
const concreteDateJsDate = new ConcreteDate(new Date());
console.log(concreteDateJsDate.date.format('DD MMM YYYY'));   // "23 Apr 2016"
```

Here's the full example:

```javascript
class ConcreteDate {
  constructor(date) {
    this.date = date;
  }

  get date() {
    // Return shadow property.
    return this._date;
  }

  set date(newDate) {
    this._date = moment(newDate);
  }
}

const nowMoment = moment(),
      concreteDateMoment = new ConcreteDate(nowMoment);

console.log(nowMoment.format('DD MMM YYYY'));   // "23 Apr 2016"
console.log(concreteDateMoment.date.format('DD MMM YYYY'));   // "23 Apr 2016"
nowMoment.add(7, 'days');
console.log(nowMoment.format('DD MMM YYYY'));   // "30 Apr 2016"
console.log(concreteDateMoment.date.format('DD MMM YYYY'));   // "23 Apr 2016"

const concreteDateJsDate = new ConcreteDate(new Date());
console.log(concreteDateJsDate.date.format('DD MMM YYYY'));   // "23 Apr 2016"
```
