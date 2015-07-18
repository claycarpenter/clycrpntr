---
title: Symbolic Links
tags: command line
template: /base.jade
category: snippet
---

Symbolic links are a handy way to provide a shortcut pointer to a file or directory elsewhere on the filesystem. These are also commonly referred to as "soft" links.

Symbolic links are created with the `ln` utility and the `-s` (longhand form: `--symbolic`). The general syntax is:

```
ln -s <path to source> <path to shortcut link>
```

That will create a "soft" link at `path to shortcut link` to the source at `path to source`. The source can be either a file or a directory; the link will mimic whatever the source type is.

Once the link is created, it will behave much like a normal file or directory: it can be read from or written to, if it's a directory it can be browsed, etc.

Removing a link is simple: use the `rm` command on the target link. Only the link itself will be deleted; the source files that the link points to will be unaffected.

More information can be found in the [ln man page](http://linux.die.net/man/1/ln).
