---
title: Named Parameters in ES6
tags: javascript, es6
template: /base.jade
category: snippet
---

Named parameters are a technique where parameters are labeled rather than relying on position to determine which provided value should be mapped. They're supported in some languages, such as Python and Ruby. In Ruby, they look something like this:

```Ruby
def create_person(first_name:, last_name:)
  new Person(first_name, last_name)
end

jim = create_person(first_name: 'Jim', last_name: 'Halpert')
dwight = create_person(last_name: 'Schrute', first_name: 'Dwight')
```

In that example, the `create_person` factory method takes named parameters and passes them to the Person constructor, which itself takes only positional arguments. The two Person instances created, `jim` and `dwight`, take advantage of one feature of named parameters: because the parameters are labeled, they don't have to be provided in a certain sequence.

Named parameters have a few advantages over positional parameters:

* Parameters are position independent, so clients are free to organize the parameters in the manner that makes the most sense to them.
* Named parameters better support optional parameters than positional parameters. In positional parameter schemes, the optional parameter must be "skipped" by providing an empty value like `null`. With named parameters, the optional parameters can simply be omitted when clients don't want to specify them.
* Named parameters are much more descriptive than their positional counterparts. A call like `create_person(first_name: 'Michael', last_name: 'Scott')` is much more clear about which name is which than `create_person('Michael', 'Scott')`.

There is of course a downside to being more descriptive, and that's being more verbose. Labelling those parameters certainly does take a small bit of extra typing and time. Personally, I strongly prefer to be descriptive rather than economical or concise, as I think readable code is fundamental to maintainable code bases.

While ES6 doesn't officially support named parameters, it's possible to simulate them with a combination of destructuring and default values. In this technique, the named parameters are passed to the function as a single object. That object is destructured within the function signature, creating argument variables within the scope of the function. If we were to apply this to a simple addition function, it would look something like this:

```javascript
function add({a, b}) {
  return a + b;
}
console.log(add({a: 1, b: 2}));   // 3
```

That's a pretty contrived example, and in that particular case named parameters don't add much value as the difference between which number is supplied in which position doesn't affect the outcome of the addition operation. For a more useful example, let's rewrite the person factory shown above written in Ruby. We'll start by creating a simple Person class:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}
```

That class is pretty basic--just a constructor that stores the two instance properties, and a `sayName` function that makes it easy to see what those property values are. Next, we'll create our Person factory function:

```javascript
function createPerson({firstName, lastName} = {}) {
  return new Person(firstName, lastName);
}
```

The `createPerson` factory function takes a single argument, an object that should have `firstName` and `lastName` keys. It destructures that object argument into local variables of the same name, and then passes those on to the Person constructor. Note that the argument is given a default value of a blank object. Destructuring is generally pretty fail-safe, defaulting to `undefined` or other defaults when properties can't be found. However, a TypeError will be raised if you try to destructure a `null` or `undefined` value. Adding that blank object default value prevents an error from being raised if the factory function is called like `createPerson()`.

Finally, we can call the Person factory function and test if our implementation is working:

```javascript
const jim = createPerson({firstName: 'Jim', lastName: 'Halpert'});
console.log(jim.sayName());   // "My name is Jim Halpert"

const dwight = createPerson({lastName: 'Schrute', firstName: 'Dwight'});
console.log(dwight.sayName());    // "My name is Dwight Schrute"
```

Many thanks to Axel Rauschmayer for [pointing this technique out](http://exploringjs.com/es6/ch_parameter-handling.html#_simulating-named-parameters-in-javascript) in his excellent book [Exploring ES6](http://exploringjs.com/). I highly recommend you check it out.
