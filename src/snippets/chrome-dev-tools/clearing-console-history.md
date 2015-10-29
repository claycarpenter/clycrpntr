---
title: querySelector Shortcuts in Chrome Dev Tools Console
tags: chrome dev tools
template: /base.jade
category: snippet
---

The Chrome console can quickly become cluttered, especially if you're working with a program that's chatty in its log output or produces bunches of exceptions. The are (at least) five options for clearing the console history in Chrome:

1. Right-click on the console window and select the *Clear Console* command from the menu.
2. Click on the *Clear console log* button at the top left of the console window (to the left of the filter button).
3. Use a keyboard shortcut (with the console window in focus):
  * `Cmd-K` and `Ctrl-L` on a Mac
  * `Ctrl-L` on a Windows or Linux box
4. Enter `clear()` in the console.
5. Enter `console.clear()` in the console or through your JS code. Probably not a good idea to have your JS code clearing out the console, but it is possible.

Note that the last two options--`clear()` and `console.clear()`--will only work if you *don't* have the *Preserve log* option enabled.
