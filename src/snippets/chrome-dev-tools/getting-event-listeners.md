---
title: Listing Event Listeners in the Chrome Console
tags: chrome dev tools
template: /base.jade
category: snippet
---

From the Chrome Console, you can use `getEventListeners(element)` to get a list of all event listeners attached to that particular element. The returned result will be an object with keys for each event name: 'click', 'mousedown', etc. For each event key, there will be an array with one or more listeners for that particular event. From there, you can use the console output to drill down into the listeners and investigate their details.

More documentation can be found [here](https://developer.chrome.com/devtools/docs/commandline-api#geteventlistenersobject).
