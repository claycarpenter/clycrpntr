---
title: Listing Git Tags
tags: git
template: /base.jade
category: snippet
---

Git supports a few options for inspecting the tags recorded on a repository. We'll cover a handful of them here:

* listing all tags
* listing only tags that match a search pattern
* listing tag messages

### List all tags

Listing all tags is the default behavior of the `git tag` command. It's equivalent to a list with no search pattern provided: `git tag -l`. The command will list all tags available in the local repository.

### List matching tags

You can also list only the tags that match a certain pattern. The general syntax is `git tag -l <pattern>`. The pattern allows for wildcards, so you can for instance match all version 1 releases:

```
git tag -l v1.*
```

Multiple patterns can also be provided. When multiple patterns are provided, Git will find every tag that matches at least one of the patterns. For example, this command could find all alpha and beta release tags:

```
git tag -l *-alpha *-beta
```

### Listing tag messages

When listing tags you can also list the tag messages (also referred to as the tag annotations). For lightweight tags, the message presented is that of the commit the tag points to. For annotated tags, the message shown is the tag's message.

To view the tag annotations when listing tags, append the `-n` flag. The `-n` flag alone will list only the first line of the annotation, while adding a number immediately after the n (such as `-n4`) will list that many lines of the annotation.
