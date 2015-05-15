---
title: Searching File Trees With grep
tags: command line
template: /base.jade
draft
category: snippet
---

find can be combined with grep to produce a powerful file searching pair that teams the file searching advantages of find with the file content searching strengths of grep. xargs is the glue that ties those two utilities. xargs will take all of the file names that match the find search and provide those file names to grep, which will then search each file in the list.

This is the generic syntax:

```
find <file search criteria> | xargs grep <search string>
```

A basic search looks like this:

```
find . | xargs grep "foo"
```

That command searches the current working directory for any file that contains "foo". As that stands, it's little more than a long-winded way of writing `grep -r "foo"`. 

More powerful expressions can be achieved using find's file searching criteria. 

*TODO*: Complete this snippet when I have a better understanding of find's search criteria options.
