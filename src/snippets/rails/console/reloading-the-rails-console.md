---
title: Reloading the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

The Rails console is a great place to work through new code concepts and test out new components. In order to load the latest changes, use the `reload!` command. `reload!` will reload the environment (similar to how refreshing the browser will load in any controller or model changes), pulling in any new changes.

Note that `reload!` won't update any existing instances in the Rails console. In order to pick up those changes, you'll have to reinstantiate those models/objects.
