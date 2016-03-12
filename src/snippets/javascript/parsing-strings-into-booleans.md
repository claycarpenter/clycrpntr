---
title: Parsing Strings into Booleans
tags: javascript, json
template: /base.jade
category: snippet
---

Parsing a string into a boolean value is a bit harder in JS than it might appear at first glance. Trying to use the `Boolean` constructer isn't useful, as it will return `true` for any value other than an empty string:

```
var booleanString = 'false';
var parsed = Boolean(booleanString);

console.log(parsed);  // => true
```

The simplest way is to make use of JS's strict equality operator (`===`), comparing against the value "true":

```
var booleanString = 'false';
var parsed = booleanString === 'true';

console.log(parsed); // => true
```

Note that if you're concerned about the letter casing of the source of your boolean string, you might want to convert that string to lowercase (`booleanString.toLowerCase()`) before testing against `"true"` in order to execute a more reliable test.
