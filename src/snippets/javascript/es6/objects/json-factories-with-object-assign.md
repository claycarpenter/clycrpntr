---
title: Building JSON Factories with Object.assign
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Many different situations call for reading JSON from an HTTP response and then converting that text data into a usable object. At a basic level, this can be achieved with a simple `JSON.parse` call:

```javascript
var jsonObject = JSON.parse(jsonText);
```

This method is fine for very basic use cases, but the resulting object is nothing more than a [data transfer object](https://en.wikipedia.org/wiki/Data_transfer_object). With nothing more than simple data storage capability, any additional business or presentation logic that involves these basic objects often ends up in the associated controllers and other adjacent components--dispersed, redundant, and difficult to test.

A better architecture incorporates logic into these models. But how to build rich models out of basic JSON data? By creating a simple factory method using `JSON.parse` and `Object.assign`. The technique is pretty simple:

1. Add a new static factory method to your class. I prefer the name `fromJson`, but anything that's intuitive will work. The factory method should take a single argument, that JSON-formatter text string that it will be parsing.
2. Begin that factory method implementation by creating a new basic Object from the JSON text using `JSON.parse`.
3. Next, create a new (blank) instance of the rich model.
4. Copy all the parsed data properties of the basic Object into the new rich model instance using `Object.assign`.
5. Return the populated rich model.

The following example demonstrates this technique. It used a very basic Location model similar to one I've used in recent projects. The Location model has three properties (street, optional unit number, and zip code) as well as a pair of methods. `hasUnit` is a simple test method to determine if the unit number property has an optional value, and the model overrides `toString` to provide a prettier string representation of the model.

```javascript
class Location {
  static fromJson(jsonTxt) {
    const rawObject = JSON.parse(jsonTxt),
          location = new Location();

    Object.assign(location, rawObject);

    return location;
  }

  hasUnit() {
    return typeof this.unit === 'string' && this.unit.trim().length > 0;
  }

  toString() {
    if (this.hasUnit()) {
      return `${this.street} #${this.unit}, ${this.zip}`;
    }

    return `${this.street}, ${this.zip}`;
  }
}

const thirtyRockJson = `{
  "street": "30 Rockefeller Place",
  "unit": "13B",
  "zip": "10112"
}`;
const thirtyRock = Location.fromJson(thirtyRockJson);
console.log(thirtyRock.toString()); // 30 Rockefeller Place #13B, 10112

const whiteHouseJson = `{
  "street": "1600 Pennsylvania Ave",
  "zip": "20006"
}`;
const whiteHouse = Location.fromJson(whiteHouseJson);
console.log(whiteHouse.toString()); // 1600 Pennsylvania Ave, 20006
```
