---
title: Counting Lines with find and wc
tags: command line
template: /base.jade
category: snippet
---

Combining `find` and `wc` allows you to search a file tree for particular files and then count their aggregate totals, in terms of characters, words, and lines.

To get these two utilities to work well together, you'll need to glue them together with `xargs`. The generic command looks something like this:

```
find <start directory> -name '<filename pattern>' | xargs wc
```

For instance, this command will tabulate the content of all Markdown articles within the current directory:

```
find . -name '*.md' | xargs wc
```
