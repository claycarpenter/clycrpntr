---
title: Listing Annotations in Rails App Source
tags: rails, rake
template: /base.jade
category: snippet
---

Within a Rails app, you can have Rake find any annotations (such as `FIXME:` or `TODO:`) laying around your source code with the `rake notes` command. The output looks something like this:

```
> rake notes
< config/application.rb:
  * [ 24] [FIXME] This, and other configuration here, should be in initializers.
  * [ 55] [TODO] Is this necessary?
```

By default, Rake looks for annotations with the names `FIXME`, `OPTIMIZE` or `TODO`. You can look for a specific annotation by passing it as a suffix to the notes task:

```
rake notes:fixme
```

You can also find custom annotations by passing them in the `ANNOTATION` environment variable:

```
rake notes:custom ANNOTATION=REFACTOR
```

You can find more details in the Rails [documentation on rake notes](http://guides.rubyonrails.org/command_line.html#notes).
