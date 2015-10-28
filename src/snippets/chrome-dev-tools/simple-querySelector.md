---
title: querySelector Shortcuts in Chrome Dev Tools Console
tags: chrome dev tools
template: /base.jade
category: snippet
---

Chrome provides two shortcuts for locating elements via the console: `$()` and `$$()`, which map to `document.querySelector` and `document.querySelectorAll`, respectively.

These work just like you'd expect: `$('li')` will return the first `li` element in the document, while `$$('li')` will return all `li` elements in the document. One thing to note is that if jQuery is present, it could (and likely will) overwrite the `$` variable. In that case, a query like `$('li')` will return all of the `li` elements in the document, per jQuery's default behavior.

You can find more information at the Chrome Dev Tools documentation [here](https://developer.chrome.com/devtools/docs/commandline-api#selector) and [here](https://developer.chrome.com/devtools/docs/commandline-api#selector_1).
