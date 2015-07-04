---
title: Git Tag Types
tags: git
template: /base.jade
category: snippet
---

There are two different types of tags available in Git: lightweight and annotated tags. Both of these tags are presented identically in basic `git tag` lists. For instance, consider a repository that has just two tags, one an annotated tag, the other a lightweight tag. They are named, conveniently enough, `annotated-tag` and `lightweight-tag`, respectively. Listing the git tags will produce the following output:

```
$ git tag -l

annotated-tag
lightweight-tag
```

There's really no way to tell from that output whether the tag is annotated or not (other than the unrealistic demo names). You could use `git show <tag name>`  to investigate each tag in turn, but that would prove tiresome in all but the most simple repositories.

Instead, you can take advantage of the `ls-remote` git command to list the tags in the local repository, and then look at the reference names to determine whether the tags are lightweight or annotated.

This begins with a command that looks like this:

```
git ls-remote --tags .
```

That will print out all of the tags in the local repository. The output will look something like this:

```
272033677b6aef49ac17041ac77d2ca826b36387	refs/tags/annotated-tag
e083d2d6dd1ae91e0de507ff88984bec26ef9d64	refs/tags/annotated-tag^{}
e083d2d6dd1ae91e0de507ff88984bec26ef9d64	refs/tags/lightweight-tag
```

Note the difference between how the `annotated-tag` and `lightweight-tag` are presented: the `annotated-tag` has two entries, including one that has a `^{}` suffix. The `annotated-tag` has two entries because it has both an entry for the tag message as well as a pointer to the commit object that tag refers to. In the case of the above example, the `refs/tags/annotated-tag` reference points to the tag message, while the `refs/tags/annotated-tag^{}` points to the commit. Because both the annotated and lightweight tag were created at the same time, they both point to the same (`e083d2d`) commit.
