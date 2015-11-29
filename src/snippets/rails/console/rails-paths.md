---
title: Rails Paths in the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

You can check out Rails routes via the `app` variable from within the Rails console. For instance:

```
[196] pry(main)> app.contacts_path
=> "/contacts"
[197] pry(main)> app.contact_path 2
=> "/contacts/2"
```

Thanks to [Pramgatic Studios](https://pragmaticstudio.com/blog/2014/3/11/console-shortcuts-tips-tricks) for pointing this out.