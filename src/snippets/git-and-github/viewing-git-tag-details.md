---
title: Viewing Git Tag Details
tags: git
template: /base.jade
category: snippet
---

You can view the details of a Git tag by using the `git show` command. The simple syntax looks like this:

```
git show <tag name>
```

The output that the `git show` command produces depends on the tag type. If the tag referenced is an [annotated tag](http://git-scm.com/book/en/v2/Git-Basics-Tagging#Annotated-Tags), then both tag's message and the tagged commit are shown. If the target is a [lightweight tag](http://git-scm.com/book/en/v2/Git-Basics-Tagging#Lightweight-Tags), then only the tagged commit is shown.

Here are a couple of example tags. Each tag points to the same commit, but one tag is an annotated tag while the other is a lightweight tag. Here's an example of a lightweight tag output:

```
commit 18fdd914bb91432aab7bd0b8f5b583d5703011fb
Author: Clay Carpenter <claycarpenter@gmail.com>
Date:   Sun Jun 21 08:34:22 2015 -0400

    Adds link to the Dashboard page.
```

Note that this only shows the commit message for the commit the tag is pointing to.

This is the annotated tag output:

```
tag v1.1.0
Tagger: Clay Carpenter <claycarpenter@gmail.com>
Date:   Sun Jun 21 08:36:18 2015 -0400

Adds improved responsive styles.

Adds in the improved responsive styles developed for UX Design course checkpoint 32's assignment.

commit 18fdd914bb91432aab7bd0b8f5b583d5703011fb
Author: Clay Carpenter <claycarpenter@gmail.com>
Date:   Sun Jun 21 08:34:22 2015 -0400

    Adds link to the Dashboard page.
```

The annotated tag's output begins with the tag name (`tag v1.1.0`), and then continues with the tag's message before finally listing the commit details and message.
