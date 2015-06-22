---
title: Git Tag Types
tags: git
template: /base.jade
category: snippet
---

There are two different types of tags available in Git: lightweight and annotated tags.

### Lightweight tags

Lightweight tags are simply a label that points to a particular commit. They can be considered like immutable branches. They don't allow for storage of any other information than the tag name. When viewing the details of a lightweight tag, you'll see the commit details (message, commit object name, timestamp, author, etc.).

Lightweight tags are created when the `git tag` command is run without the `-a`, `-s`, or `-m` options. A lightweight tag creation looks like this:

```
git tag <tag name>
```

Becaue lightweight tags can store so little information, the [Git spec recommends](http://git-scm.com/book/en/v2/Git-Basics-Tagging#Creating-Tags) that annotated tags are used instead unless the tag is only meant to be temporary.

### Annotated tags

Like lightweight tags, annotated tags are a label for a specific commit. Unlike lightweight tags, annotated tags can also carry additional details. In addition to the commit pointer, they also carry the name of the tag author, a timestamp for the tag, and a tag message. Because of this, annotated tags are the recommended type of tags for more instances.

Creating an annotated tag requires the add (`-a`) or message (`-m`) flag. The flags can be used separately or in conjunction. Creating a tag with the add flag but without a message flag will open the editor to prompt for a commit message. Adding a tag without the add flag but with the message flag will create a new annotated tag with that message as the tag message.

Creating a tag without a message specified on the command line:

```
git tag -a v1.0.0
```

Creating a tag with a commit message:

```
git tag v1.0.0 -m "Our first release."
```
