---
title: Listing Available Rake Tasks
tags: rails, rake
template: /base.jade
category: snippet
---

You can list all available rake tasks, along with their descriptions, using the `rake -T` command from the same directory of a Rails app. It will produce a list that looks something like this:

```
<> rake -T
rake about                              # List versions of all Rails frameworks and the environment
rake assets:clean[keep]                 # Remove old compiled assets
rake assets:clobber                     # Remove compiled assets
rake assets:environment                 # Load asset compile environment
rake assets:precompile                  # Compile all the assets named in config.assets.precompile
[...]
```
