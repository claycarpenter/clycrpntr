---
title: Destructuring Regex Results
tags: javascript, es6
template: /base.jade
category: snippet
---

Destructuring can be very handy for retrieving the results from regex `exec` calls. The results are held in an array-like object. If there is a match, the full match is available at index 0, and all subgroup matches are in indexes counting up from 1.

Here, we use this technique to pull out the three sections of a US phone number into their own variables:

```javascript
// Phone number regex
const phoneRegex = /^(\d{3})-(\d{3})-(\d{4})$/;

let [fullMatch, areaCode, exchange, subscriberNumber] = phoneRegex.exec('844-555-1234');
console.log(areaCode, exchange, subscriberNumber);    // 844 555 1234
```

If you don't need the full match, you can just ignore destructuring the first value, like so:

```javascript
let [, areaCode, exchange, subscriberNumber] = phoneRegex.exec('844-555-1234');
console.log(areaCode, exchange, subscriberNumber);    // 844 555 1234
```
