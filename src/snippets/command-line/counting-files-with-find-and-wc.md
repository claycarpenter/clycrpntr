---
title: Counting Files With find And wc
tags: command line
template: /base.jade
category: snippet
---

`find` can help you count the number of files in a directory. Simply calling `find` on a target directory will recursively list all of the files and directories contained within that target. In order to filter out all but file types, we'll need to pass the `-type f` flag. This command will locate all of the files under the `targetDir` directory:

```
find targetDir -type f
```

The output of that command will be each file found, printed on a line of its own. We can take advantage of that syntax by passing the output on to `wc`, and asking `wc` to return the lines count:

```
find targetDir -type f | wc -l
```

This will count all of the files and print out just the number of files found.

This technique also works well with a name filter. For instance, to count all of the snippets in this project's src directory, I could use:

```
find src/snippets -type f -name "*.md" | wc -l
```

Note that in cases like the one above, the `-type f` flag is made somewhat redundant by the `-name "*.md"` filter, as directory names will file extensions are uncommon. Your mileage will vary; when in doubt error on the side of being specific and adding the `-type f` flag.
