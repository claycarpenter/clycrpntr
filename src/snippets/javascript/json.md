---
title: JSON Basics
tags: javascript, json
template: /base.jade
category: snippet
---

JSON is a very simple and lightweight data format. It's very similar to JavaScript object literal notation, but it requires that any object property keys and strings be enclosed in double-quotes (JS object literals allow for no quotes for many property keys, and single quotes to wrap strings).

There are seven values in JSON:
* String
* Number
* Object
* Array
* True
* False
* Null

### String

Specified with a value enclosed in double-quotes: `"hello world"`, `"this message\nspans two lines"`.

### Number

Specified with a literal sequence of digits, possibly including a sign or decimal point: `3`, `3.14`, `-1000`.

Note that these values aren't wrapped in quotes; doing so would convert the value to a string.

### Object

Specified with curly brackets (`{}`). Contains zero or more key-value pairs, with the key being wrapped in double-quotes (like a string) and the value being any legal JSON value. Like JS object literal notation, these key-value pairs are separated by commas.

### Array

Specified with comma-separated elements within square brackets: `[1,2,3,a,b,c]`.

Like JS arrays, JSON arrays can hold mixed types, including other arrays.

### True

Specified with `true`.

The true boolean value.

### False

Specified with `false`.

The false boolean value.

### Null

Specified with `null`.

Specifies an undefined value.
