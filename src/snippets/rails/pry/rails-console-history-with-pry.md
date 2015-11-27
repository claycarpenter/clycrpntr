---
title: Reloading the Rails Console
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

Pry stores any commands entered into the Rails console. These can be view with the `hist` command. `hist` will list all commands, in sequence, from first entered to the most recent.

You can also search Pry's history by using this command: `hist --grep <search term>`. This will print every command that matches the search term, along with the command's sequence number.
