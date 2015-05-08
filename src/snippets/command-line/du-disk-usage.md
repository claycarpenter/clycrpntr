---
title: Finding Directory Size on the Command Line with du
tags: command line
template: /base.jade
category: snippet
---

The utility `du` can help you determine the size of a directory. The utility has a variety of options, included measurement units and result contents and formatting. The form I use the most is:

```
du -bhs [/path/to/directory]
```

The path to a directory is optional; if not provided `du` will default to the local working directory. The result of the command will be a single line summary of the targeted directory's size in a human-friendly format (e.g., 125M or 22K).

The flags performing the following functions:

* *-b* - Sets the unit of measurement (block size) to 1 byte, and reports file space by the size of the data in the file, rather than the amount of space the file occupies on the disk.
* *-h* - Writes out the measured sizes in a human-friendly format.
* *-s* - Prints a single line summary of the size of the target directory. If this option is omitted, the sizes are printed for each individual item of the contents within the target directory.

More information can be found in the [du man page](http://linux.die.net/man/1/du).
