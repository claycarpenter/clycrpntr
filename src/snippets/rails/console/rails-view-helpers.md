---
title: Rails View Helpers in the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

Rails view helpers are available in the Rails console view the `helper` variable. For instance, here are a few helpers for formatting numbers:

```
[189] pry(main)> helper.number_to_currency(330.2)
=> "$330.20"
[190] pry(main)> helper.number_to_phone(5551234321)
=> "555-123-4321"
[191] pry(main)> helper.number_to_human(3.30498309843)
=> "3.3"
```

Thanks to [Pramgatic Studios](https://pragmaticstudio.com/blog/2014/3/11/console-shortcuts-tips-tricks) for pointing this out.