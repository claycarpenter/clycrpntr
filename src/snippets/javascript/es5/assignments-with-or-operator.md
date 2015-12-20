---
title: Assignments With The OR Operator
tags: javascript
template: /base.jade
category: snippet
---

The JavaScript OR operator, ||, is useful for efficiently and concisely providing default values. The OR operator is typically deployed in logical evaluations, but it can also be used to provide a value in the case that the test value is undesireable. 

The OR operator performs based upon a simple algorithm: return either the first truthy value it finds, or if it finds only falsy values, then the last value provided to the operator (the right hand side of the OR operator). Full explanations of truthy and falsy values are beyond the scope of this snippet; for more information see the [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) documentation at MDN.

At it's most basic, the OR operator can be used to ensure that a value is present without requiring a more complicated check. For instance, let's say we're going to add a new pet name to our `pets` array, but we're not sure if the `pets` array has been initialized yet. Before we push our new pet name onto the pets array, we want to make sure that it exists. If it doesn't exist, we'll create a new empty array. Our defensive code would look like this:

```
if (!pets) {
    pets = [];
}

pets.push('Rover');
```

With the OR operator, the same check can be written much more concisely:

```
pets = pets || [];
pets.push('Rover');
```

The two code snippets are functionally identical. Both rely on the fact that `undefined` is a falsy value. If written out, the logic of the OR assignment above would read "if pets exists, assign that value to pets; otherwise, create a new array and assign that value to pets". Note that because of short circuiting, the OR operator will only evaluate the left hand of the statement if that left hand value is truthy. In this case, that means that if pets already exists the blank array will never be created.

In the case that both sides of the OR operator are falsy, the the OR operator will return the second (right-hand) value. In this following statement, even though the right-hand value is `false`, the OR operator will select it if `isWalking` is undefined:

```
var isWalking = isWalking || false;
```

These OR assignments are very useful for providing default values to optional function arguments. For an example we'll use a very simple constructor function that creates a new Pet object. The Pet object will have three properties: name, species, and age (in years). The constructor will assume the name and species are always provided, but allow the age to be optional in the case of animals that aren't yet a year old.

Here's our constructor:

```
function Pet (name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age || 0;
}
```

The new Pet's age property will always have a value, regardless of whether an age is given to the Pet constructor. 

The Pet constructor will store the age value if provided:

```
var neko = new Pet('Neko', 'Dog');
console.log(neko.age);   // 7
```

New Pets who aren't given an explicit age will receive an age of 0 by default:

```
var bubbles = new Pet('Bubbles', 'Goldfish');
console.log(bubbles.age);   // 0
```
