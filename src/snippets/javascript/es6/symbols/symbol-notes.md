---
title: Notes on ES6 Symbols
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

ES6 introduces the concept of Symbols into Javascript. Symbols serve as unique identifiers of properties. As primitives that serve as property identifiers, they're somewhat like strings. Unlike strings, they're entirely unique--no two symbols will ever be identical. This allows symbols to safely denote specific concepts without fear of collisions with other similarly named but unrelated concepts, as would happen with a pure string implementation. Such support is particularly important in safely determining an object's capabilities, and an excellent example of that in action is the `Symbol.iterator` symbol that marks an object's iterator protocol implementation.

#### Local symbols and uniqueness

Local symbols are created by invoking `Symbol` with an optional label (or description):

```javascript
var anonymousSymbol = Symbol();
var labeledSymbol = Symbol('foo');
```

Symbol labels are just that--labels. They are only designed for human use, and don't have any programmatic value. Local symbols are still guaranteed to be unique, even if they're given the same label:

```javascript
var fooSym1 = Symbol('foo');
var fooSym2 = Symbol('foo');

fooSym1 == fooSym2    // => false
```

This means that you can access a property value registered under a property symbol by simply trying to recreate the symbol:

```javascript
const fooSym = Symbol('foo');
const obj = {
  [fooSym]: 'bar'
};

obj[fooSym];          // "bar"
obj[Symbol('foo')];   // undefined
```

#### Key nomenclature

In light of the introduction of another type of property keys in ES6, it's useful to also adopt a new nomenclature to help distinguish what type of property key is being discussed. [Axel Rauchmayer](http://exploringjs.com/es6/ch_symbols.html#_enumerating-own-property-keys)suggests this terminology:

* Property keys are either strings or symbols.
* String-valued property keys are called property names.
* Symbol-valued property keys are called property symbols.

#### Symbols as safe identifiers

With their combination of immutability and uniqueness, symbols can act as globally unique identifiers that are safe from influence from external libraries. In that sense, they're somewhat like XML namespaces. Much like XML namespaces allowed element names to be prefixed to avoid collision, symbols similarly provide a reliably unique and solid method for identifying properties in objects.

#### Finding Symbols

Despite being guaranteed unique upon creation, references can be acquired to symbols on an object, even if the original symbol variable capture cannot be accessed. For that reason, symbols should not be considered private.

There are two ways to get a list of the symbols on a given object: `Object.getOwnPropertySymbols` and `Reflect.ownKeys()`. getOwnPropertySymbols will return only the object's symbols, while ownKeys will return all of the keys on the object (regardless of whether they're configured to be enumerable). Other methods on Object that identify properties on objects--Object.getOwnPropertyNames and Object.keys--only work with string-valued property keys.

```javascript
const obj = {
  string: 'foo',
  [Symbol()]: 'bar'
};

// Only symbol-keyed properties
console.log(Object.getOwnPropertySymbols(obj));
// => [Symbol()]

// All keys
console.log(Reflect.ownKeys(obj));
// => ["string", Symbol()]

// Only string-keyed properties
console.log(Object.getOwnPropertyNames(obj));
// => ["string"]

// Only string-keyed properties
console.log(Object.keys(obj));
// => ["string"]
```

#### Conversions and Coercion

Symbols can't be coerced into strings. This is an intentional protection mechanism built into the language that helps developers avoid silently creating new string properties out of existing symbol properties.

For instance, this code will fail with a TypeError:

```javascript
const obj = {
  ['_' + Symbol.for('test')]: 'test'
};
```
