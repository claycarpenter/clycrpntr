---
title: Plaintext in Jade
tags: jade
template: /base.jade
category: snippet
---

Adding plaintext content within Jade tags can be accomplished in three ways. The first is the simplest: just add the content following the tag declaration. Here is an `h1` tag example:

```
h1 Sample Header
```

Compiles to:

```
<h1>Sample Header<h1>
```

You can also use piped text. In this case, each line of plaintext is begun with a `|` (pipe) character. Here piped text fills out a `p` tag:

```
p
  | This is the first line.
  | This is the second line.
```

Produces this output:

```
<p>
  This is the first line.
  This is the second line.
</p>
```

Note that piped text is also the best way to render pure plaintext (without any wrapping element) through the generator.

Finally, you can use block text. Block text is designated by adding a `.` immediately following the tag statement. Any indented content that follows is interpreted as plaintext content for that tag.

```
p.
  Everything is seen by
  a big brother
```

Compiles to:

```
<p>
  Everything is seen by
  a big brother
</p>
```

In block text mode, Jade treats everything as plaintext. In this example that means that the second line, `a big brother`, is *not* intepreted as an `a` tag, but instead just plain text.
