---
title: Basic byebug Debugging Navigation
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

These are the most basic byebug commands for navigating through a debugging session:

* `s[tep] <line numbers>` - Step into the next executable instruction. If a number is provided, the debugger moves forward that many steps before pausing once again.
* `n[ext] <line numbers>` - Step over the next executable instruction. If a number is provided, the debugger moves forward that many steps before pausing once again.
* `c[ontinue]` - Continues program execution. Execution will halt again once the next breakpoint or `byebug` statement is reached.

More--and better--information is available on [Fleeblewidget's byebug cheatsheet](http://fleeblewidget.co.uk/2014/05/byebug-cheatsheet/).
