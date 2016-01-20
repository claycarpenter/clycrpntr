---
title: Single Line Rescue Statements
tags: ruby
template: /base.jade
category: snippet
---

Ruby supports a single line rescue statement. The general syntax is:

```
<statement> rescue <value>
```

If an exception is raised during the statement evaluation, then the value (on the right side of the `rescue` keyword) is returned instead.

This can be useful for instances where you are looking deep into nested properties, and those properties are reliably present. Consider, for instance, importing a set of comments from an existing blog system. The blog system only captured (and exports) author information for registered users, while author info for anonymous users is completely omitted. A very stripped down version of that exported data structure might look something like this hash:

```
comments = [
  {
    author: {
      name: 'George Washington'
    },
    body: 'Lorem ipsum'
  },
  {
    body: 'Give me liberty or give me death!'
  }
]
```

With rescue, you can investigate each comment and safely dig deep into the nested properties to get at the author's name without worrying about nil errors:

```
author = comment[:author][:name] rescue nil
```

That will either store the author's name, or if the author info isn't present, an error will be raised and `nil` will be returned as the default value.

This is much more concise than the alternative:

```
if comment[:author]
  author = comment[:author][:name]
else
  author = nil
end
```

The full example is here:

```
comments = [
  {
    author: {
      name: 'George Washington'
    },
    body: 'Lorem ipsum'
  },
  {
    body: 'Give me liberty or give me death!'
  }
]

comments.each do |comment|
  author = comment[:author][:name] rescue nil
  comment_body = comment[:body]
  puts "#{(author ? author : 'Anonymous')} wrote \"#{comment_body}\""
end
```
