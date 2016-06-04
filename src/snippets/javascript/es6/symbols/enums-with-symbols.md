---
title: Enums with ES6 Symbols
tags: javascript, es6
template: /base.jade
category: snippet
draft: true
---

Symbols make excellent choices for enum values. Immutable and unique by default, they align well with the concept of enum items representing a single, concrete value. When you build an API that uses enums with Symbols instead of Strings, you can also be sure that the calling client is using the appropriate enum group. This adds a level of "type safety"-like checks to regular ES6 code (without having to use TypeScript).

For this example, we create a basic mock input reading function. Our "API" has two sets of enums: one for read source options, the other for write destination options. The reader function, `readInput`, takes an input option as its source, and then checks to make sure that the input option is valid (before proceeding with the read function, if this were a real implementation). If the input source isn't valid, it throws a simple Error.

Here is the full source:

```javascript
const INPUT_OPTIONS = {
  KEYBOARD: Symbol('KEYBOARD'),
  FILE: Symbol('FILE'),
};

const OUTPUT_OPTIONS = {
  SCREEN: Symbol('SCREEN'),
  FILE: Symbol('FILE'),
};

function readInput(inputSource) {
  switch (inputSource) {
    case INPUT_OPTIONS.KEYBOARD:
      console.log('Keyboard input selected');
      break;
    case INPUT_OPTIONS.FILE:
      console.log('File input selected');
      break;
    default:
      throw new Error('Unknown option');
  }
}

readInput(INPUT_OPTIONS.KEYBOARD);
readInput(INPUT_OPTIONS.FILE);
try {
  readInput(OUTPUT_OPTIONS.FILE);
} catch (error) {
  console.error(error);   // Error: Unknown option
}
```

Note that when `readInput` is called with an output option value, even though the value is a symbol with the exact same label as the corresponding input option, an error will be thrown. This is because local Symbols are always unique, despite what they're human-friendly descriptions might indicate.
