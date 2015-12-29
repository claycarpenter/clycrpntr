---
title: Declaring Basic Object Data Properties and the Writable Configuration
tags: javascript
template: /base.jade
category: snippet
---

Accessor properties can also be used along with local ("private") variables to provide controlled access to "instance" variables.

This example builds a simple address object that has a very basic validation routine around the zip code value. The `SimpleAddress` constructor uses a `_zip` variable in the closure created by the constructor to store the address' zip code, then exposes access to that variable through an accessor property. The getter is straightforward, while the setter provides a simple validation routine that checks if the provided zip code is five sequential digits. If the check succeeds, the value is stored; if the check fails, an error is raised.

Here's the `SimpleAddress` and a small test script:

```
function SimpleAddress(street, unit, zip) {
  var _zip;

  Object.defineProperties(this, {
    street: {
      value: street,
      writable: true
    },
    unit: {
      value: unit,
      writable: true
    },
    toString: {
      value: function() {
        return this.street + (!!this.unit && this.unit.length ? ' #' + this.unit : '') + ' ' + this.zip;
      }
    },
    zip: {
      get: function() {
        return _zip;
      },
      set: function(value) {
        if (/\d{5}/.test(value)) {
          _zip = value;
        } else {
          throw new Error('Invalid zip code. Zip code must be five digits');
        }
      }
    }
  });

  // Use zip code setter to run the provided zip code through validation.
  this.zip = zip;
}

// Test with valid address
var mainSt = new SimpleAddress('123 Main St', '2A', '12345');

console.log(mainSt.toString());   //=> "123 Main St #2A 12345"


// Test setter with invalid address
try {
  var valid = new SimpleAddress('456 E St', '183', '12345');
  valid.zip = 'nope';
} catch (error) {
  console.log(error.toString());
}

// Test constructor with invalid address
try {
  var invalid = new SimpleAddress('456 E St', '183', '1234');
} catch (error) {
  console.log(error.toString());
}
```
