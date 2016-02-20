---
title: Reloading Global Config from Rails Console
tags: rails, rails-console, gem-global
template: /base.jade
category: snippet
---

I find the [Global](https://github.com/railsware/global) gem very useful for storing configurations in easy-to-edit YAML files. Typically, I use the Rails console to test new components as I'm testing out different implementation ideas. When those ideas rely on Global, I find that sometimes Global seems to be caching the results. This survives even Rails console restarts. One way I've found to fix that issue is to execute the `Global.reload!` command. This seems to effectively clear that cache and read in the latest config file changes so I can continue one merrily building and breaking new components.
