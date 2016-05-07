---
title: Default Values and Delegated Definitions
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Because default values are triggered by `undefined`, the definition of default values can be delegated in the case where one method is acting as the proxy for another. Take this example:

```javascript
function add(a = 1, b = 1) {
  return a + b;
}
function double(a) {
  return add(a, a);
}

console.log(double());   // 2
console.log(double(2));   // 4
```

The function `double` acts as a proxy in front of `add`. It doesn't supply its own default values, but instead relies on the default values defined by `add`. When `double` is called without any arguments `a` gets a value of `undefined`, which is then passed through to `add`. `undefined` triggers default values, so `add` substitutes the default values for those arguments.

If `undefined` didn't trigger default values, this type of delegated default value configuration wouldn't be possible.

This technique also works very well for dealing with missing object keys. In this example, a Logger class is created that supports a bulk config operation. The `config` method takes a single options object, which is uses to individually call the configurable settings mutators. Those settings mutators has default values; when they're called with `undefined` the Logger instance picks up the default configuration for that setting.

```javascript
class Logger {
  get level() {
    return this._level;
  }

  set level(level = 'info') {
    this._level = level;
  }

  get name() {
    return this._name;
  }

  set name(name = 'Logger') {
    this._name = name;
  }

  config(options) {
    this.level = options.level;
    this.name = options.name;
  }

  log(message) {
    console[this.level](`[${this.name}] ${message}`);
  }
}

const logger = new Logger();
logger.config({name: 'Example'});
logger.log('Hello world!');       // "[Example] Hello world!"
```
