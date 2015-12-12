---
title: Method Source Locations in the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

When you're digging around in the Rails console, you can look up the location of the source of the method you're interacting with using the `source_location` property.

This works with both instances:

```
[86] pry(main)> chicago.class.instance_method(:obstacles_count).source_location
=> ["/Users/clay/dev/code/madebymunsters/schlep/schlep-api/app/models/location.rb", 6]
```

As well as with class methods:

```
[85] pry(main)> Location.instance_method(:obstacles_count).source_location
=> ["/Users/clay/dev/code/madebymunsters/schlep/schlep-api/app/models/location.rb", 6]
```

Thanks to [Pramgatic Studios](https://pragmaticstudio.com/blog/2014/3/11/console-shortcuts-tips-tricks) for pointing this out.
