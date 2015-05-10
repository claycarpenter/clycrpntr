---
title: Finding Files With find
tags: command line
template: /base.jade
category: snippet
---

`find` allows you to quickly search file trees on the command line. find supports a large number of different tests to help craft a precise search. This article will only introduce a few basic and common commands. For fuller details about the utility, see these references:

* [find - Mac OS X Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/find.1.html)
* [find - Linux man page](http://linux.die.net/man/1/find)

## Basic Search

The most basic find usage asks the utility to search for a specific filename pattern from within a single directory. This is the syntax:

```
find <directory> -name <filename pattern>
```

To find this snippet's source from the current working directory, I would use this command:

```
find . -name "finding-files-with-find.md"
```

The filename pattern criteria can also take standard unix shell patterns, such as the wildcard (`*`) character. To find all Markdown files--those files with an extension of ".md"--I'd use this command:

```
find . -name "*.md"
```

## Detailed Results List

By default, find only prints the relative file path of any file that matches the search criteria. In order to print more detailed results, add the `-ls` flag.

We could print details for all Markdown files in the current directory like so:

```
find . -name "*.md" -ls
```

Assuming the search finds matching files, this will produce output that looks something like this:

```
 27479    4 -rw-r--r--   1 ubuntu   ubuntu       1584 May  4 22:36 src/snippets/find-element-by-id-pure-js.md
 32183    4 -rw-r--r--   1 ubuntu   ubuntu       1166 May 10 18:47 src/snippets/command-line/finding-files-with-find.md
 32155    4 -rw-r--r--   1 ubuntu   ubuntu       1176 May  8 01:58 src/snippets/command-line/du-disk-usage.md
 32145    4 -rw-r--r--   1 ubuntu   ubuntu       1187 May  6 22:29 src/snippets/dom-results-to-true-arrays.md
 ```
 
 The output prints file statistics in orderly columns. For most users, the most interesting portions of that result are:
 
 * Col 3 - The file permissions.
 * Cols 5 and 6 - The user and group IDs of the file owner.
 * Col 7 - The size of the file (in bytes).
 * Col 8 - The last time the file was modified.
 * Col 9 - The relative path of the file (relative to the target search directory).
