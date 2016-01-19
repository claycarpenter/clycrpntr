---
title: Git Blame
tags: git
template: /base.jade
category: snippet
---

Git blame shows every line of a given file, along with a few details of the commit that last changed that line. By default, these include the (abbreviated) commit hash, commit author, and timestamp for the change. The output looks something like this:

```
0d6d2dcb (Clay Carpenter 2015-04-30 00:46:24 +0000   1) #!/usr/bin/env node
0d6d2dcb (Clay Carpenter 2015-04-30 00:46:24 +0000   2)
44588fc6 (Clay Carpenter 2015-04-27 20:55:42 -0400   3) var Metalsmith = require('metalsmith'),
44588fc6 (Clay Carpenter 2015-04-27 20:55:42 -0400   4)     markdown = require('metalsmith-markdown'),
44588fc6 (Clay Carpenter 2015-04-27 20:55:42 -0400   5)     jadeTemplater = require('metalsmith-jade-templater'),
ace0a23a (Clay Carpenter 2015-04-28 18:36:47 -0400   6)     browserSync = require('metalsmith-browser-sync'),
0ed1fc02 (Clay Carpenter 2015-04-28 18:45:00 -0400   7)     drafts = require('metalsmith-drafts'),
6f6d95d3 (Clay Carpenter 2015-05-23 02:32:45 +0000   8)     sass = require('metalsmith-sass'),
6f6d95d3 (Clay Carpenter 2015-05-23 02:32:45 +0000   9)     yargs = require('yargs');
```

To find more details about a specific change, use git show along with the commit hash (e.g., `git show 6f6d95d3`). For details about the history of the file, use git log.

There are a few options provided to allow you to focus your search (by line, or starting at a certain commit) as well as to tailer the output. More details can be found in the [Git Blame documentation](https://git-scm.com/docs/git-blame).
