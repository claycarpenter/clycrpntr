---
title: Searching File Trees With grep
tags: command line
template: /base.jade
category: snippet
---

The default mode for grep operates on a specific and somewhat limited set of files: either those files specifically named as search targets, or the files directly belonging to any directory specified as a search target. grep can be told to search all of the contents within a file tree by specifying that it should search in recursive mode. Adding the `-r` flag will switch grep into recursive mode, like so:

```
grep -r <search string> [target directory]
```

This will cause grep to look at every file within the target directory or any of its children. If the target directory isn't specified, grep will assume the target directory is the current working directory (equivalent to `.`). 

As grep searches it will report every instance of a match. This can get a bit overwhelming, especially if you're searching for a relatively common term among a large file set. grep can be made to report only every file that contains a match to the search string by adding the `-l` flag:

```
grep -rl <search string> [target directory]
```
