---
title: Quickly Creating Observables with Observable.of
tags: javascript, rxjs
template: /base.jade
category: snippet
---

Observable.of makes it easy to quickly create basic observables from pre-defined sets of values. This is excellent for experimenting with observables as you're trying to learn RxJs.

Observables.of takes an arbitrary number of arguments and convert them into source events in the observable's event stream. Here, we'll create a set of random values and print them out with a simple subscriber:

```javascript
{
  console.log(`Array.of - Rest args`);
  var source$ = Rx.Observable.of('1', '1', 'foo', '2', '3', '5', 'bar', '8', '13');
  source$.subscribe(
    value => console.log(value)
  );
}
```

Observable.of doesn't convert arrays or other iterables into discrete values, but you can use the spread operator to convert those iterables into a set of arguments that Observable.of will happily consume. Here, we slightly modify the above example to use an array as its event source:

```javascript
{
  console.log(`Array.of - Array with spread operator`);
  var sourceArr = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
  var source$ = Rx.Observable.of(...sourceArr);
  source$.subscribe(
    value => console.log(value)
  );
}
```
