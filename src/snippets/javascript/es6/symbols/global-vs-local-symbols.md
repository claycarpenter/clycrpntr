---
title: Global vs Local Symbols
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Although local symbols are typically used when discussing the topic of Symbols in ES6, Symbols can also be registered in a global symbol registry. These symbols are created with the `Symbol.for(key)` syntax. Note the differences between the local and global Symbol creation syntaxes:

```javascript
// New local symbol, with a _label_ of "foo"
var localSymbol = Symbol('foo');

// New global symbol, with a _key_ of "foo"
var globalSymbol = Symbol('foo');
```

This allows symbols to be looked up by a unique key. Unlike local symbols, global symbols using the same key are the same symbols. For instance:

```javascript
var fooSym1 = Symbol.for('foo');
var fooSym2 = Symbol.for('foo');

fooSym1 == fooSym2    // => true
```

#### Retrieving global symbols by a key

You can find the key for a global symbol using `Symbol.keyFor(symbol)`:

```javascript
var fooSym = Symbol.for('foo');
var fooSymKey = Symbol.keyFor(fooSym);
fooSymKey === 'foo'   // => true
```

Trying to use keyFor on a local symbol will always result in `undefined`:

```javascript
var fooSym = Symbol.for('foo');
Symbol.keyFor(Symbol('foo'));     // => undefined
```

#### Global symbol key naming

Keep in mind that like any global resource, it's easy to accidentally pollute the global symbol key registry. For that reason, it's probably best to follow [MDN's recommendation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#Examples) and prefix or namespace your global symbol keys:

```javascript
Symbol.for('com.example.foo');
Symbol.for('com.example.bar');
```
