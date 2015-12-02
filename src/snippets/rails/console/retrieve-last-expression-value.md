---
title: Retrieving the Last Expression Value in the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

The result of the last expression executed in the Rails console is available with `_`. This can be used to retrieve the results the commands that you ran but didn't think to capture the value of when you composed the command.

Here's a simple example:

```
[182] pry(main)> [1,2,3,4]
=> [1, 2, 3, 4]
[183] pry(main)> a = _
=> [1, 2, 3, 4]
[184] pry(main)> a.size
=> 4
```

Thanks to [Pramgatic Studios](https://pragmaticstudio.com/blog/2014/3/11/console-shortcuts-tips-tricks) for pointing this out.